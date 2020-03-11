import Vue from 'vue';
import UiButton from '~/components/ui/button/UiButton.vue';
import UiInput from '~/components/ui/input/UiInput.vue';
import UiInputMask from '~/components/ui/input/UiInputMask.vue';
import UiWysiwyg from '~/components/ui/wysiwyg/UiWysiwyg.vue';
import UiSwiper from '~/components/ui/swiper/UiSwiper.vue';
import UiPicture from '~/components/ui/picture/UiPicture.vue';
import UiTabs from '~/components/ui/tabs/UiTabs.vue';
import UiCheckbox from '~/components/ui/checkbox/UiCheckbox.vue';
import UiButtonQuestion from '~/components/ui/button/UiButtonQuestion.vue';
import UiDropdown from '~/components/ui/dropdown/UiDropdown.vue';
import UiScrollbar from '~/components/ui/scrollbar/UiScrollbar.vue';
import UiButtonClose from '~/components/ui/button/UiButtonClose.vue';
import UiRadio from '~/components/ui/radio/UiRadio.vue';

const registerComponents = (): void => {
  Vue.component('UiButton', UiButton);
  Vue.component('UiInput', UiInput);
  Vue.component('UiInputMask', UiInputMask);
  Vue.component('UiWysiwyg', UiWysiwyg);
  Vue.component('UiSwiper', UiSwiper);
  Vue.component('UiPicture', UiPicture);
  Vue.component('UiTabs', UiTabs);
  Vue.component('UiCheckbox', UiCheckbox);
  Vue.component('UiButtonQuestion', UiButtonQuestion);
  Vue.component('UiDropdown', UiDropdown);
  Vue.component('UiScrollbar', UiScrollbar);
  Vue.component('UiButtonClose', UiButtonClose);
  Vue.component('UiRadio', UiRadio);
};

export default registerComponents;
