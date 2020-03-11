<template>
  <header class="header">
    <dir class="header__container main-container">
      <h1>{{ appName }}</h1>
    </dir>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  get appName(): string {
    return this.$constants.content.appName;
  }

  // get authorizationStatus(): AuthorizationStatus | undefined {
  //   return this.$store.getters['authorization/getStatus'];
  // }

  // get isAuthorized(): boolean {
  //   return this.authorizationStatus === 'authorized';
  // }

  // get isActivation(): boolean {
  //   return this.authorizationStatus === 'activation';
  // }

  // get headerBtn(): HeaderBtn {
  //   if (this.isAuthorized) {
  //     return {
  //       className: 'header__header-btn--logout ui-button ui-button--outline',
  //       info: {
  //         phrase: 'Выйти',
  //       },
  //     };
  //   }
  //   if (this.isActivation) {
  //     return {
  //       className: 'ui-button--filled',
  //       info: {
  //         phrase: 'Войти в личный кабинет',
  //       },
  //     };
  //   }
  //   return {
  //     className: 'ui-button--filled',
  //     info: {
  //       phrase: 'Активировать карту',
  //     },
  //   };
  // }

  // get contactPhoneNumber(): string {
  //   return this.$constants.content.contactPhoneNumber;
  // }

  // changeAuthorizationStatus(): void {
  //   if (this.isAuthorized) {
  //     this.$store.dispatch('authorization/logout');
  //   } else if (this.isActivation) {
  //     this.$store.dispatch('authorization/authorize');
  //   } else {
  //     this.$store.dispatch('authorization/activate');
  //   }
  // }
}
</script>

<style lang="scss">
.header {
  flex: 0 0 80px;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba($greenDarkness, 0.08);
  $parent: &;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: $screenTablet) {
    flex: 0 0 70px;
    height: 70px;

    &__container {
      padding: 10px 20px;
    }
  }

  @media (min-width: $screenDesktop) {
    position: relative;

    &__container {
      padding: 0;
    }
  }
}
</style>
