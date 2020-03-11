<template>
  <div class="popup-cards">
    <span class="popup-cards__title">
      {{ title }}
    </span>
    <UiSwiper class="popup-cards__container" :info="uiSwiperInfo">
      <template v-slot:sliders>
        <div
          v-for="(card, key) in cards"
          :key="`popup-cards-${key}`"
          class="popup-cards__item ui-swiper__slide"
        >
          <img
            :src="$loadAssets(card.image)"
            alt="cards"
          >
        </div>
      </template>
    </UiSwiper>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

type PopupCardInfo = {
  image: string;
}

@Component
export default class PopupCards extends Vue {
  title = 'Номер карты находится на лицевой стороне, внизу слева.';

  cards: PopupCardInfo[] = [
    {
      image: './images/cards/base-card-info.png',
    },
    {
      image: './images/cards/silver-card-info.png',
    },
    {
      image: './images/cards/gold-card-info.png',
    },
  ];

  uiSwiperInfo: UiSwiperInfo = {
    additionalWrapperName: 'popup-cards__wrapper',
    disable: {
      tablet: true,
      desktop: true,
    },
  }
}
</script>

<style lang="scss">
.popup-cards {
  font-size: 15px;
  font-weight: 400;
  width: 100%;

  &__title {
    display: block;
    margin-bottom: 25px;
    max-width: 210px;
    line-height: 24px;
  }

  & &__container {
    overflow: visible;
    width: 100%;
    max-width: 180px;
    height: 110px;
    margin-bottom: 20px;
    position: relative;
  }

  &__wrapper {
    width: 100%;
    height: 100%;
  }

  &__item {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (min-width: $screenTablet) {
    &__title {
      margin-bottom: 40px;
      padding: 0 15px;
      max-width: initial;
    }

    & &__container {
      margin-bottom: 60px;
      max-width: initial;
      height: auto;
    }

    &__wrapper {
      width: auto;
      height: auto;
      justify-content: space-between;
    }

    &__item {
      width: 210px;
      height: 130px;

      & + & {
        margin-left: 10px;
      }
    }
  }
}
</style>
