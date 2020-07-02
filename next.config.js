const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)?$/,
  options: {
    hastPlugins: [rehypePrism],
  },
});
const withImages = require('next-images');

module.exports = withImages(
  withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
);
