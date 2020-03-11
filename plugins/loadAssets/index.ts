const loadAssets = (file: string): string => {
  const req = require.context('assets/', true, /^\.\/.*\.(png|jpg|gif|svg)$/);
  return req(file);
};

export default loadAssets;
