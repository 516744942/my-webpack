const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build'),
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
  plugins: [],
  mode: 'development',
};
