const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ConsoleLogOnBuildWebpackPlugin = require('./ConsoleLogOnBuildWebpackPlugin');
module.exports = {
  // 入口
  // entry: './src/index.js',
  entry: {
    other: "./src/index.js",  //chunkName
    a: {
      // runtime: 'x2',
      import:"./src/a.js"
    },
  },
  // 模式 
  // none  development  production: 压缩js的插件
  mode: 'development', // 开发模式 development  生产模式 production
  // 出口
  output: {
    // 放到哪里去 输出文件的存放路径 必须是绝对路径
    path: path.resolve(__dirname, "dist"),
    // 输出文件叫什么  资源名称 
    // 占位符   entry叫什么名字 filename就叫什么名字 好出  多入口自动 多出口
    //  [name] [hash] [hash:6]  [chunkhash]   [contenthash]
    //  hash 什么时候变化  src下面内容发生了变化 触法更新
    //
    filename: "[name]-[chunkhash:2]-[hash:6].js",
  },
  /**
   * 可以是同步的,也可以是异步的
   * loader可以同步的,也可以是异步的
   * loader运行在node.js中,并且能够执行任何操作。
   * 可以通过options对象配置
   * 从npm install node_modules进行加载
   */
  module: {
    // 规则
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] //多个loader是有执行顺序的,从下到上 从右又到左  css-loader 必须在 style-loader之前
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ]
  },
  /**
   * 插件目的在于解决 loader 无法实现的其他事。
   * 是一个具有apply方法的JavaScript对象
   * apply方法会被webpack complier调用,并且在整个编译生命都可以访问complier对象
   */
  plugins: [
    new ConsoleLogOnBuildWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '嘻嘻哈哈',
      template: "./src/index.html",
      filename: 'fengFeng.html'
    }),
    // 清空
    new CleanWebpackPlugin(),
  ]

}

// spa 单页面应用  也可以理解为但入口
// mpa  多页面应用  理由seo