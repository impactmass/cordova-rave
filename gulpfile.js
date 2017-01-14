'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('build', function () {
  var b = browserify({
    entries: ['rave-inline.js', 'lib/rave-init.js']
  });

  return b
    .transform('babelify', {presets: 'es2015'})
    .bundle()
    .pipe(source('rave.js'))
    .pipe(buffer())
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(gulp.dest('../www/'));
});
