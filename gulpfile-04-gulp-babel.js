const gulp=require('gulp');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');
const rename=require('gulp-rename');
const babel=require('gulp-babel');	// 识别器

// preset-env环境预设 2015-preset-env
// cnpm i gulp-babel @babel/core @babel/preset-env -D

gulp.task('js', ()=>{
  return gulp
    .src(['./src/js/cyan/*.js'])	
    .pipe(babel({
    	presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))			
    .pipe(gulp.dest('./build/js'))
});

gulp.task('default', ['js']);