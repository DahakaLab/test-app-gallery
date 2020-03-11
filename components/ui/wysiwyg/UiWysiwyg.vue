<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VNode, VNodeData, CreateElement } from 'vue';

@Component
export default class UiWysiwyg extends Vue {
  @Prop({ type: Object, required: true })
  readonly info!: UiWysiwygInfo;

  get template(): VNodeData {
    return {
      class: 'ui-wysiwyg',
      domProps: { innerHTML: this.info.html },
    };
  }

  render(createElement: CreateElement): VNode {
    return createElement('div', this.template);
  }
}
</script>
