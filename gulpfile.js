var gulp = require('gulp');


var spritesmith = require('gulp.spritesmith');

gulp.task('default', function() {
  // place code for your default task here
  console.log('wow');
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('img/*/*.').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  spriteData.pipe(gulp.dest('sprite'));
});
