import {
  Component,
  Vue,
  Prop,
  Ref,
} from 'vue-property-decorator';

@Component
export default class UiInputMixin extends Vue {
  @Ref('input')
  readonly inputEl!: HTMLInputElement;

  @Prop({ type: String, required: false, default: '' })
  readonly value!: string;

  @Prop({ type: String, required: false, default: 'text' })
  readonly type!: string;

  @Prop({ type: Boolean, required: false, default: false })
  readonly disabled!: boolean;

  @Prop({ type: String, required: false, default: '' })
  readonly placeholder!: string;

  @Prop({ type: Boolean, required: false, default: undefined })
  readonly required!: boolean | undefined;

  @Prop({ type: Boolean, required: false, default: false })
  readonly readonly!: boolean;

  @Prop({ type: Boolean, required: false, default: false })
  readonly autofocus!: boolean;

  @Prop({ type: String, required: false })
  readonly form!: string | undefined;

  @Prop({ type: Object, required: false, default: undefined })
  readonly info!: UiInputInfo | undefined;

  get labelView(): boolean {
    return (this.info?.label !== undefined);
  }

  get relationName(): string | undefined {
    if (this.info) return this.info.relationName;
    return undefined;
  }

  get errorsView(): boolean {
    return (Array.isArray(this.info?.errors) && this.info?.errors?.length !== 0);
  }

  get isRequiredTextView(): boolean {
    return (this.required !== undefined && !this.required);
  }

  mounted(): void {
    if (this.autofocus) {
      this.$nextTick(() => {
        this.inputEl.focus();
      });
    }
  }
}
