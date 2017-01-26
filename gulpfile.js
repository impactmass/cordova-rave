'use strict';

const browserify = require('browserify');
const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');
const gulpLoadPlugins = require('gulp-load-plugins');

const plugins = gulpLoadPlugins();

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
    .pipe(gulp.dest('../../www/'));
});

gulp.task('test', function () {
  return gulp.src(['**/*.test.js', '!node_modules/**'])
    .pipe(plugins.mocha({
      reporter: 'spec',
      timeout: 15000
    }));
});
