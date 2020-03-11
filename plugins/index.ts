import { Plugin } from '@nuxt/types';
import moment from 'moment';
import constants from './constants';
import loadAssets from './loadAssets';
import registerComponents from './components';
import createApi from './api';

const setConstants: Plugin = ({ $axios }, inject) => {
  inject('constants', constants);
  inject('loadAssets', loadAssets);
  inject('api', createApi($axios));
  moment.locale('ru');
  inject('moment', moment);
  registerComponents();
};

export default setConstants;
