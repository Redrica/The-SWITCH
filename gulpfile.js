"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
// var rename = require("gulp-rename");
// var svgstore = require("gulp-svgstore");
// var imagemin = require("gulp-imagemin");
// var minify = require("gulp-csso");
var run = require("run-sequence");
// var del = require("del");

gulp.task("style", function () {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("css"))
    // .pipe(minify())
    // .pipe(rename("style.min.css"))
    .pipe(server.stream())
    // .pipe(gulp.dest("build/css"))
});

gulp.task("serve", function () {
  server.init({
    server: "./",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html", on("change", server.reload));
});

// gulp.task("build", function (done) {
//   run(
//     "clean",
//     "copy",
//     "style",
//     "webp",
//     "sprite",
//     "images",
//     "image-del",
//     done);
// });

// сборка спрайта
// gulp.task("sprite", function () {
//   return gulp.src("source/img/svg-sprite/*.svg")
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img/svg-sprite"));
// });

// // минификация изображений
// gulp.task("images", function () {
//   return gulp.src("source/img/**/*.{png,jpg,svg}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.jpegtran({progressive: true}),
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest('build/img'));
// });

// // webP
// gulp.task("webp", function () {
//   return gulp.src("source/img/content-image/*.{png,jpg}")
//     .pipe(webp({quality: 90}))
//     .pipe(gulp.dest('build/img'));
// });

// копирование
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

// // удаление
// gulp.task("clean", function () {
//   return del("build");
// });
//
// // удаление лишних изображений
// gulp.task("image-del", function () {
//   return del("build/img/content-image");
// });




