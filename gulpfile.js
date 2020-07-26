const gulp=require('gulp');
const livereload=require('gulp-livereload');
const babel=require('gulp-babel');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');

const js_path=['./src/js/cyan/*.js'];

// 开发者浏览器Live ReLoad   <==== websocket =====>   服务器(watch)

gulp.task('js', ()=>{
  return gulp
    .src(js_path)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))    // 如果只是输出到文件 就不需要下面什么事儿了
    .pipe(livereload());              // 每次文件改动，输出到livereload 主动提醒一下
});

// http-sever是gulp自带安装的包吗？ 不是的话自己安装一个

// 值得注意的是去掉?t=${Math.random()}  10.html自动更新  浏览器端不自动更新js了
// 即使不去掉，10.html 没有安装Live Reload插件的 浏览器访问也是自动更新的

gulp.task('watch', ()=>{
  //开启livereload的服务   让服务器开始监听 监听访问者的一举一动
  livereload.listen();

  //重新编译JS  监听文件修改,主要有js_path文件发生改变 主动触发js任务  然后又被listen()
  gulp.watch(js_path, ['js']);

  //监听html；标记文件修改   不光是js任务触发才应该被listent()  手动的修改以及10.html文件应该被监听
  gulp.watch([
    './10.html',
    ...js_path
  ], file=>{
    livereload.changed(file.path);   // 通知liverelaod哪些文件需要更新
  });
});

gulp.task('default', ['js', 'watch']);
