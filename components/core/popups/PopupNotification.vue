<template>
  <div class="popup-notification">
    <div class="popup-notification__container">
      <span v-if="info.title" class="popup-notification__title">{{ info.title }}</span>
      <UiWysiwyg v-if="info.content" class="popup-notification__content" :info="content" />
    </div>
    <UiButton class="popup-notification__button ui-button--filled" @click="emitNotification">
      <span>Подтвердить</span>
    </UiButton>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { PopupNotificationInfo } from '~/types/base/popup';

@Component
export default class PopupInformation extends Vue {
  // get info(): PopupNotificationInfo | undefined {
  //   return this.$store.getters['popup/getInfo'];
  // }

  // get content(): UiWysiwygInfo {
  //   if (this.info) return { html: this.info.content || '' };
  //   return { html: '' };
  // }

  // emitNotification(): void {
  //   this.$store.dispatch('popup/emitNotification');
  // }
}
</script>

<style lang="scss">
.popup-notification {
  background-color: $white;
  font-size: 15px;
  font-weight: 400;
  margin-right: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;

  &__container {
    margin-bottom: 20px;
  }

  &__title {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    line-height: 24px;
    white-space: pre-line;
  }

  &__content {
    p {
      margin-bottom: 5px;
    }

    a {
      text-decoration: underline;
    }

    span {
      display: inline-block;
      width: 100%;
    }
  }

  &__button {
    align-self: center;
  }
}
</style>
