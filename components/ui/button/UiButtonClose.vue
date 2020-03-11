<template>
  <button
    type="button"
    class="ui-button-close"
    v-on="$listeners"
  >
    <span />
    <span />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class UiButtonClose extends Vue {}
</script>

<style lang="scss">
.ui-button-close {
  width: 24px;
  height: 24px;

  span {
    position: absolute;
    content: '';
    width: 13px;
    height: 2px;
    background-color: $turquoiseGray;
    top: 50%;
    left: 50%;
  }

  :nth-child(1) {
    transform: translateX(-50%) rotate(45deg);
  }

  :nth-child(2) {
    transform: translateX(-50%) rotate(-45deg);
  }
}
</style>
