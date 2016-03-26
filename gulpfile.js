var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon');

var combiner = require('stream-combiner2');

var allModules = './public/js/**/*.module.js',
    appCssPath = './public/assets/style',
    componentCssPath = './public/assets/style/**/*.less',
    jsPath = './public/js/**/*.js';

gulp.task('compileLess', function () {
    var combined = combiner.obj([
        gulp.src(appCssPath + '/app.less'),
            less(),
            gulp.dest(appCssPath)
    ]);
   /* return gulp.src(appCssPath + '/app.less')
            .pipe(less())
            .pipe(gulp.dest(appCssPath));*/

    combined.on('error', console.log.bind(console));

    return combined;
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