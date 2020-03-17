<template>
  <div class="gallery">
    <div v-if="isHaveImages">
      <GalleryPicture
        v-for="(picture, index) in gallary"
        :key="`gallery-picture-${index}`"
        :info="picture"
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
  get gallary(): GalleryImage[] | undefined {
    return storeModules.gallery?.getGallary;
  }

  get isHaveImages(): boolean {
    return (this.gallary !== undefined && this.gallary?.length > 0);
  }
}
</script>

<style lang="scss">
.gallery {
  display: flex;
}
</style>
