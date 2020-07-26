const gulp=require('gulp');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');


// .src(['./js/user/vip/1.js'])  
// .src(['./**/*.js'])

// 

gulp.task('js', ()=>{
  return gulp
    // .src(['./src/js/*.js'])
    // .src(['./src/js/uesr/*.js'])
    // .src(['./src/js/other/*.js'])    // 可能有多个子目录 用 .src(['./src/js/**/*.js'])

    // 这里不需要jquery..就指定死一个目录 cyan 咯  
    .src(['./src/js/cyan/*.js'])
    // concat 是可选的 没有就分别打包了
    .pipe(concat('bundle.min.js'))		// concat() 连接js文件 打包到一起 需要只当连接后的filename
    .pipe(uglify())                   // 和上一步顺序可以互换
    .pipe(gulp.dest('./build/js'))    // 连接过了不需要指定filename了，指定目录就行
});

gulp.task('default', ['js']);