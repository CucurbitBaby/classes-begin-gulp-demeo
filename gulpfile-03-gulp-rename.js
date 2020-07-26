const gulp=require('gulp');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');
const rename=require('gulp-rename');	// 加.min

// .src(['./js/user/vip/1.js'])  
// .src(['./**/*.js'])

// 

gulp.task('js', ()=>{
  return gulp
    .src(['./src/js/cyan/*.js'])				
    // .pipe(concat('bundle.min.js'))		// concat() 连接js文件 打包到一起
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))			
    .pipe(gulp.dest('./build/js'))
});

gulp.task('default', ['js']);