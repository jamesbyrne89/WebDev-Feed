const withTypescript = require('@zeit/next-typescript');
const assetPrefix = process.env.NODE_ENV === 'production' ? '/RedditDev' : '';

module.exports = withTypescript({
  assetPrefix,
  outDir: '../docs',
  exportPathMap: () =>
    ({ '/': { page: '/' }, '/favourites': { page: '/favourites' } }),
});
