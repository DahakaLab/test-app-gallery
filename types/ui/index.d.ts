import * as Input from './input';
import * as Button from './button';
import * as Wysiwyg from './wysiwyg';
import * as Swiper from './swiper';
import * as Picture from './picture';
import * as Tabs from './tabs';
import * as Checkbox from './checkbox';
import * as Dropdown from './dropdown';
import * as Radio from './radio';
import * as Scrollbar from './scrollbar';

declare global {
  type Image = Picture.Image;

  type Tab<T> = Tabs.Tab<T>;

  interface UiInputInfo extends Input.UiInputInfo {}

  interface UiInputMask extends Input.UiInputMask {}
  interface UiInputMaskInfo extends Input.UiInputMaskInfo {}
  interface UiInputMaskParams extends Input.UiInputMaskParams {}
  interface UiInputMaskEvent<T = any> extends Input.UiInputMaskEvent<T> {}
  interface UiInput extends Input.UiInput {}

  interface UiButtonInfo extends Button.UiButtonInfo {}

  interface UiCheckboxInfo extends Checkbox.UiCheckboxInfo {}
  interface UiCheckbox extends Checkbox.UiCheckbox {}

  interface UiWysiwygInfo extends Wysiwyg.UiWysiwygInfo {}

  interface UiSwiperInfo extends Swiper.UiSwiperInfo {}

  interface UiPictureInfo extends Picture.UiPictureInfo {}

  interface UiTabsInfo<T> extends Tabs.UiTabsInfo<T> {}

  interface UiDropdownInfo extends Dropdown.UiDropdownInfo {}

  interface UiRadioInfo extends Radio.UiRadioInfo {}

  interface UiScrollbarInfo extends Scrollbar.UiScrollbarInfo{}
}
