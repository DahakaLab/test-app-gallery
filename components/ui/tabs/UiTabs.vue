<template>
  <div class="ui-tabs">
    <UiButton
      v-for="(tab, index) in tabs"
      :key="`ui-tabs-${index}`"
      :type="'button'"
      :info="{ phrase: tab.phrase }"
      :class="[
        'ui-tabs__button',
        tab.value === selected ? 'ui-tabs__button--active ui-button--filled' : '',
      ]"
      @click.prevent="selected = tab.value"
    />
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop,
} from 'vue-property-decorator';

@Component
export default class UiTabs extends Vue {
  @Prop({ type: Object, required: true })
  readonly info!: UiTabsInfo<string>;

  get tabs(): Tab<string>[] {
    return this.info.tabs;
  }

  get selected(): string | undefined {
    return this.$store.getters[this.info.getter];
  }

  set selected(value: string | undefined) {
    this.$store.dispatch(this.info.action, value);
  }
}
</script>

<style lang="scss">
.ui-tabs {
  display: flex;
  justify-content: space-between;
  width: 100%;

  & &__button {
    padding: 14px 25px;
    font-weight: 400;
  }

  &__button + &__button {
    margin-left: 5px;
  }
}
</style>
