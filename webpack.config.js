const path = require('path');

module.exports = {
  entry: './src/client.js',
  mode: process.env.NODE_ENV || 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  stats: 'errors-only'
};