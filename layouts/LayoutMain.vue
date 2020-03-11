<template>
  <div class="layout-main">
    <Header class="layout-main__header" />
    <div class="layout-main__inner-container">
      <div class="layout-main__content-wrapper">
        <main class="layout-main__content-container">
          <nuxt class="layout-main__content" />
        </main>
      </div>
    </div>
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

  &__inner-container {
    display: flex;
    flex-grow: 1;
    width: 100%;
  }

  &__content-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    height: auto;
  }

  &__content-container {
    flex: 1 1 auto;
    width: 100%;
    height: auto;
    background-color: $background;
  }

  &__content {
    width: 100%;
    min-height: 100%;
    height: auto;
  }

  @media (min-width: $screenDesktop) {
    background-color: $background;

    &__inner-container {
      margin: 0 auto;
      padding: 0 55px;
      max-width: 1280px;
      z-index: 1;
      position: relative;
    }

    &__sidebar {
      display: flex;
    }

    &__content-wrapper {
      flex: 1 1 calc(100% - #{$sidebarWidthDesctop});
      width: calc(100% - #{$sidebarWidthDesctop});
      background-color: $background;
    }

    &__content {
      padding-left: 40px;
    }

    &__footer {
      z-index: 1;
    }
  }
}
</style>
