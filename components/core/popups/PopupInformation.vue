<template>
  <div class="popup-information">
    <span v-if="info.title" class="popup-information__title">{{ info.title }}</span>
    <UiWysiwyg v-if="info.content" class="popup-information__content" :info="content" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { PopupInformationInfo } from '~/types/base/popup';

@Component
export default class PopupInformation extends Vue {
  // get info(): PopupInformationInfo | undefined {
  //   return this.$store.getters['popup/getInfo'];
  // }

  // get content(): UiWysiwygInfo {
  //   if (this.info) return { html: this.info.content || '' };
  //   return { html: '' };
  // }
}
</script>

<style lang="scss">
.popup-information {
  background-color: $white;
  font-size: 15px;
  font-weight: 400;
  margin-right: 20px;
  padding-left: 10px;

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
}
</style>
