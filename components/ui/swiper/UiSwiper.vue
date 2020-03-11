<template>
  <div :class="blockName">
    <div
      v-if="paginationEnabled"
      v-show="swiperInitializatied"
      ref="pagination"
      :class="[`${blockName}__pagination`, paginationModifier]"
    />
    <div :class="[`${blockName}__wrapper`, wrapperModifier]">
      <slot name="sliders" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  // Prop,
  // Watch,
} from 'vue-property-decorator';
// import Swiper from 'swiper';
// import { TypeScreen } from '~/types/base/screen';

type Enable = {
  mobile: boolean;
  tablet: boolean;
  desktop: boolean;
}

@Component
export default class UiSwiper extends Vue {
  // swiper: Swiper | undefined = undefined;

  // blockName = 'ui-swiper';

  // additionalWrapperName: string | undefined = undefined;

  // get wrapperModifier(): string {
  //   return this.additionalWrapperName ? this.additionalWrapperName : '';
  // }

  // additionalPaginationName: string | undefined = undefined;

  // get paginationModifier(): string {
  //   return this.additionalPaginationName ? this.additionalPaginationName : '';
  // }

  // paginationEnabled = false;

  // enable: Enable = {
  //   mobile: true,
  //   tablet: true,
  //   desktop: true,
  // };

  // destroy = true;

  // @Prop({ type: Object, required: false })
  // readonly info!: UiSwiperInfo;

  // get currentTypeScreen(): TypeScreen | undefined {
  //   return this.$store.getters['states/getCurrenTypetScreen'];
  // }

  // get swiperInitializatied(): boolean {
  //   return this.currentTypeScreen ? this.enable[this.currentTypeScreen] : false;
  // }

  // setSettings(): void {
  //   if (this.info) {
  //     const { info } = this;
  //     if (info.disable) {
  //       const { disable } = info;
  //       if (disable.mobile !== undefined) this.enable.mobile = !disable.mobile;
  //       if (disable.tablet !== undefined) this.enable.tablet = !disable.tablet;
  //       if (disable.desktop !== undefined) this.enable.desktop = !disable.desktop;
  //     }
  //     if (info.blockName) this.blockName = info.blockName;
  //     if (info.additionalWrapperName) this.additionalWrapperName = info.additionalWrapperName;
  //     if (info.pagination !== undefined) {
  //       const { pagination } = info;
  //       this.paginationEnabled = true;
  //       if (typeof pagination === 'string') this.additionalPaginationName = pagination;
  //     }
  //   }
  // }

  // initSwiper(): void {
  //   const swiperOptions = {
  //     containerModifierClass: `${this.blockName}--`,
  //     wrapperClass: `${this.blockName}__wrapper`,
  //     slideClass: `${this.blockName}__slide`,
  //     slideActiveClass: `${this.blockName}__slide--active`,
  //     slideDuplicateClass: `${this.blockName}__slide--duplicate`,
  //     slidePrevClass: `${this.blockName}__slide--preview`,
  //     slideNextClass: `${this.blockName}__slide--next`,
  //     slideDuplicateActiveClass: `${this.blockName}__slide--duplicate-active`,
  //     slideDuplicatePrevClass: `${this.blockName}__slide--duplicate-prev`,
  //     spaceBetween: 20,
  //     a11y: false,
  //   };
  //   if (this.paginationEnabled) {
  //     const pagination = {
  //       el: this.$refs.pagination,
  //       type: 'bullets',
  //       bulletElement: 'span',
  //       bulletClass: `${this.blockName}__pagination-button`,
  //       bulletActiveClass: `${this.blockName}__pagination-button--active`,
  //     };
  //     Object.assign(swiperOptions, { pagination });
  //   }
  //   this.swiper = new Swiper((this.$el as HTMLElement), swiperOptions);
  // }

  // switchSwiper(): void {
  //   if (this.swiperInitializatied === this.destroy) {
  //     if (this.swiperInitializatied) {
  //       this.destroy = false;
  //       this.initSwiper();
  //     } else {
  //       this.destroy = true;
  //       this.destroySwiper();
  //     }
  //   }
  // }

  // @Watch('currentTypeScreen')
  // onCurrentTypeScreenChanged(): void {
  //   this.switchSwiper();
  // }

  // destroySwiper(): void {
  //   if (this.swiper && this.destroy === true) {
  //     this.swiper.destroy(true, true);
  //   }
  // }

  // created(): void {
  //   this.setSettings();
  // }

  // mounted(): void {
  //   this.switchSwiper();
  // }

  // destroyed(): void {
  //   setTimeout(() => {
  //     this.destroy = true;
  //     this.destroySwiper();
  //   }, 100);
  // }
}
</script>

<style lang="scss">
.ui-swiper {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  overflow: hidden;

  &__pagination {
    display: flex;
    width: 100%;
    height: 4px;
    margin: 0 -4px 20px;
  }

  &__pagination-button {
    margin: 0 4px;
    flex: 1 1 100%;
    height: 100%;
    border-radius: 3px;
    background-color: $grayFlash;
    transition: background-color $baseTransition;

    &--active {
      background-color: $greenLight;
    }
  }

  &__wrapper {
    position: relative;
    display: flex;
  }

  &__slide {
    flex-shrink: 0;
  }
}
</style>
