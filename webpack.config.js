/* eslint-disable */

const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'production',
  entry: {
    main: './_js/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  stats: 'minimal',
  watch: true,
};

module.exports = config;
