import {
  Module,
  VuexModule,
  Action,
} from 'vuex-module-decorators';
import {
  AxiosResponse,
  AxiosRequestConfig,
  Method,
} from 'axios';
import * as t from 'io-ts';
import iTypescriptCheck from '~/helpers/iTypescriptCheck';

export type AnyData = object | any[] | undefined;

export interface ApiQuery<
  Data extends AnyData = undefined,
  T = undefined,
  Params extends AnyData = undefined
> {
  url: string;
  params?: Params;
  headers?: any;
  IOType?: t.Type<T>;
  data?: Data;
}

export interface ApiSendQuery<
  Data extends AnyData,
  T = any,
  Params extends AnyData = undefined
> extends ApiQuery<Data, T, Params> {
  method: Method;
}

@Module({
  name: 'api',
  stateFactory: true,
  namespaced: true,
})
export default class Api extends VuexModule {
  @Action({ rawError: true })
  private send(
    {
      url,
      headers,
      method,
      params,
      data,
      IOType,
    }: ApiSendQuery<AnyData, any, AnyData>,
  ): Promise<AxiosResponse<any> | undefined> {
    const options: AxiosRequestConfig = {
      url,
      method,
      headers,
      data,
      params,
    };
    return this.store.$api(options)
      .then(async (response) => {
        if (IOType) iTypescriptCheck(IOType, response.data);
        return response;
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
        const { response } = error;
        return response;
      });
  }

  @Action({ rawError: true })
  public get(request: ApiQuery<AnyData, any, AnyData>): Promise<AxiosResponse<any> | undefined> {
    // console.log(Object.keys(this.context));
    return this.send({
      method: 'get',
      ...request,
    });
  }
}
