import Vue from 'vue';
import { VuexModule } from 'vuex-module-decorators';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import moment from 'moment';
import { Constants } from './constants';

interface Methods {
  [key: string]: Function;
}

declare module 'vue/types/vue' {
  interface Vue {
    $constants: Constants;
    $loadAssets: Function;
    $api: NuxtAxiosInstance;
    $moment: typeof moment;
    methods?: Methods;
  }
}

declare module 'vuex-module-decorators' {
  interface VuexModule {
    store: {
      $constants: Constants;
      $loadAssets: Function;
      $api: NuxtAxiosInstance;
      $moment: typeof moment;
    };
  }
}
