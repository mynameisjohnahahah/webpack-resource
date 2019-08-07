const merge = require('webpack-merge')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
const baseConfig = require('./webpack.base.config')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
  ],
  optimization: {
    splitChunks: { // 分割代码块
      cacheGroups: { // 缓存组
        vendor: {
          test: /node_modules/, // 把公共库抽离出来
          chunks: 'initial', // 从入口开始找
          minSize: 100, // 大小 
          minChunks: 2, // 最少抽离次数
        },
        common: { // 公共模块
          minSize: 100, // 大小
          minChunks: 2, // 公用次数
          chunks: 'initial' // 从入口开始找
        }
      },
    }
  },
})