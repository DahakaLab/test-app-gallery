<template>
  <Gallery />
</template>

<script lang="ts">
import Component from 'nuxt-class-component';
import { Vue } from 'vue-property-decorator';
import Gallery from '~/components/base/gallery/Gallery.vue';

@Component({
  layout: 'LayoutMain',
  components: {
    Gallery,
  },
})
export default class IndexPage extends Vue {}
</script>
