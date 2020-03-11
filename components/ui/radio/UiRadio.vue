<template>
  <label class="ui-radio">
    <input
      type="radio"
      :value="info.value"
      :checked="checked"
      @change="$emit('change', info.value)"
    >
    <div class="ui-radio__icon">
      <span />
    </div>
    <span>{{ info.title }}</span>
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
export default class UiRadio extends Vue {
  @Prop({ type: Object, required: true })
  readonly info!: UiRadioInfo;

  @Model('change', { type: String })
  readonly selected!: string;

  get checked(): boolean {
    return this.selected === this.info.value;
  }
}
</script>

<style lang="scss">
.ui-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  $parent: &;

  input {
    opacity: 0;
    height: 0;
    width: 0;

    &:checked {
      & + #{$parent}__icon {
        border-color: $greenLighter;

        span {
          opacity: 1;
        }
      }
    }

    &:focus {
      & + #{$parent}__icon {
        border-color: $greenDarker;
      }
    }
  }

  &:hover {
    #{$parent}__icon {
      box-shadow: 0 0 10px 0 $active;
      border-color: $active;
    }
  }

  &__icon {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid 2px $grayBitLighter;
    transition:
      box-shadow $baseTransition,
      border $baseTransition;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $greenLighter;
      transition: opacity $baseTransition;
    }
  }
}
</style>
