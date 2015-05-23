var gulp = require('gulp'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  del = require('del'),
  htmlmin = require('gulp-htmlmin'),
  usemin = require('gulp-usemin'),
  templateCache = require('gulp-angular-templatecache'),
  inject = require('gulp-inject'),
  rev = require('gulp-rev');

gulp.task('clean', function(cb) {
  del(['dist', 'index.html'], cb);
});

gulp.task('templatecache', ['clean'], function () {
  return gulp.src('views/**/*.html')
    .pipe(templateCache({
      root: 'views/',
      module:'websites'
      }))
    .pipe(rev())
    .pipe(gulp.dest('dist/templatecache'));
});

gulp.task('usemin', ['templatecache'], function () {
  return gulp.src('dev.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.html'))
    .pipe(usemin({
      cssvendor: [minifycss(), rev()],
      cssmain: [minifycss(), rev()],
      jsvendor: [uglify(), rev()],
      jsmain: [uglify(), rev()]
    }))
    .pipe(gulp.dest('../websites'));
});


gulp.task('injecttemple', ['usemin'], function () {
  var target = gulp.src('index.html');
  var sources = gulp.src(['./dist/templatecache/*.js'], {read: false});

  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('../websites'));
});

gulp.task('gyf1', ['templatecache', 'usemin', 'injecttemple']);
