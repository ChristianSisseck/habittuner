var gulp = require("gulp"),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: true,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
      browserSync.reload();
    });

  watch('./app/assets/scripts/**/*.js', function() {
   gulp.start('scriptsRefresh');
 });
 });

 gulp.task('scriptsRefresh', function(){
  browserSync.reload();
});
