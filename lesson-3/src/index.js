// 国内淘宝源
// 样式处理 css-loader  style-loader
// postcss
console.log('hello world')
// import css from './index.css';
// import less from './index.less';
// import login from '../src/logo1.png';

import css from './style/index.css';
var btn = document.createElement('button');
btn.innerHTML = '新增'
document.body.appendChild(btn);
btn.onclick = function () {
  var div = document.createElement('div');
  div.innerHTML = 'item';
  document.body.appendChild(div)
}