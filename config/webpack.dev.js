
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { resolveApp } = require('./paths.js');
module.exports = merge(common, {
  output: {
    filename: '[name].build.js',
    path: resolveApp('dist'),
    clean: true
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  //提供一个基本服务器 并具有时时更新功能
  devServer: {
    // 告诉服务器位置。
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8888,
    hot: true,
  },
})
