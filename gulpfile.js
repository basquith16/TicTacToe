var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();
'use strict';

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('scripts', function() {
    gulp.src('js/*.js')
      .pipe(uglify())
      .on('error', errorLog)
      .pipe(gulp.dest('minjs'));
})

gulp.task('sass', function () {
    gulp.src('scss/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(prefix('last 2 versions'))
      .pipe(gulp.dest('css/'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
