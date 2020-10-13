const withMdx = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");

module.exports = withMdx({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [rehypePrism],
  usesSrc: false,
  extendFrontMatter: {
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
})();
