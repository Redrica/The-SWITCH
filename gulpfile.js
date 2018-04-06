// "use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('style', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('source/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'source'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'style'], function () {
  gulp.watch('source/sass/style.scss', ['style']);
  gulp.watch('source/*.html', browserSync.reload);
  gulp.watch('source/js/*.js', browserSync.reload);
});





















// gulp.task('mytask', function() {
//   console.log('Привет, я таск!');
// });
