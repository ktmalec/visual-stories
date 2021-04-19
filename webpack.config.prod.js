const commonConfig = require('./webpack.config.js');
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'none'
});