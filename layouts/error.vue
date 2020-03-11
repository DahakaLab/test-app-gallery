<template>
  <div class="error-page">
    <main class="error-page__content-wrapper">
      <Header class="header--independent" />
      <div class="error-page__content">
        <div class="error-page__status-code">
          <span>{{ statusCode }}</span>
        </div>
        <div class="error-page__message">
          <span>{{ message }}</span>
          <nuxt-link to="/" class="error-page__home-link">
            <span>главную страницу</span>
          </nuxt-link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Component from 'nuxt-class-component';
import { Vue, Prop } from 'vue-property-decorator';
import { AxiosError } from 'axios';
import { NuxtError } from '@nuxt/types';
import { Context } from '@nuxt/types/app';
import Header from '~/components/core/header/Header.vue';
import Footer from '~/components/core/footer/Footer.vue';

interface Error extends AxiosError, NuxtError {
  message: string;
}

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class ErrorPage extends Vue {
  @Prop({ type: Object, required: true })
  error!: Error;

  fetch({ store }: Context): void {
    store.dispatch('states/closeLoader');
  }

  get statusCode(): number | undefined {
    return this.error.statusCode;
  }

  get message(): string {
    if (this.statusCode === 404) {
      return `Страница, к которой вы обратились, не существует.
Перейдите на `;
    }
    return this.error.message;
  }
}
</script>

<style lang="scss">
.error-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: $white;

  &__content-wrapper {
    position: relative;
    flex: 1 1 100%;
    overflow-y: auto;
  }

  &__content {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 25%;
    transform: translate(0, -15px);
    margin: 20px 0;
  }

  &__status-code {
    font-size: 140px;
    font-weight: 700;
    line-height: 140px;
    color: $grayLight;
    margin-bottom: 20px;
  }

  &__message {
    font-size: 15px;
    line-height: 24px;
    color: $greenDarkness;
    white-space: pre-line;
    text-align: center;
  }

  &__home-link {
    color: $greenDarker;
  }

  @media (min-width: $screenTablet) {
    &__content {
      transform: translate(0, -20px);
    }

    &__status-code {
      font-size: 250px;
      line-height: 250px;
      margin-bottom: 25px;
    }
  }

  @media (min-width: $screenDesktop) {
    &__content {
      top: 30%;
      transform: translate(0, -35px);
    }
  }
}
</style>
