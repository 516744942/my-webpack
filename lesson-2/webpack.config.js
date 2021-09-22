
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: '/src/index.js',
  // entry: {
  //   index: '/src/index.js',
  //   login: '/src/login.js',

  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]-[chunkhash:6].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.less$/,
      //   use: ['style-loader', 'css-loader','postcss-loader','less-loader']
      // },
      {
        test: /\.less$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
          // 'kkb-style-loader',
          // 'kkb-css-loader',
          // 'kkb-less-loader'
        ]
      },
      {
        test: /\.js$/,
        // use: path.resolve(__dirname,"myLoaders/replace-loader.js")
        use: [
          "replace-loader.js",
          {
            loader: path.resolve(__dirname, "myLoaders/replace-loader.js"),
            options: {
              name: '王和锋'
            }
          },
          {
            loader: path.resolve(__dirname, "myLoaders/replace-loader-async.js"),
            options: {
              name: '嘻嘻哈哈'
            }
          }
        ]
      },
    ]
  },
  resolveLoader: {
    modules: ["./node_modules", "./myLoaders"]
  },
  plugins: [
    // 多个对应引用
    new HtmlWebpackPlugin({
      title: '嘻嘻哈哈',
      template: "src/index.html",
      filename: 'HeFeng.html',
      // chunks:["index"],
    }),
    // new HtmlWebpackPlugin({
    //   title: '嘻嘻哈哈',
    //   template: "src/index.html",
    //   filename: 'login.html',
    //   chunks:["login"],
    // }),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "index-[chunkhash:6].css",
    }),
  ]
}