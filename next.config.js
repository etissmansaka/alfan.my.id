const withPlugins = require('next-compose-plugins');
const withMdx = require('next-mdx-enhanced');
const rehypePrism = require('@mapbox/rehype-prism');
const remarkEmoji = require('remark-emoji');

module.exports = withPlugins(
  [
    withMdx({
      layoutPath: 'layouts',
      defaultLayout: true,
      fileExtensions: ['mdx'],
      remarkPlugins: [remarkEmoji],
      rehypePlugins: [rehypePrism],
      usesSrc: false,
      extendFrontMatter: {
        phase: 'prebuild|loader|both'
      },
      reExportDataFetching: false
    })
  ],
  {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
      domains: ['res.cloudinary.com']
    }
  }
);
