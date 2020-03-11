export type Content = {
  appName: string;
  nickName: string;
  fullName: string;
};

export type Screens = {
  mobile: number;
  tablet: number;
  desktop: number;
}

export type Social = {
  name: string;
  url: string;
}

enum RoutingData {
  index = '/',
}

export type Routing = {
  index: RoutingData.index;
}

export type Constants = {
  content: Content;
  screens: Screens;
  socials: Social[];
  routing: Routing;
};

export default RoutingData;
