const withImage = require('next-optimized-images');
const withMdx = require('next-mdx-enhanced');
const rehypePrism = require('@mapbox/rehype-prism');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
  [
    [withImage],
    withMdx({
      layoutPath: 'layouts',
      defaultLayout: true,
      fileExtensions: ['mdx'],
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
      usesSrc: false,
      extendFrontMatter: {
        phase: 'prebuild|loader|both'
      },
      reExportDataFetching: false
    })
  ],
  { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'] }
);
