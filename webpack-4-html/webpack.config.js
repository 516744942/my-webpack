const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        // 匹配哪些文件
        test: /\.css$/,
        use: [
          // 从右到左 从下岛上
          // 创建style标签 将js中的样式资源插入进行,添加到head中生效
          'style-loader',
          // 讲csss文件变成commonjs模块加载js中,里面内容是样式字符串
          'css-loader',
          // 下载less-loader 和less
        ],
      },
      {
        // 匹配哪些文件
        test: /\.less$/,
        use: [
          // 从右到左 从下岛上
          // 创建style标签 将js中的样式资源插入进行,添加到head中生效
          'style-loader',
          // 讲csss文件变成commonjs模块加载js中,里面内容是样式字符串
          'css-loader',
          // 下载less-loader 和less
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    // 功能:默认会创建有一个空的HTMl,自动引入打包输出的 所有js/css资源
    new HtmlWebpackPlugin({
      // 创建一个HTMl文件
      template: './src/index.html',
      title: 'webpack',
    }),
  ],
  mode: 'development',
};
