'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var pump = require('pump');
//var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssmin())
    .pipe(gulp.dest('./themes/maintheme'));
});

gulp.task('cssmin', function (cb) {
  pump([
        gulp.src('./css/source/**/*.css'),
        cssmin(),
        gulp.dest('./css/minified')
    ],cb);
});

gulp.task('jsmin', function (cb) {
  pump([
        gulp.src('./js/source/**/*.js'),
        uglify(),
        gulp.dest('./js/minified')
    ],cb);
});

// =================== DEFAULT TASK ===================
gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./css/source/**/*.css', ['cssmin']);
  gulp.watch('./js/source/**/*.js', ['jsmin']);
});
// ====================================================


// gulp.task('concatcss', function() {
//   return gulp.src('./css/minified/**/*.css')
//     .pipe(concat('allext.css'))
//     .pipe(gulp.dest('./css'));
// })

// gulp.task('concatjs', function() {
//   return gulp.src('./js/minified/**/*.js')
//     .pipe(concat('allext.js'))
//     .pipe(gulp.dest('./js'));
// });
