
const webpack = require("webpack");
const config = require("../webpack.config")
const compiler = webpack(config)
Object.keys(compiler.hooks).forEach((hookName) => {
  compiler.hooks[hookName].tap('xxx', () => {
    console.log(`run===> ${hookName}`)
  })
})
compiler.run()
//babel
// import "@babel/polyfill"
// import React, { Component } from 'react'
// import ReactDom  from 'react-dom'
// export class App extends Component {
//   render() {
//     return (
//       <div>
//          hello React
//       </div>
//     )
//   }
// }
// ReactDom.render(<App/>,document.getElementById("app"))



// const arr = [new Promise(() => { }), new Promise(() => { })]

// arr.map((item) => {
//   console.log(item)
// })

// // 国内淘宝源
// // 样式处理 css-loader  style-loader
// // postcss
// console.log('hello world')
// import css from './style/index.css';
// import number from './style/number.js';
// import counter from './style/counter.js';
// import less from './index.less';
// import login from '../src/logo1.png';
// let img = new Image()
// console.log(login)
// img.src = login
// let root = document.querySelector('#app');
// root.append(img)
// // consol.log('123123')

// var btn = document.createElement('button');
// btn.innerHTML = '新增11'
// document.body.appendChild(btn);
// btn.onclick = function () {
//   var div = document.createElement('div');
//   div.innerHTML = 'item';
//   document.body.appendChild(div)
// }
// number()
// counter()

// // 模块更新内容
// if (module.hot) {
//   module.hot.accept('./style/number', () => {
//     console.log('123', 123)
//     document.body.removeChild(document.getElementById("number"));
//     number()
//   })
// }