const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js', // 文件名字
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      /**
       * 语法 检查 eslint-loader eslint
       * 注意: 只检查自己写的源代码
       * 设置检查规则
       * package.json中eslintConfig中设置
       * airbnb -->  eslint-config-airbnb-base  eslint-plugin-import eslint
       *  https://www.npmjs.com/package/eslint-config-airbnb-base
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint的错误
          fix: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  mode: 'development',
};
