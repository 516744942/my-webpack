# my-webpack
### 模块打包器


### 环境准备

1. nodeJs
2. webpack  webpack-cli

#### npm install webpack webpack-cli -d
#### npm install webpack webpack-cli -g

### npm init -y

### 启动
1. npx webpack 默认生产模式
2. scripts 脚本命令的方式 "dev":"webpack" 

### 配置
1. 默认配置 0配置
2. 自定义配置 根目录  webpack.config.js 
3.  有自定义配置的话  命令会按着 webpack.config.js 里面的配置进行打包
4. 具体看 webpack.config.js
5. webpack.base.config.js
6. webpack.dev.config.js
6. webpack.pro.config.js
7. "dev-test":"webpack --config ./webpack.hufeng.js"
8. 删除冗余代码  rm -rf ./dist

### development打包结果
1. 函数对象 "./src/index.js"键
2. 内容为 eval函数


###  核心概念
1. 何为零配置 4.x版本以上 不用配置就可以打包  npx webpack
2. 何为配置文件 webpack --config   --config ./webpack.hufeng.js
3. entry 打包 入口文件 [spa  mpa] spa 单页面应用  也可以理解为但入口 mpa  多页面应用  理由seo
4. output 出口文件 
5. mode  : none  development  production: 压缩js的插件  默认 mode
6. loader : 默认只支持 js和json 模块   模块转换器  模块处理器(预处理文件)
7. plugin  插件webpack的功能扩展 html-webpack-plugin
8. chunk  // 代码片段
9. module // 支持更多的模块 
10. bundle 输出文件 就叫bundle文件


### 清空多余 
1.rm -rf ./dist 
2. CleanWebpackPlugin


### bundle  chunk 和module  三者之间的关系
1. chunk 对应1个或者多个module
2. 一个bundle 对应1个或者多个chunk(一个chunk)

### 配置commonJs模块规范
1. 通过require(...)引入其他文件
2. 通过require(...)使用npm下载的工具函数
3. 使用JavaScript控制流程表达式 例如 ？ 操作符
4. 对value使用常量或变量赋值
5. 对value使用常量或变量赋值
6. 编译并执行函数,生产部分配置