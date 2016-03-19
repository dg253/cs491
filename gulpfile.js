var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon');

var allModules = './public/js/**/*.module.js',
    appCssPath = './public/assets/style',
    componentCssPath = './public/assets/style/**/*.less',
    jsPath = './public/js/**/*.js';

gulp.task('compileLess', function () {
    return gulp.src(appCssPath + '/app.less')
            .pipe(less())
            .pipe(gulp.dest(appCssPath));
});

gulp.task('watchLess', function () {
   gulp.watch(componentCssPath, ['compileLess']);
});

gulp.task('concatJsFiles', function () {
    return gulp.src([allModules, jsPath])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
});

gulp.task('watchConcatJsFiles', function () {
    gulp.watch([jsPath], ['concatJsFiles']);
});

gulp.task('startServer', function () {
    nodemon({ script: 'server.js' });
});

gulp.task('default', Object.keys(gulp.tasks));