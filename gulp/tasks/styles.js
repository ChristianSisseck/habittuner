var gulp = require("gulp"),
postcss = require("gulp-postcss"),
cssImport = require('postcss-import'),
nested = require('postcss-nested');


//  postcss-import sørger for, at styles.css filen
// kan indeholde import kommandoen, så kilden er her
// styles.css med en række import tags
// derefter bliver filen flyttet til /app/temp/styles mappen
// det er denne mappe som der læses fra i index.html filen
gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, postcss, nested]))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString())
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
