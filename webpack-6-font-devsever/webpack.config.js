const { resolve } = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'built.js',
    path: resolve(__dirname, 'build')
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
        ]
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
        ]
      },
      {
        // 排除css/js/html资源都会用
        exclude: /\.(css|less|html|js)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }

      }
    ]
  },
  plugins: [
    // 功能:默认会创建有一个空的HTMl,自动引入打包输出的 所有js/css资源
    new HtmlWebpackPlugin({
      // 创建一个HTMl文件
      template: './src/index.html',
      title: "webpack"
    })
  ],
  mode: 'development',
  // 开发服务器 devServer:用来自动化(自动编译,自动打开浏览器,自动刷新浏览器~~)
  // 特点只会在内存中编辑打包,不会有任何输出
  // webpack-dev-serve

  devServer: {
    // 项目路径
    contentBase: resolve(__dirname, 'build'),
    compress: true, //压缩,
    port: 3000,
    open:true
  }
}