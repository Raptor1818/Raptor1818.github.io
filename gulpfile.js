const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// Minify CSS
gulp.task('minify-css', () => {
  return gulp
    .src('/var/www/raptorino/dist/assets/dist/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('/var/www/raptorino/dist/assets/dist/'));
});

// Minify JS
gulp.task('minify-js', () => {
  return gulp
    .src('/var/www/raptorino/dist/assets/dist/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('/var/www/raptorino/dist/assets/dist/'));
});

// Define a default task
gulp.task('default', gulp.parallel('minify-css', 'minify-js'));
