// const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      /**
       * js 兼容性处理: babel-loader @babel/preset-env @babel/core
       * 1. 基本js兼容性处理  --> @babel/preset-env
       *    问题:只能转换基本语法,如 promise 不能转换
       * 2. 全部js兼容性处理  -->  @babel/polyfill 使用引入即可 import   '@babel/polyfill'
       *    问题我只要兼容部分兼容性问题,但是讲所有兼容性代码全部引入,体积太大了
       * 3. 需要做兼容性处理,按需加载  -->core-js
       * 4.
       * */
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // 月色
          presets: [
            ['@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {
                  version: 3,
                },
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17',
                },
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   title: 'js兼容',
    // }),
  ],
  mode: 'production', // js压缩
};
