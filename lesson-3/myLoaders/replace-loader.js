// 函数 声明式函数  不可以是箭头函数
// 函数 必须有返回值
// 如何返回多值
// 如何返回异步逻辑
//  如何处理多个自定义loader
module.exports = function (source) {
  // 解决异步问题
  console.log(123)
  const result = source.replace('hello', this.query.name || "嘻嘻哈哈")
  this.callback(null, result)
  // return result
}