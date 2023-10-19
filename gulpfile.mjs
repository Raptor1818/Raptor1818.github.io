import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';

// Minify CSS
gulp.task('minify-css', () => {
  return gulp
    .src('./dist/assets/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/assets/')); // Output to the same directory
});

// Minify JS
gulp.task('minify-js', () => {
  return gulp
    .src('./dist/assets/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/')); // Output to the same directory
});

// Define a default task
gulp.task('default', gulp.parallel('minify-css', 'minify-js'));

export default gulp;
