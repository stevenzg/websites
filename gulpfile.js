var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  embedlr = require("gulp-embedlr");


gulp.src("*.html")
  .pipe(embedlr())
  .pipe(gulp.dest("./dist"));

gulp.task('watch', function() {

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['js/**/*.*']).on('change', livereload.changed);
  //gulp.watch('js/**/*.*');


  //var server = livereload();

  // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
  //gulp.watch('js/**/*.*', function (file) {
  //  server.changed(file.path);
  //});
});
