<template>
  <div class="layout-main">
    <Header class="layout-main__header" />
    <main class="layout-main__content-container main-container">
      <nuxt class="layout-main__content" />
    </main>
    <Footer class="layout-main__footer" />
    <Popup />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Header from '~/components/core/header/Header.vue';
import Footer from '~/components/core/footer/Footer.vue';
import Popup from '~/components/core/popups/Popup.vue';

@Component({
  components: {
    Header,
    Footer,
    Popup,
  },
})
export default class LayoutMain extends Vue {
  // get bodyScroll(): boolean | undefined {
  //   return this.$store.getters['states/getBodyScroll'];
  // }

  // @Watch('bodyScroll')
  // switchBodyScroll(): void {
  //   if (this.bodyScroll) {
  //     enableBodyScroll(this.$el);
  //   } else {
  //     disableBodyScroll(this.$el);
  //   }
  // }
}
</script>

<style lang="scss">
.layout-main {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  &__content-container {
    position: relative;
    flex: 1 1 auto;
    width: 100%;
    height: auto;
    padding: 40px 0;
    background-color: $background;
  }

  &__content {
    width: 100%;
    min-height: 100%;
    height: auto;
  }

  @media (min-width: $screenDesktop) {
    background-color: $background;
  }
}
</style>
