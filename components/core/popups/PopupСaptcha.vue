<template>
  <form class="popup-captcha" @submit.prevent="onSubmit">
    <div ref="captcha" class="popup-captcha__container" />
    <UiButton class="ui-button--filled" :disabled="isButtonDisabled">
      <span>Подтвердить</span>
    </UiButton>
  </form>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  // Ref,
} from 'vue-property-decorator';
// import { PopupCaptchaInfo } from '~/types/base/popup';
// import { ApiQuery } from '~/types/store/api';
// import eventBus from '~/helpers/eventBus';
// import IOCaptchaResponse from '~/types/io-ts/captcha';

interface AuthorizationRecaptcha {
  'g_recaptcha_response': string;
}

@Component
export default class PopupСaptcha extends Vue {
  // @Ref('captcha')
  // captchaContainer!: HTMLElement;

  // get info(): PopupCaptchaInfo | undefined {
  //   return this.$store.getters['popup/getInfo'];
  // }

  // grecaptchaResponse: string | null = null;

  // get isButtonDisabled(): boolean {
  //   return this.grecaptchaResponse === null;
  // }

  // setGrecaptchaResponse(value: string): void {
  //   this.grecaptchaResponse = value;
  // }

  // async onSubmit(): Promise<void> {
  //   if (!this.isButtonDisabled) {
  //     const request: ApiQuery<AuthorizationRecaptcha> = {
  //       url: '/security/captcha',
  //       data: {
  //         g_recaptcha_response: this.grecaptchaResponse as string,
  //       },
  //       IOType: IOCaptchaResponse,
  //     };
  //     const { status, data } = await this.$store.dispatch('api/post', request, { root: true });
  //     eventBus.$emit('captchaSubmit', data);
  //     if (data && status === 200 && data.is_valid === true) {
  //       this.$store.dispatch('popup/closePopup', null, { root: true });
  //     }
  //   }
  // }

  // mounted(): void {
  //   const capthaParam = {
  //     sitekey: this.info && this.info.sitekey ? this.info.sitekey : '',
  //     callback: this.setGrecaptchaResponse,
  //   };
  //   window.grecaptcha.render(this.captchaContainer, capthaParam);
  // }
}
</script>

<style lang="scss">
.popup-captcha {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    margin: 30px 0 20px;
  }
}
</style>
