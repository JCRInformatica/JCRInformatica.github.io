// const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './_scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'main.js'
  }
};

module.exports = config;