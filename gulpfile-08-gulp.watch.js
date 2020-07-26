const gulp=require('gulp');
const cssmin=require('gulp-cssmin');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');
const rename=require('gulp-rename');
const babel=require('gulp-babel');
const sourcemaps=require('gulp-sourcemaps');
const imagemin=require('gulp-imagemin');

const js_path=['./src/js/cyan/*.js'];

gulp.task('js', ()=>{
  return gulp
    .src(js_path)
    //.pipe(concat('bundle.min.js'))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write())

    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('style', ()=>{
  return gulp
    .src(['./src/css/**/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('image', ()=>{
  return gulp
    .src(['./src/img/**/*.jpg', './src/img/**/*.gif', './src/img/**/*.png'])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({propressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('./build/img/'));
});


// 注意当前的package.json才适用哦！！！
gulp.task('watch', ()=>{
  // gulp.watch(['./src/js/cyan/*.js'], ['js']);
  gulp.watch(js_path, ['js']);
});

gulp.task('default', ['js', 'watch']);


// gulp.watch([文件列表], [任务列表])   // 文件列表任何文件改变 自动执行任务列表