const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { resolve } = require('path');
// process.env.NODE_ENV = 'development';
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          // 'style-loader', //创建style标签,将样式放入
          'css-loader', // 将css文件整合到 js文件中
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     ident: 'postcss',
          //     plugins: () => [
          //       // require('postcss-preset-env')(),
          //       require('autoprefixer')({
          //         overrideBrowserslist: ['last 2 versions', '>1%']
          //       })
          //     ]
          //   }
          // },
          'less-loader',
        ],
      },
      {
        // 排除css/js/html资源都会用
        exclude: /\.(css|less|html|js|png|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media',
        },
      },
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
          outputPath: 'images',

        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '提取css单独文件',
      template: './src/index.html',
    }),
    // new CleanWebpackPlugin(),
    new miniCssExtractPlugin({
      filename: 'css/[name]-[chunkhash:6].css',
    }),
  ],
  mode: 'production',
};
