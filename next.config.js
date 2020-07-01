const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  pageExtensions: ['js', 'jsx', 'mdx'],
});
const withImages = require('next-images');

module.exports = withImages(
  withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
);
