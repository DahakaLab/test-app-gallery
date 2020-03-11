<template>
  <div class="ui-scrollbar">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({})
export default class UiScrollbar extends Vue {
  @Prop({ type: Object, required: false })
  readonly info!: UiScrollbarInfo | undefined;

  psInstance: PerfectScrollbar | null = null;

  init(): void {
    this.psInstance?.destroy();
    this.psInstance = new PerfectScrollbar(this.$el, this.info?.psOptions);
  }

  @Watch('info', { deep: true })
  onInfoChanged(): void {
    this.init();
  }

  mounted(): void {
    this.init();
  }
}
</script>

<style lang="scss">
.ui-scrollbar.ps {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  & .ps__rail-x,
  & .ps__rail-y {
    position: absolute;
    background-color: $background;
  }

  & .ps__rail-x {
    bottom: 0;
    margin: 0 80px;
    height: 4px;
  }

  & .ps__rail-y {
    right: 15px;
    margin: 30px 0;
    width: 4px;
  }

  & .ps__thumb-x,
  & .ps__thumb-y {
    position: absolute;
    background-color: $greenLight;
    opacity: 1;
    border-radius: 10px;
  }

  & .ps__thumb-x {
    height: 100%;
  }

  & .ps__thumb-y {
    width: 100%;
  }
}
</style>
