"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var del = require('del');
var run = require('run-sequence');

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

gulp.task('copy', function () {
  return gulp.src([
    'source/css/*.css',
    'source/fonts/*.{woff,woff2}',
    'source/img/*.{png,jpg}',
    'source/js/*.js',
    'source/*.html'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('docs'));
});

gulp.task('clean', function () {
  return del(['docs/**', 'docs/*.*', '!docs', '!docs/Readme.md']);
});

gulp.task('build', function (done) {
  run(
    'clean',
    'copy',
    done);
});



// gulp.task("copy", function () {
//   return gulp.src([
//     "source/fonts/**/*.{woff,woff2}",
//     "source/img/*.{png,jpg}",
//     "source/js/**",
//     "source/**/*.html"
//   ], {
//     base: "source"
//   })
//     .pipe(gulp.dest("build"));
// });
//



// "use strict";
//
// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var plumber = require("gulp-plumber");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var server = require("browser-sync").create();
//
// gulp.task("style", function() {
//   gulp.src("source/sass/style.scss")
//     .pipe(plumber())
//     .pipe(sass())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(gulp.dest("source/css"))
//     .pipe(server.stream());
// });
//
// gulp.task("serve", ["style"], function() {
//   server.init({
//     server: "source/",
//     notify: false,
//     open: true,
//     cors: true,
//     ui: false
//   });
//
//   gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
//   gulp.watch("source/*.html").on("change", server.reload);
// });
