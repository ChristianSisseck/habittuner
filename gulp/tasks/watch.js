
'use strict';
var browserSync = require('browser-sync').create(),
  gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  reload = browserSync.reload;

//Konfiguration af Gulp er fundet i denne video: https://www.youtube.com/watch?v=_BNo2VCr2k8

gulp.task('watch',['browser-sync', 'styles', 'scripts'],function () {
    gulp.watch('app/index.html').on('change', reload);


  gulp.watch('app/assets/scripts/**/*.js', function(){
    gulp.start('scripts');
  }).on('change', reload);

  gulp.watch('app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  }).on('change', reload);

});


gulp.task('browser-sync',['nodemon'], function(){
    browserSync.init(null, {
      proxy: 'http://localhost:80',
      port:10080,
      open: "true",
      browser: ["google chrome"]
    });
  }
);

gulp.task('nodemon',function(done){
    var running = false;
    return nodemon({
      script: 'server/server.js',
      watch: ['server/*.js']
    })
    .on('start', function () {
      if (!running) {
        done();
      }
      running = true;
    })
    .on('restart', function () {
      setTimeout(function () {
        reload();
      }, 500);
    });
  }
);
