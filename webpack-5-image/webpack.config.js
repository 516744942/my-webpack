const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        // 匹配哪些文件
        test: /\.(png|jpe?g)$/,
        // 下载url-loader和file-loader
        //  问题处理不聊html中的img 图片
        loader: 'url-loader',
        options: {
          // 8*1024 8kb 就会被base64处理
          // 优点:减少请求数量(减轻服务器压力)
          // 优点：图片体积会更大(文件请求速度更慢)
          limit: 8 * 1024 * 10,
          // 因为url-loader默认使用es6模块化解析,而html-loader引入图片是commonjs
          // 解析时会出问题:[object Module]
          // 解决: 关闭url-loader的es6模块化,使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          // [hash：10]取图片的hash的钱10位
          // [ext]取文件原来的扩展名
          name: '[hash:10].[ext]',
        },
      },
      {
        test: /\.html$/,
        // 处理html文件的imag图片(负责引入img,从而能被url-loader进行处理)
        loader: 'html-loader',
      },
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
