import {
  Module,
  VuexModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import * as t from 'io-ts';
import { AxiosResponse } from 'axios';
import IOGalleryImagesData, { IOGalleryImage, GalleryImage, GalleryImagesData } from '~/types/io-ts/galleryImages';
import { ApiQuery } from './api';
import iTypescriptCheck from '~/helpers/iTypescriptCheck';
import { storeModules } from '~/store';

@Module({
  name: 'gallery',
  stateFactory: true,
  namespaced: true,
})
export default class Gallery extends VuexModule {
  private gallary: GalleryImage[] = [];

  public get getGallary(): GalleryImage[] {
    return this.gallary;
  }

  @Mutation
  private concatImagesInGallary(value: any): void {
    if (iTypescriptCheck(t.array(IOGalleryImage), value)) {
      this.gallary = this.gallary.concat(value as GalleryImage[]);
    }
  }

  @Action({ rawError: true })
  public async updateImagesInGallary(
    url: string,
  ): Promise<AxiosResponse<GalleryImagesData> | undefined> {
    const request: ApiQuery = {
      url,
    };
    const response: AxiosResponse | undefined = await storeModules.api?.get(request);
    if (response) {
      const { status, data } = response;
      if (status === 200 && iTypescriptCheck(IOGalleryImagesData, data)) {
        this.concatImagesInGallary((data as GalleryImagesData).galleryImages);
        return response as AxiosResponse<GalleryImagesData>;
      }
      return undefined;
    }
    return undefined;
  }
}
