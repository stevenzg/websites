var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  htmlmin = require('gulp-htmlmin'),
  usemin = require('gulp-usemin'),
  templateCache = require('gulp-angular-templatecache'),
  inject = require('gulp-inject'),
  rev = require('gulp-rev');


//,
//sourcemaps = require('gulp-sourcemaps')

//gulp.task('styles', function() {
//  return gulp.src('src/styles/main.scss')
//    .pipe(sass({ style: 'expanded' }))
//    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//    .pipe(gulp.dest('dist/assets/css'))
//    .pipe(rename({suffix: '.min'}))
//    .pipe(minifycss())
//    .pipe(gulp.dest('dist/assets/css'))
//    .pipe(notify({ message: 'Styles task complete' }));
//});

gulp.task('scripts', function() {
  return gulp.src('js/**/*.js')//src/scripts/**/*.js
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});


gulp.task('minify', function() {
  return gulp.src('dev.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('../websites'))
});

gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(sourcemaps.init())
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});



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

//cssvendor: [minifycss()],
//cssmain: [minifycss()],
//.pipe(sourcemaps.init())
gulp.task('usemin', ['templatecache'], function () {
  return gulp.src('dev.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.html'))
    .pipe(usemin({
      cssvendor: [minifycss(), rev()],
      cssmain: [minifycss(), rev()],
      jsvendor: [uglify(), rev()],
      jsmain: [uglify(), rev()]
      // in this case css will be only concatenated (like css: ['concat']).
    }))
    .pipe(gulp.dest('../websites'));
});


gulp.task('injecttemple', ['usemin'], function () {
  var target = gulp.src('index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./dist/templatecache/*.js'], {read: false});

  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('../websites'));
});

gulp.task('gyf1', ['templatecache', 'usemin', 'injecttemple']);
