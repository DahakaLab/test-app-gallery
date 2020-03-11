<template>
  <header class="header">
    <!-- <div class="header__container">
      <div class="header__button-section header__button-section--additional">
        <nuxt-link to="/" class="header__main-link">
          <Logo class="header__logo" />
        </nuxt-link>
      </div>
      <div class="header__button-section">
        <a :href="`tel:${contactPhoneNumber}?call`" class="header__phone-container">
          <PhoneRingSVG />
          <span class="header__phone-description">
            Справочная служба
          </span>
          <span class="header__phone-value">
            {{ contactPhoneNumber }}
          </span>
        </a>
        <button
          class="header__mobile-header-btn"
          @click="changeAuthorizationStatus"
        >
          <LogOutSVG v-if="isAuthorized" />
          <ProfileSVG v-else-if="isActivation" />
          <CardSimpleSVG v-else />
        </button>
        <UiButton
          :class="['header__header-btn', headerBtn.className]"
          :info="headerBtn.info"
          @click="changeAuthorizationStatus"
        />
      </div>
    </div> -->
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { AuthorizationStatus } from '~/types/store/authorization';
import PhoneRingSVG from '~/assets/svg/phone-ring.svg';
import LogOutSVG from '~/assets/svg/log-out.svg';
import ProfileSVG from '~/assets/svg/profile.svg';
import CardSimpleSVG from '~/assets/svg/card-simple.svg';

type HeaderBtn = {
  className: string;
  info: UiButtonInfo;
};

@Component({
  components: {
    PhoneRingSVG,
    LogOutSVG,
    ProfileSVG,
    CardSimpleSVG,
  },
})
export default class Header extends Vue {
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
  flex: 0 0 $headerHeightMobile;
  width: 100%;
  height: $headerHeightMobile;
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

  &--independent {
    background:
      linear-gradient(
        to bottom,
        $white 50%,
        $white 75%,
        transparent 100%
      );
    border-bottom: none;

    #{$parent}__hamburger-button {
      display: none;
    }
  }

  &__button-section {
    display: flex;
    align-items: center;
  }

  &__hamburger-button {
    margin-right: 8px;
  }

  &__main-link {
    transition: opacity $baseTransition;

    &:focus {
      box-shadow: none;
      opacity: 0.5;
    }
  }

  &__logo {
    width: 130px;
    height: 26px;
  }

  &__mobile-header-btn,
  &__phone-container {
    width: 40px;
    height: 40px;

    svg {
      width: 100%;
      height: 100%;
      stroke: $baseColor;
    }

    span {
      display: none;
    }
  }

  &__mobile-header-btn {
    margin-left: 8px;
  }

  &__header-btn {
    display: none;
  }

  @media (min-width: $screenTablet) {
    flex: 0 0 70px;
    height: 70px;

    &--independent {
      #{$parent}__container {
        padding: 10px 20px;
      }
    }

    &__container {
      padding: 10px 20px;
    }

    &__hamburger-button {
      margin-right: 20px;
    }

    &__logo {
      width: 175px;
      height: 35px;
    }

    &__phone-container {
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      width: auto;
      height: auto;
      text-align: right;

      svg {
        display: none;
      }

      span {
        display: inline;
      }
    }

    &__phone-description {
      margin-bottom: 5px;
      font-size: 13px;
      color: $gray;
    }

    &__phone-value {
      font-size: 18px;
    }

    &__mobile-header-btn {
      display: none;
    }

    & &__header-btn {
      display: block;
      font-size: 16px;
      padding: 12px 25px;

      &--logout {
        color: $baseColor;
        padding: 12px 46px;
      }
    }
  }

  @media (min-width: $screenDesktop) {
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 100%;
      width: calc((100vw - 100% - #{$sidebarWidthDesctop}) / 2);
      height: 1px;
      background-color: rgba($greenDarkness, 0.08);
    }

    position: relative;

    &__container {
      justify-content: flex-end;
      padding: 0;
    }

    &--independent {
      #{$parent}__container {
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1280px;
        padding: 10px 55px;
      }

      #{$parent}__button-section {
        display: flex;
      }
    }

    &__button-section {
      &--additional {
        display: none;
      }
    }
  }
}
</style>
