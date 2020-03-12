<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__info-container">
        <span class="footer__title">{{ title }}</span>
        <span class="footer__description">{{ description }}</span>
      </div>
      <div class="footer__contact-container">
        <a :href="`mailto:${contactEmail}?subject=Обратная связь`" class="footer__contact">
          <span>{{ nickName }}</span>
        </a>
        <div class="footer__link-container">
          <a
            v-for="(social, index) in socials"
            :key="`footer-social-link-${index}`"
            :href="social.url"
            class="footer__social-link"
            target="_blank"
          >
            <component :is="social.name" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import VkSVG from '~/assets/svg/social/vk.svg';
import FbSVG from '~/assets/svg/social/fb.svg';
import { Social } from '~/types/injection/constants';

@Component({
  components: {
    vk: VkSVG,
    fb: FbSVG,
  },
})
export default class Footer extends Vue {
  get contactEmail(): string {
    return this.$constants.content.email;
  }

  get nickName(): string {
    return this.$constants.content.nickName;
  }

  title = '2020 Test app gallery';

  description = `Проект разработал ${this.$constants.content.fullName}`;

  get socials(): Social[] {
    return this.$constants.socials;
  }
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: $whiteGray;
  color: $turquoiseGray;
  font-family: $rotondac;

  a {
    color: $turquoiseGray;
  }

  &__wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__info-container {
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    margin: 20px 20px 25px;
    flex: 1 0 100%;
  }

  &__title {
    font-size: 12px;
    line-height: 18px;
  }

  &__description {
    font-size: 10px;
    line-height: 14px;
  }

  &__contact-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__contact {
    font-size: 18px;
    margin: 0 15px 15px;
    padding: 15px;
    width: 100%;
    max-width: 132px;
    text-align: center;
    border-radius: 10px;
    transition: color $baseTransition;

    &:hover {
      color: $active;
    }
  }

  &__link-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid $grayFlash;
    width: 100%;
    padding: 10px 50px;
  }

  &__logo {
    display: none;
  }

  &__social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;

    svg {
      flex: 0 0 24px;
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: $screenTablet) {
    &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 25px 55px 15px;
    }

    &__info-container {
      max-width: 310px;
      display: flex;
      flex-direction: column;
      margin: 0;
    }

    &__title {
      font-size: 13px;
      line-height: 1.54;
    }

    &__description {
      font-size: 10px;
    }

    &__contact-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    &__contact {
      font-size: 18px;
      margin: 0;
      border: 0;
    }

    &__link-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-left: 35px;
      padding: 0;
      width: auto;
      border-top: none;
    }

    &__social-link {
      margin: 0;

      & + & {
        margin-left: 35px;
      }
    }
  }

  @media (min-width: $screenDesktop) {
    &__wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      width: 100%;
      max-width: 1280px;
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      max-width: 260px;
    }

    &__title {
      font-size: 12px;
    }

    &__description {
      font-size: 9px;
    }

    &__contact-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }

    &__contact {
      max-width: 132px;
      font-size: 18px;
      margin: 0;
      padding: 10px;
      border: 0;
    }

    &__link-container {
      display: flex;
      justify-content: flex-end;
      width: auto;
      margin-left: 25px;
    }

    &__logo {
      display: block;
    }
  }
}
</style>
