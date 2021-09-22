const path = require('path');

module.exports = {
  //  loader 应用于最少数量的必要模块。而非如下
  // entry: {
  //   __webpack_nonce__: 'c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM='
  // },
  module: {

    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // 通过使用 include 字段，仅将 loader 应用在实际需要将其转换的模块：
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
};
