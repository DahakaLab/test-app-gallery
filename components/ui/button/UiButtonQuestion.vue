<template>
  <button
    :disabled="disabled"
    type="button"
    class="ui-button-question"
    v-on="$listeners"
  >
    <QuestionSVG />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import QuestionSVG from '~/assets/svg/question.svg';

@Component({
  components: {
    QuestionSVG,
  },
})
export default class UiButtonQuestion extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  readonly disabled!: boolean;
}
</script>

<style lang="scss">
.ui-button-question {
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  border-radius: 50%;
  transition: box-shadow $baseTransition;

  svg {
    fill: $graySilver;
  }

  &:hover {
    box-shadow: 0 0 10px 0 $active;
  }
}
</style>
