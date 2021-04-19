const commonConfig = require('./webpack.config.js');
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map'
});