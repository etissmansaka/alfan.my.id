const withPlugins = require('next-compose-plugins');
const withImage = require('next-optimized-images');
const withMdx = require('next-mdx-enhanced');
const withPwa = require('next-pwa');
const rehypePrism = require('@mapbox/rehype-prism');
const remarkEmoji = require('remark-emoji');

module.exports = withPlugins(
  [
    [withImage],
    [
      withPwa,
      {
        pwa: {
          dest: 'public',
          register: true,
          scope: '/',
          sw: 'sw.js',
          disable: process.env.NODE_ENV === 'development'
        }
      }
    ],
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
  { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'] }
);
