import { Vue } from 'vue-property-decorator';
import IMask from 'imask';

export interface UiInputInfo {
  label?: string;
  errors?: string[];
  relationName?: string;
}

export interface UiInputMask extends Vue {
  masked: IMask.DeduceMasked<IMask.AnyMaskedOptions>;
}

export interface UiInputMaskInfo extends UiInputInfo {
  maskOptions: IMask.AnyMaskedOptions;
}

export interface UiInputMaskParams {
  complete: boolean;
}

export interface UiInputMaskEvent<T = any> {
  (value: string, params: UiInputMaskParams): T;
}

export interface UiInput {
  value?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  info?: UiInputInfo | UiInputMask;
}
