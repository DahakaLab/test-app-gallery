<template>
  <div>
  <!-- <div v-if="showPopup" :class="['popup', modifier]"> -->
    <!-- <div class="popup__outside-click" @click="closePopup" />
    <div class="popup__wrapper">
      <div class="popup__content">
        <UiButtonClose class="popup__close" @click="closePopup" />
        <component
          :is="name"
        />
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import PopupCards from './PopupCards.vue';
// import PopupInformation from './PopupInformation.vue';
// import PopupСaptcha from './PopupСaptcha.vue';
// import PopupReceipt from './PopupReceipt.vue';
// import PopupNotification from './PopupNotification.vue';

@Component({
  components: {
    // cards: PopupCards,
    // information: PopupInformation,
    // captcha: PopupСaptcha,
    // receipt: PopupReceipt,
    // notification: PopupNotification,
  },
})
export default class Popup extends Vue {
  // get name(): string {
  //   return this.$store.getters['popup/getName'];
  // }

  // get showPopup(): boolean {
  //   return this.name !== '';
  // }

  // get modifier(): string {
  //   if (this.name === 'captcha') return 'popup--captcha';
  //   if (this.name === 'information') return 'popup--information';
  //   if (this.name === 'receipt') return 'popup--receipt';
  //   return '';
  // }

  // closePopup(): void {
  //   this.$store.dispatch('popup/closePopup');
  // }
}
</script>

<style lang="scss">
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  width: 100%;
  background-color: rgba($black, 0.5);
  z-index: 30;
  padding: 50px 10px;
  overflow-x: hidden;
  overflow-y: auto;
  $parent: &;

  &--captcha {
    #{$parent}__content {
      max-width: 350px;
      min-width: 315px;
    }
  }

  &--information {
    #{$parent}__content {
      max-width: 500px;
      min-width: 315px;
    }
  }

  &--receipt {
    #{$parent}__content {
      padding: 0;
      border-radius: 6px 6px 0 0;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 12px;
        left: 0;
        bottom: -12px;
        background:
          linear-gradient(-135deg, $white 6px, transparent 0),
          linear-gradient(135deg, $white 6px, transparent 0);
        background-position: left-bottom;
        background-repeat: repeat-x;
        background-size: 12px 12px;
      }
    }
  }

  &__outside-click {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }

  &__content {
    overflow: hidden;
    background-color: $white;
    position: relative;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 25px 20px;
    width: 100%;
    max-width: 700px;
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
