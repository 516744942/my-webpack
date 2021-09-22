const path = require('path');
module.exports = {
  // 入口
  entry: './src/index.js',
  // 模式
  mode:'development', // 开发模式 development  生产模式 production
  // 出口
  output: {
    // 放到哪里去 输出文件的存放路径 必须是绝对路径
    path: path.resolve(__dirname, "./hufeng"),
    // 输出文件叫什么  资源名称
    filename: "hufeng.js",
  }

}