const gulp=require('gulp');
const uglify=require('gulp-uglify');	// 压缩包





// gulp.task();
// gulp.task();
// gulp.task();
// gulp.task();
// gulp.task();
// 可以有很多个task()任务
// ..


// gulp.src() 读文件
// gulp.src() 写文件
// .pipe() 		流操作 => 先怎么着，后怎么着, 再怎么着



gulp.task('js', ()=>{
  // gulp.src() 读取文件; /*.js所有的.js文件
  return gulp.src(['./src/js/*.js'])
    .pipe(uglify())
    // gulp.dest() 输出
    .pipe(gulp.dest('./build/js/'));
});

// 默认任务
gulp.task('default', ['js']);