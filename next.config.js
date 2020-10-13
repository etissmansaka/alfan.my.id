const withMdx = require("next-mdx-enhanced");

module.exports = withMdx({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    phase: "prebuild|loader|both",
  },
  reExportDataFetching: false,
})();
