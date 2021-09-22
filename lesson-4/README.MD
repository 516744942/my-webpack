### hot  module replacement 热模块替换
1. 目的提升开发效率 提升开发效率
2. 启动hmr
3. 原理  js发生变化会自动更新浏览器

### babel官网 https://www.babeljs.cn/docs/  
1. 语法转换
2. 通过 Polyfill  方式在目标环境中添加缺失的特性
3. 配置文件
### 配置文件
.babelrc
babel.config.js
package.json的配置文件中 直接写babel的配置
Babel-loader


###
1. 目前 7.x 现在直接env
2. 之前 6.x 
#### 预设插件 babel-preset-es2015

3. env对标准的es6语法进行装换的
4. 类型检查flow语法
5. react pre

6. core-js 2.x与3.x的区别
语法支持的更多

### 自定义plugin
1.  plugin就是对webpack的功能扩展
2.  触发时机
3. 生成某种资源，或者一些操作
4. webpack从打包开始到结束 是有生命周期的概念,或者是钩子