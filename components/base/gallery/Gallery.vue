<template>
  <div class="gallery">
    <div v-if="isHaveImages">
      Have images
    </div>
    <div v-if="!isHaveImages">
      Isn't have images
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeModules } from '~/store';
import { GalleryImage } from '~/types/io-ts/galleryImages';

@Component({})
export default class Gallery extends Vue {
  get gallary(): GalleryImage[] | undefined {
    return storeModules.gallery?.getGallary;
  }

  get isHaveImages(): boolean {
    return (this.gallary !== undefined && this.gallary?.length > 0);
  }

  fetchImages(): void {
    storeModules.gallery?.updateImagesInGallary('https://raw.githubusercontent.com/DahakaLab/json-test-data/master/galleryImages.json');
  }

  mounted(): void {
    this.fetchImages();
  }
}
</script>

<style lang="scss">
.gallery {
  display: flex;
}
</style>
