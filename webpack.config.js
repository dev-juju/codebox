const path = require('path');
const { ESBuildPlugin } = require('esbuild-loader')

module.exports = {
  mode: 'production',
  entry: path.normalize(`${__dirname}/src/index.js`),
  output: {
    path: path.normalize(`${__dirname}/dist`),
    publicPath: '/',
    filename: 'index.min.js',
    library: 'CodeBox',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new ESBuildPlugin()
  ]
};
