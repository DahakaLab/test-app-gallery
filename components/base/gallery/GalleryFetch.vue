<template>
  <div class="gallery-fetch">
    <div>
      <input type="file">
      <button type="button" @click="buttonFetchImagesHandler">
        Loading
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeModules } from '~/store';

@Component({})
export default class GalleryFetch extends Vue {
  fetchImages(): void {
    storeModules.gallery?.updateImagesInGallary('https://raw.githubusercontent.com/DahakaLab/json-test-data/master/galleryImages.json');
  }

  buttonFetchImagesHandler(): void {
    this.fetchImages();
  }

  mounted(): void {
    this.fetchImages();
  }
}
</script>

<style lang="scss">
.gallery-fetch {
  display: flex;
}
</style>
