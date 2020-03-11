import { NuxtAxiosInstance } from '@nuxtjs/axios';

interface Headers {
  [key: string]: string;
}

const createApi = ($axios: NuxtAxiosInstance): NuxtAxiosInstance => {
  const headers: Headers = {};
  if (process.env.authorization) headers.Authorization = process.env.authorization;
  const $api = $axios.create({
    headers,
  });
  return $api;
};

export default createApi;
