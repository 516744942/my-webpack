### 正如前面提到的，这种方式存在一些隐患：

1. 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。
2. 这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。


### 防止重复(prevent duplication) 入口依赖 dependOn option 

### HTML 页面上使用多个入口

1. 还需设置 optimization.runtimeChunk: 'single'，否则还会遇到这里所述的麻烦。



### SplitChunksPlugin
1. 但应尽量避免使用多入口的入口：entry: { page: ['./analytics', './app'] }
2. 在使用async脚本标签时，会更好地优化以及执行顺序。
