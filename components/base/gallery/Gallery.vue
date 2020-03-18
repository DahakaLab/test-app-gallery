<template>
  <div class="gallery">
    <div v-if="isHaveImages" class="gallery__table">
      <GalleryPicture
        v-for="(picture, index) in gallary"
        :key="`gallery-picture-${index}`"
        :info="picture"
        class="gallery__picture"
        :style="galleryPictureStyle"
      />
    </div>
    <div v-if="!isHaveImages">
      <GalleryFetch />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeModules } from '~/store';
import { GalleryImage } from '~/types/io-ts/galleryImages';
import GalleryFetch from './GalleryFetch.vue';
import GalleryPicture from './GalleryPicture.vue';

@Component({
  components: {
    GalleryFetch,
    GalleryPicture,
  },
})
export default class Gallery extends Vue {
  minHeightImage = 250;

  maxHeightImage = 400;

  get galleryPictureStyle(): {[key: string]: string} {
    return {
      minHeight: `${this.minHeightImage}px`,
      maxHeight: `${this.maxHeightImage}px`,
    };
  }

  get gallary(): GalleryImage[] | undefined {
    return storeModules.gallery?.getGallary;
  }

  get isHaveImages(): boolean {
    return (this.gallary !== undefined && this.gallary?.length > 0);
  }

  get adaptationImages(): GalleryImage[] | undefined {
    if (Array.isArray(this.gallary)) {
      const adaptationImages = this.gallary.map((image) => {
        const adaptationImage = image;
        return adaptationImage;
      });
      return adaptationImages;
    }
    return undefined;
  }
}
</script>

<style lang="scss">
.gallery {
  display: flex;
  width: 100%;

  &__table {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + 10px);
    margin: -5px;
  }

  &__picture {
    margin: 5px;
  }
}
</style>
