module.exports = {
  plugins: [
    require('autoprefixer')({
      // overrideBrowserslist: ['last 2 versions', '>1%']
    }) // 需要知道一个兼容的浏览器环境 所有主流浏览器的最近两个版本  兼容市场占有率大于1%的浏览器
  ]
}