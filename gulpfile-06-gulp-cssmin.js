const gulp=require('gulp');
const cssmin=require('gulp-cssmin');    // CSS压缩	
const concat=require('gulp-concat');

gulp.task('style', ()=>{
  return gulp
    .src(['./src/css/**/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('default', ['style']);

