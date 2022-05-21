/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  // It's required by pdfjs-dist
  actions.setWebpackConfig({
    externals: [
      {
        canvas: "canvas",
      },
    ],
  })
}
