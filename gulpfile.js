var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');



// Styles
gulp.task('sass', function() {
  return gulp.src('assets/scss/main.scss')
  	.pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('assets/styles'))
});

// Watch
gulp.task('watch', function() {
	gulp.watch('assets/scss/**/*.scss', ['sass']);
});
