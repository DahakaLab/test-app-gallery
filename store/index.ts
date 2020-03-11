import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Api from './api';
import Gallery from './gallery';

interface StoreModules {
  api?: Api;
  gallery?: Gallery;
}

const storeModules: StoreModules = {};

const initializer = (store: Store<any>): void => {
  storeModules.api = getModule(Api, store);
  storeModules.gallery = getModule(Gallery, store);
};

const plugins = [initializer];

export {
  storeModules,
  plugins,
};
