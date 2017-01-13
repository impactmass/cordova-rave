'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('build', function () {
  gulp.src(['rave-inline.js', 'rave-init.js'])
    .pipe(concat('rave.js'))
    .pipe(browserify({insertGlobals: true}))
    .pipe(gulp.dest('../www'));
});
