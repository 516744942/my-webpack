/**
 * 1.运行指令:
 *   开发环境: webpack ./src/index.js - o ./build/bulit.js - mode=development 或者 npx webpack --mode=development
 *   webpack会以 ./src/index.js 为入口文件开始打包, 打包后输出到 ./build/built.js
 *   整体打包环境,是开发环境
 *
 *
 *
 */
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));
