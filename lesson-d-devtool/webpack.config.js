const path = require('path');
// 设置 HtmlWebpackPlugin index.html 这个文件，然而 HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',  // 开发环境定位 js错误
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],
  output: {
    filename: 'index.js', //块到输出 bundle 之间的映射
    path: path.resolve(__dirname, 'dist'),
    clean: true, //在每次构建前清理 /dist 文件夹，这样只会生成用到的文件。让我们使用 output.clean
    publicPath: '/',
  },
};
