
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const glob = require('glob')
// entry: {
//   index: '/src/index.js',
//   login: '/src/login.js',
//   list: '/src/list.js',
// },
// new HtmlWebpackPlugin({
//   title: '嘻嘻哈哈',
//   template: "src/index.html",
//   filename: 'HeFeng.html',
// chunks:["index"],
// }),
const setMap = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];
  // 生成entry
  const entryFiles = glob.sync(path.join(__dirname, "src/*/index.js"))
  console.log(entryFiles)
  // 处理 HtmlWebpackPlugins
  entryFiles.map((item, index) => {
    const entryFile = item;
    const mach = item.match(/src\/(.*)\/index\.js$/)
    console.log(mach)
    const pageName = mach[1];
    entry[pageName] = entryFile

    HtmlWebpackPlugins.push(new HtmlWebpackPlugin({
        template:path.join(__dirname,`src/${pageName}/index.html`),
        filename:`${pageName}.html`,
        chunks:[pageName]
    }))
  })
  console.log('entry', entry)
  return {
    entry,
    HtmlWebpackPlugins
  }
}
const { entry, HtmlWebpackPlugins } = setMap()
module.exports = {
  entry,
  // entry: {
  //   index: '/src/index.js',
  //   login: '/src/login.js',
  //   list: '/src/list.js',
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

    ]
  },
  resolveLoader: {
    modules: ["./node_modules", "./myLoaders"]
  },
  // devtool:"source-map",//定位错误 多了一个map 文件给工具看的
  devtool: "inline-source-map",// 不需要一个独立的map文件 坏处是增大bundle文件的体积 
  plugins: [
    // 多个对应引用
    ...HtmlWebpackPlugins,
    new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: "index-[chunkhash:6].css",
    }),
  ]
}