export interface UiSwiperInfo {
  blockName?: string;
  additionalWrapperName?: string;
  disable?: {
    mobile?: boolean;
    tablet?: boolean;
    desktop?: boolean;
  };
  pagination?: boolean | string;
}
