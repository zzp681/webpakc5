// webpack.common.js
// 分离开发环境、生产环境配置；
// 模块化开发；
// sourceMap 定位警告和错误；
// 动态生成引入 bundle.js 的 HTML5 文件；
// 实时编译；
// 封装编译、打包命令。
module.exports = {
  entry: {
    index: './src/index.js'
  }

} 