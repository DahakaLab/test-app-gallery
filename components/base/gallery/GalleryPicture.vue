<template>
  <div
    class="gallery-picture"
    :style="galleryPictureStyle"
  >
    <img class="gallery-picture__img" :src="info.url" alt="Gallery picture">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GalleryImage } from '~/types/io-ts/galleryImages';

export interface GalleryPictureInfo extends GalleryImage {}

interface GalleryPictureStyle {
  width: string;
}

@Component({})
export default class GalleryPicture extends Vue {
  @Prop({ type: Object, required: true })
  readonly info!: GalleryPictureInfo;

  get galleryPictureStyle(): GalleryPictureStyle {
    return {
      width: `${this.info.width}px`,
    };
  }

  get dataRatio(): number {
    return this.info.height / this.info.width;
  }
}
</script>

<style lang="scss">
.gallery-picture {
  position: relative;
  display: flex;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    font-family: 'object-fit: cover;';
  }
}
</style>
