
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var webpack = require('webpack');

// const txtWebpackPlugin = require("./myPlugins/txt-webpack-plugin.js");
// const fileWebpackPlugin = require("./myPlugins/file-webpack-plugin.js");
module.exports = {
  entry: '/src/index.js',
  // entry: {
  //   index: '/src/index.js',
  //   login: '/src/login.js',
  //   list: '/src/list.js',
  // },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]-[hash:6].js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
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
        test: /\.(png|jpe?g|gif)$/,
        // use: path.resolve(__dirname,"myLoaders/replace-loader.js")
        // use: {
        //   loader: "file-loader", //使用url-image 没有images目录但是 还是有图片,因为处理成base64的图片了
        //   options:{
        //     name:"[name].[ext]", //名字和扩展名
        //     outputPath:"images" //存放的路径
        //   }
        // },
        use: {
          loader: "url-loader", //使用url-image 没有images目录但是 还是有图片,因为处理成base64的图片了
          options: {
            name: "[name].[ext]", //名字和扩展名
            outputPath: "images", //存放的路径
            limit: 1024 * 128 //限制 大于 128k的  转base64
          }
        }
      },
      {
        test: /\.woff2$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [
          //     ["@babel/preset-env",
          //       {
          //         targets: {
          //           edge: "17",
          //           firefox: "60",
          //           chrome: "67",
          //           safari: '11'
          //         },
          //         corejs: 2,
          //         useBuiltIns: "usage",//  按需要加载
          //       },
          //       //后面的对象就是对前面的设置options
          //     ]
          //   ], // 预设插件 箭头函数变成了 function
          //   // plugin: [],   
          // }
        }
      },


    ]
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 8081,
    proxy: {
      "/api": {
        target: "http://localhost:9092/"
      }
    },
    // hot:true
    hotOnly: true //让浏览器不自动刷新
  },
  // resolveLoader: {
  //   modules: ["./node_modules", "./myLoaders"]
  // },
  // devtool:"source-map",//定位错误 多了一个map 文件给工具看的
  // devtool:"inline-source-map",// 不需要一个独立的map文件 坏处是增大bundle文件的体积 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "css/index-[contenthash:6].css",
    }),
    // new fileWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}