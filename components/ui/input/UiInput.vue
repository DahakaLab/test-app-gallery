<template>
  <div :class="['ui-input', disabled ? 'ui-input--disabled' : '']">
    <label :for="relationName" class="ui-input__label">
      <span class="ui-input__heading">
        <span v-if="labelView">
          {{ info.label }}
        </span>
        <span v-if="isRequiredTextView" class="ui-input-mask__required-text">
          необязательно
        </span>
      </span>
      <input
        :id="relationName"
        ref="input"
        :value="value"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
        :form="form"
        v-on="inputListeners"
      >
    </label>
    <div v-if="errorsView" class="ui-input__errors">
      <span v-for="(error, i) in info.errors" :key="`ui-input-${i}`">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Mixins, Component } from 'vue-property-decorator';
import UiInputMixin from './UiInputMixin';

@Component
export default class UiInput extends Mixins(UiInputMixin) {
  get inputListeners(): Record<string, Function | Function[]> {
    const vm = this;
    const obj = {};
    return Object.assign(obj,
      this.$listeners,
      {
        input({ target }: Event) {
          vm.$emit('input', (target as HTMLInputElement).value);
        },
        change({ target }: Event) {
          vm.$emit('change', (target as HTMLInputElement).value);
        },
      });
  }
}
</script>

<style lang="scss">
@import './input';
</style>
