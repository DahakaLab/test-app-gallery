<template>
  <div :class="['ui-dropdown', modifier]">
    <button type="button" class="ui-dropdown__heading" @click="openContent">
      <span class="ui-dropdown__title">{{ info.title }}</span>
      <span class="ui-dropdown__open-icon" />
    </button>
    <transition
      name="ui-dropdown__content"
      enter-class="ui-dropdown__content--enter"
      leave-to-class="ui-dropdown__content--leave-to"
      @enter="enter"
      @leave="leave"
    >
      <div v-if="isOpened" class="ui-dropdown__content">
        <UiWysiwyg class="ui-dropdown__wysiwyg" :info="content" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class UiDropdown extends Vue {
  @Prop({ type: Object, required: true })
  readonly info!: UiDropdownInfo;

  isOpened = false;

  get content(): UiWysiwygInfo {
    return { html: this.info.content };
  }

  get modifier(): string {
    return this.isOpened ? 'ui-dropdown--opened' : '';
  }

  openContent(): void {
    this.isOpened = !this.isOpened;
  }

  enter(el: HTMLElement): void {
    el.style.height = `${el.scrollHeight.toString()}px`;
  }

  leave(el: HTMLElement): void {
    el.style.height = '0px';
  }
}
</script>

<style lang="scss">
.ui-dropdown {
  width: 100%;
  border-radius: 6px;
  background: $white;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  $parent: &;

  &--opened {
    #{$parent}__title {
      transition: color $baseTransition;
      color: $active;
    }

    #{$parent}__open-icon {
      transition: transform $baseTransition, border $baseTransition;
      border-left: 2px solid $active;
      border-bottom: 2px solid $active;
      transform: translateY(5px) rotate(135deg);
    }
  }

  &__heading {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 20px;

    &:focus {
      box-shadow: none;

      #{$parent}__title {
        transition: color $baseTransition;
        color: $active;
      }
    }
  }

  &__title {
    transition: color $baseTransition;
    font-weight: 400;
    margin-right: 20px;
  }

  &__open-icon {
    transition: transform $baseTransition, border $baseTransition;
    position: absolute;
    right: 25px;
    top: 20px;
    display: block;
    width: 11px;
    height: 11px;
    border-left: 2px solid $grayLight;
    border-bottom: 2px solid $grayLight;
    transform: rotate(-45deg);
  }

  &__content {
    transition: height $baseTransition, opacity $baseTransition;
    width: 100%;
    overflow: hidden;
    height: 0;
    opacity: 1;

    &--enter,
    &--leave-to {
      opacity: 0;
    }
  }

  & &__wysiwyg {
    padding: 20px 40px 40px;
  }
}
</style>
