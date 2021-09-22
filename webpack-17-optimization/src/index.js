import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/web.timers.js';

import 'core-js/modules/web.timers.js'; //
// import '@babel/polyfill';

const add = function add(x, y) {
  return x + y;
};

add(1, 2);
console.log(123123);
const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log(123);
    resolve();
  }, 1000);
});
promise();

if (module.hot) {
  // 一旦  module.hot为true 说明开了HMR功能   -->让HMR功能代码生效
  module.hot.accept('./print.js', function () {
    // 方法会监听 print.js文件 ,一旦发生变化,其他模块不会构建打包
  })
}