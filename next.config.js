const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["tsx", "ts", "jsx", "js", "md", "mdx"],
});
