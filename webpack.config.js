const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.normalize(`${__dirname}/src/index.ts`),
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
        test: /\.(js|ts)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          }
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
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
