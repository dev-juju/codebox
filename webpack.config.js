const path = require('path');

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
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
