# 开课吧 gulp3 课程(node 10.x)

##### gulp的作用
* 合并(减少http请求)
* 编译(es6,less,sass,ts..)
* 压缩

##### 安装,使用
* 全局安全 启动器
* 局部安装 核心库
* 配置gulpfile.js

##### gulp Start 
* cnpm install gulp@3.9.1 -D
* 流操作，先怎么着，再怎么着，然后怎么着

##### 压缩jquery(未压缩266KB => 85KB) 
* cnpm install gulp-uglify -D
* (类似合并.box{..}的功能 不打包无用let d功能是uglify?)
* gulpfile-01-gulp-uglify.js

##### 合并js 
* cnpm install gulp-concat -D
* gulpfile-02-gulp-concat.js
* npx gulp error 因为用了es6 let 改成 var ok 
* 在uglify之前 + gulp-babel就行了

##### 重复名
* cnpm install gulp-rename -D
* gulpfile-03-gulp-rename.js

##### babel es6语法
* cnpm install gulp-babel -D
* cnpm install @babel/core -D (babel核心库)
* cnpm install @babel/preset-env -D(环境预设)
* cnpm install gulp-babel @babel/core @babel/preset-env -D
* gulpfile-04-gulp-babel.js


##### 编译压缩 & 调试  sourcemaps
* cnpm install gulp-sourcemaps -D
* 浏览器开启sourcemap
* 单独的sourcemap文件  推荐
* gulpfile-05-gulp-sourcemaps.js


##### 压缩css
* cnpm install gulp-cssmin -D
* gulpfile-06-gulp-cssmin.js


##### 压缩image
* cnpm install gulp-imagemin@5.0.3 -D
* 1.压缩图片 2.渐进式加载
* gulpfile-07-gulp-imagemin.js


##### 文件监听
* cnpm install gulp-watch -D
* gulpfile-08-gulp-watch.js

##### liverelaod
* cnpm install gulp-livareload -D
* 浏览器(liverelaod插件)  浏览器自动和服务器开一个websocket连接 服务器将文件更新变化推动到浏览器
* gulp自带了一个http-server 自己安装live-server也行
* 打包js时，主动输出到livereload()
* 监听指定html文件和js文件， 回调执行livereload对象得changed方法把file.path传过去
* 10.html引入js的时?/t=${Math.random()}
* liverelaod原理: 每当有文件更新=>就需要用watch来调用js任务=>js任务中反过来调用livereload()
* 所以需要一个watch来调用js任务。。look code
* gulpfile-09-gulp-livereload.js