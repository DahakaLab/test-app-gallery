<template>
  <div :class="['ui-input-mask', disabled ? 'ui-input-mask--disabled' : '']">
    <div :for="relationName" class="ui-input-mask__label">
      <span class="ui-input-mask__heading">
        <span v-if="labelView">
          {{ info.label }}
        </span>
        <span v-if="isRequiredTextView" class="ui-input-mask__required-text">
          необязательно
        </span>
      </span>
      <div class="ui-input-mask__input-wrapper">
        <slot />
        <input
          :id="relationName"
          ref="input"
          :type="type"
          :disabled="disabled"
          :placeholder="placeholder"
          :readonly="readonly"
          :required="required"
          :form="form"
          @change="emitEvent('change')"
          @focus="emitEvent('focus')"
          @blur="emitEvent('blur')"
          @click="emitEvent('click')"
        >
      </div>
    </div>
    <div v-if="errorsView" class="ui-input-mask__errors">
      <span v-for="(error, i) in info.errors" :key="`ui-input-mask-${i}`">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Mixins,
  Component,
  Prop,
  Watch,
} from 'vue-property-decorator';
import IMask from 'imask';
import UiInputMixin from './UiInputMixin';

type MaskStatus = 'complete' | 'accept';

@Component
export default class UiInputMask extends Mixins(UiInputMixin) {
  @Prop({ type: Object, required: true })
  readonly info!: UiInputMaskInfo;

  get maskOptions(): IMask.AnyMaskedOptions {
    return this.info.maskOptions;
  }

  iMaskInstance!: IMask.InputMask<IMask.AnyMaskedOptions>;

  get masked(): IMask.DeduceMasked<IMask.AnyMaskedOptions> {
    return this.iMaskInstance.masked;
  }

  emitEvent(event: string): void {
    const uiInputMaskParams: UiInputMaskParams = {
      complete: this.masked.isComplete,
    };
    this.$emit(event, this.iMaskInstance.unmaskedValue, uiInputMaskParams);
  }

  @Watch('maskOptions', { deep: true })
  onMaskOptionsChanged(): void {
    this.iMaskInstance.updateOptions(this.maskOptions);
  }

  @Watch('value')
  onValueChanged(): void {
    this.iMaskInstance.unmaskedValue = this.value;
    this.emitEvent('value-changed');
  }

  mounted(): void {
    this.iMaskInstance = IMask(this.inputEl, this.maskOptions)
      .on('accept', () => {
        this.emitEvent('input');
      })
      .on('complete', () => {
        this.emitEvent('input');
      });
    this.iMaskInstance.unmaskedValue = this.value;
  }
}
</script>

<style lang="scss">
@import './input';
</style>
