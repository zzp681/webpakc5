const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolveApp } = require('./paths.js');
module.exports = merge(common, {
  output: {
    filename: '[name].[contenthash].build.js'
  },
  path: resolveApp('dist'),
  clean: true,
  mode: 'production'
})