<template>
  <div v-if="info.url" class="gallery-picture">
    <img :src="info.url" alt="Gallery picture">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { GalleryImage } from '~/types/io-ts/galleryImages';

export interface GalleryPictureInfo extends GalleryImage {}

@Component({})
export default class GalleryPicture extends Vue {
  @Prop({ type: Object, required: true })
  readonly info!: GalleryPictureInfo;
}
</script>

<style lang="scss">
.gallery-picture {
  display: flex;
}
</style>
