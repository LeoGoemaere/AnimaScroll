'use strict';

var gulp        = require('gulp'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
	babel 		= require('gulp-babel');

// Configure JS.
gulp.task('js', function() {
  return gulp.src('src/*.js')
	.pipe(babel({
		presets: ["@babel/preset-env"]
	}))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('default', ['js']);
