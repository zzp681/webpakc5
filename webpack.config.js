const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // loader转换
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // 插件
  plugins: [
    // new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  // 模式
  mode: 'development',

  // 解析
  resolve: {
    // 别名
    alias: {
      '@': './'
    },
    // 引入模块可不带后缀
    extensions: ['.js', '.jsx', 'ts'],
    // 用于配置 npm link 是否生效，禁用可提升编译速度
    symlinks: false,
  },

  // 优化 一般用于生产模式提升性能
  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      // 重复打包问题
      cacheGroups: {
        vendors: {
          //node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          //chunks name
          name: 'vendors',
          //优先级
          priority: 10,
          enforce: true
        }
      }
    },
  }
}