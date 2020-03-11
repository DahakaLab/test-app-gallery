<template>
  <label class="ui-checkbox">
    <input
      type="checkbox"
      :checked="checked"
      v-on="inputListeners"
    >
    <div class="ui-checkbox__icon">
      <span />
    </div>
    <span v-if="isShowTitle">
      {{ info.title }}
      <span
        v-if="isShowDescription"
        class="ui-checkbox__active"
      >{{ info.description }}</span>
      <a
        v-if="isShowLink"
        :href="info.link.href"
        class="ui-checkbox__active"
      >{{ info.link.phrase }}</a>
    </span>
  </label>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Model,
} from 'vue-property-decorator';

@Component
export default class UiCheckbox extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Object, required: false })
  readonly info!: UiCheckboxInfo | undefined;

  @Model('change', { type: Boolean })
  readonly checked!: boolean;

  get inputListeners(): Record<string, Function | Function[]> {
    const vm = this;
    return Object.assign({},
      this.$listeners,
      {
        input({ target }: Event) {
          vm.$emit('input', (target as HTMLInputElement).checked);
        },
        change({ target }: Event) {
          vm.$emit('change', (target as HTMLInputElement).checked);
        },
      });
  }

  get isShowTitle(): boolean {
    return this.info?.title !== undefined;
  }

  get isShowDescription(): boolean {
    return this.info?.description !== undefined;
  }

  get isShowLink(): boolean {
    return this.info?.link?.href !== undefined && this.info?.link?.phrase !== undefined;
  }
}
</script>

<style lang="scss">
.ui-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  $parent: &;

  input {
    opacity: 0;
    height: 0;
    width: 0;

    &:checked {
      & + #{$parent}__icon {
        background-color: $greenLighter;
        border-color: $greenLighter;

        span {
          opacity: 1;
        }
      }
    }

    &:focus {
      & + #{$parent}__icon {
        border-color: $active;
        box-shadow: 0 0 10px 0 $active;
      }
    }
  }

  &:hover {
    #{$parent}__icon {
      border-color: $active;
    }
  }

  &__icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    min-width: 20px;
    height: 20px;
    border-radius: 3px;
    border: solid 2px $grayBitLighter;
    transition:
      box-shadow $baseTransition,
      border $baseTransition;

    span {
      opacity: 0;
      transition: opacity $baseTransition;
      border-left: 2px solid $white;
      border-bottom: 2px solid $white;
      height: 7px;
      width: 12px;
      transform: rotate(-45deg) translate(15%, -25%);
    }
  }

  &__active {
    color: $greenDarker;
  }
}
</style>
