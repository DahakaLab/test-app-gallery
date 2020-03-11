<template>
  <button
    :disabled="disabled"
    :form="form"
    :type="type"
    class="ui-button"
    v-on="$listeners"
  >
    <span v-if="phrase">{{ phrase }}</span>
    <slot v-else />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class UiButton extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  readonly disabled!: boolean;

  @Prop({ type: String, required: false })
  readonly form!: string | undefined;

  @Prop({ type: String, required: false })
  readonly type!: string | undefined;

  @Prop({ type: Object, required: false })
  readonly info!: UiButtonInfo | undefined;

  get phrase(): string | undefined {
    return this.info ? this.info.phrase : undefined;
  }
}
</script>

<style lang="scss">
.ui-button {
  padding: 14px 35px;
  font-family: $rotondac;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  color: $active;
  transition:
    background-color $baseTransition,
    color $baseTransition,
    border $baseTransition;

  &:hover {
    color: $greenDarker;
  }

  &:disabled {
    cursor: auto;
  }

  &--bigger {
    padding: 16px 20px 20px;
    font-size: 16px;
    letter-spacing: 0.64px;
  }

  &--outline {
    border: solid 1px $greenLighter;
    color: $greenLighter;

    &:hover {
      color: $greenDarker;
      border-color: $greenDarker;
    }

    &:disabled {
      color: $grayLight;
      border-color: $grayLight;
    }
  }

  &--filled {
    background-color: $greenLighter;
    color: $white;

    &:hover {
      color: $white;
      background-color: $greenLight;
    }

    &:disabled {
      background-color: $graySilver;
      color: $grayLightSome;
    }
  }
}
</style>
