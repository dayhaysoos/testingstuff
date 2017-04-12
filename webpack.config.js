const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const PATHS = {
  //directories you want webpack to look at
  app: path.join(__dirname, 'src'),
  //where you want the code to compile
  dist: path.join(__dirname, 'dist')
};

const parts = require('./webpack.parts');

const common = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.dist,
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
    },
  },
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      // highest quality sourcemaps, more build time for production debugging
      parts.generateSourceMaps({ type: 'source-map' }),
      parts.loadJavascript(PATHS.app),
      parts.compressImages(PATHS.app)
    ]);
  }

  return merge([
    common,
    {
      output: {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
      },
    },
    {
      plugins: [
        new webpack.NamedModulesPlugin(),
      ],
    },
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT,
    }),
    // wraps code in a base64 string, higher quality with faster rebuild times
    parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
    parts.loadJavascript(PATHS.app),
    parts.loadCss(PATHS.app),
    parts.compressImages(PATHS.app)
  ]);
}
