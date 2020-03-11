export type Tab<T> = {
  phrase: string;
  value: T;
}

export interface UiTabsInfo<T> {
  getter: string;
  action: string;
  tabs: Tab<T>[];
}
