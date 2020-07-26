const gulp=require('gulp');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');
const rename=require('gulp-rename');
const babel=require('gulp-babel');	// 识别器
const sourcemaps=require('gulp-sourcemaps');	// chrome中debug找到源码中的错误代码
const cssmin=require('gulp-cssmin');            // CSS压缩    
const imagemin=require('gulp-imagemin');        // 不仅是image压缩
 

gulp.task('js', ()=>{
  return gulp
    .src(['./src/js/cyan/*.js'])	
    .pipe(sourcemaps.init())
    .pipe(babel({
    	presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename({suffix: '.min'}))			
    .pipe(gulp.dest('./build/js'))
});

gulp.task('style', ()=>{
  return gulp
    .src(['./src/css/**/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/'));
});

// *.* 谨慎着来
// imagemin.gifsicle({interlaced: true})  隔行扫描  开始模糊，加载慢慢变清晰
// imagemin.jpegtran({propressive: true}) 渐进和上面一个意思
// imagemin.jpegtran({propressive: true}) png压缩级别(无损压缩)
gulp.task('image', ()=>{
  return gulp
    // .src(['./src/img/**/*'])  // 也可以这样哒
    .src(['./src/img/**/*.jpg','./src/img/**/*.png','./src/img/**/*.gif'])
    // 配置参考： https://www.npmjs.com/package/gulp-imagemin
    .pipe(imagemin([
      // git配置 git图片交换图层，可以做一个优化 interlaced ..
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({propressive: true}),
      imagemin.optipng({optimizationLevel: 5})

    ]))
    .pipe(gulp.dest('./build/img/'))
});


gulp.task('default', ['js','style','image']);

