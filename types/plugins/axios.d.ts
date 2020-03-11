import { AxiosRequestConfig } from 'axios';

declare module '@nuxtjs/axios' {
  interface NuxtAxiosInstance {
    create(config?: AxiosRequestConfig): NuxtAxiosInstance;
  }
}