var gulp = require('gulp');
gulp.task('copy', function() {
  return gulp.src('src/file1').pipe(gulp.dest('tmp/'));
});
