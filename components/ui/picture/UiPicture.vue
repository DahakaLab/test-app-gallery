<template>
  <picture class="ui-picture">
    <source
      v-for="(source, key) in sources"
      :key="`ui-picture-${key}`"
      :srcset="$loadAssets(source.src)"
      :media="source.media"
      :type="source.type"
    >
    <img :src="$loadAssets(mainImage.src)" :alt="mainImage.alt">
  </picture>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { TypeScreen } from '~/types/base/screen';

interface Source extends Image {
  media: string;
}

@Component
export default class UiPicture extends Vue {
  // @Prop({ type: Object, required: false })
  // readonly info!: UiPictureInfo;

  // getSourceData(name: TypeScreen): Source | undefined {
  //   const currentScreen = this.info.images[name] || undefined;
  //   if (currentScreen) {
  //     return {
  //       src: currentScreen.src,
  //       type: currentScreen.type,
  //       media: `(min-width: ${this.$constants.screens[name]}px)`,
  //     };
  //   }
  //   return undefined;
  // }

  // get mainImage(): Image {
  //   return {
  //     src: this.info.src,
  //     alt: this.info.alt,
  //   };
  // }

  // get mobileSource(): Source | undefined {
  //   return this.getSourceData('mobile');
  // }

  // get tabletSource(): Source | undefined {
  //   return this.getSourceData('tablet');
  // }

  // get desktopSource(): Source | undefined {
  //   return this.getSourceData('desktop');
  // }

  // get sources(): Source[] {
  //   const currentSources = [];
  //   if (this.desktopSource) currentSources.push(this.desktopSource);
  //   if (this.tabletSource) currentSources.push(this.tabletSource);
  //   if (this.mobileSource) currentSources.push(this.mobileSource);
  //   return currentSources;
  // }
}
</script>

<style lang="scss">
.ui-picture {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    font-family: 'object-fit: cover; object-position: center;';
  }
}
</style>
