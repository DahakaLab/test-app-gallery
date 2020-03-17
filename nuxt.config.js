import ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin';
import path from 'path';

const { env } = process;
const isEnvDev = (env.NODE_ENV === 'dev');
const port = env.PORT || '3000';
const host = env.HOST || '0.0.0.0';
const authorization = env.AUTHORIZATION || undefined;

const forkTsCheckerNotifierWebpackPlugin = new ForkTsCheckerNotifierWebpackPlugin({
  title: 'TypeScript',
  excludeWarnings: false,
});

module.exports = {
  build: {
    devMiddleware: {
      publicPath: '/_nuxt/',
      logLevel: 'error',
      clientLogLevel: 'warning',
      overlay: true,
      historyApiFallback: true,
      stats: 'minimal',
    },
    plugins: [
      forkTsCheckerNotifierWebpackPlugin,
    ],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        if (
          config == null
          || config.module == null
          || config.module.rules == null
        ) {
          return;
        }
        config.devtool = isEnvDev ? '#source-map' : false;
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    watch: [
      'models',
      'types',
    ],
    transpile: [
      'swiper',
      'dom7',
      'imask',
    ],
  },
  css: [
    {
      src: '~assets/scss/base/',
      lang: 'scss',
    },
  ],
  generate: {
    fallback: true,
  },
  head: {
    title: 'Test app gallery',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/favicons/favicon-32x32.png',
      },
    ],
  },
  loading: false,
  mode: 'universal',
  buildModules: [
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build',
  ],
  modules: [
    'nuxt-polyfill',
    'nuxt-svg-loader',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
  styleResources: {
    scss: [
      '~assets/scss/global/index.scss',
    ],
  },
  polyfill: {
    features: [
      {
        require: 'object-fit-images',
        install: (ObjectFitImages) => {
          ObjectFitImages(null, { watchMQ: true });
        },
      },
    ],
  },
  env: {
    authorization,
  },
  plugins: [
    {
      src: '~plugins/index',
    },
  ],
  rootDir: path.resolve(__dirname),
  router: {
    base: '/',
  },
  server: {
    port,
    host,
    timing: false,
  },
};
