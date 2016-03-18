var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon');

var allModules = './public/js/**/*.module.js',
    jsPath = './public/js/**/*.js';

gulp.task('concatJsFiles', () => {
    return gulp.src([allModules, jsPath])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'))
});

gulp.task('watchConcatJsFiles', () => {
    gulp.watch([jsPath], ['concatJsFiles']);
});

gulp.task('startServer', () => {
    nodemon({ script: 'server.js' });
});

gulp.task('default', Object.keys(gulp.tasks));