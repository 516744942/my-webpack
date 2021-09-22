const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { resolve } = require('path');

/**
 * HMR  hot module replacement 热模块替换/ 某块热替换
 *      作用:一个模块发生变化,只会重新打包这一个模块,而不是打包所有模块,
 *      极大提升构建速度
 *      样式文件  可以使用HMR功能: 因为style-loader内部实现了
 *      js文件:默认不能使用HMR功能（）
 *      html文件：默认不能使用HmR功能. 同时会导致问题 html文件不能热更新了～～～(不用做GMR功能)
 *          解决:修改entry入口,将HTml文件引入
 * 
 */ 

// console.log("index.文件被加载了")
// 定义nodejs环境变量,决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      indent: 'postcss',
      plugins: () => [require('postcss-preset-env')()],
    },
  },

];

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ...commonCssLoader,
        ],
      },
      {
        test: /\.less$/,
        use: [
          ...commonCssLoader,
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
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
      {
        test: /\.(jpe?g|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[name:10].[ext]',
          outputPath: 'imgs',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        exclude: /\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css',

    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'js兼容',
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
  ],
  mode: 'production', // js压缩
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    // 热模块服务
    hot: true,
  },
};
