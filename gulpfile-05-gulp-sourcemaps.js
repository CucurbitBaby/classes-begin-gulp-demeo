const gulp=require('gulp');
const uglify=require('gulp-uglify');
const concat=require('gulp-concat');
const rename=require('gulp-rename');
const babel=require('gulp-babel');	// 识别器
const sourcemaps=require('gulp-sourcemaps');	// chrome中debug找到源码中的错误代码



 // sourcemaps在压缩之前sourcemaps.init()
 // sourcemaps在压缩之后sourcemaps.write()

 // 1.min.js中多了很多注释代码(源代码信息)
 //# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjo ...
 // chrome默认开着sourcemap的

 // 还有一种方式把sourcemap单独文件 用uglify自带的sourcemap就行了
 // 之所以单独用一个gulp-sourcemaps 是因为这个包还可以map css源文件

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

gulp.task('default', ['js']);