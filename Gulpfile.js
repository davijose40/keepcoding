const gulp = require('gulp');
const pug = require('gulp-pug');
// const sass = require('gulp-sass');
const production = false;

gulp.task('pug', function(){
  return gulp.src('./pug/**/*.pug')
        .pipe(pug({
          pretty: production ? false : true,
        }))
        .pipe(gulp.dest('./React/'));
  });

gulp.task('default', function(){
  gulp.watch('./pug/**/*.pug', gulp.series('pug'))
});

