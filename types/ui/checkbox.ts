export interface UiCheckboxInfo {
  title?: string;
  description?: string;
  link?: {
    href: string;
    phrase: string;
  };
}

export interface UiCheckbox {
  disabled?: boolean;
  checked?: boolean;
  info: UiCheckboxInfo;
}
