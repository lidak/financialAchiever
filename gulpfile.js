'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor'),
    Server = require('karma').Server,
    appServer = require('./server'),
    refresh = require('gulp-refresh'),
    sass = require('gulp-sass');

gulp.task('test', ['e2e', 'unit']);

gulp.task('sass', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('TDD', ['startServer', 'sass:watch'], function(callback) {
    gulp.watch([
        'app/js/*.js',
        'app/js/**/**.js',
        'app/views/**.html',
        'app/index.html'
    ], ['unit'], () => {
        refresh();
        console.log('files change is triggered.')
    });
});

gulp.task('startServer', function(callback) {
    appServer.start(callback);
    refresh.listen();
});

gulp.task('stopServer', stopServer);

gulp.task('e2e', ['startServer'], function(callback) {
    gulp
        .src('test/e2e/**.js')
        .pipe(gulpProtractorAngular({
            'configFile': 'configs/protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
            stopServer();
        })
        .on('end', function(callback) {
            stopServer();
            if (typeof callback === 'function') {
                callback();
            }
            process.exit();
        });
});

gulp.task('unit', function(callback) {
    new Server({
        configFile: __dirname + '/configs/karma.conf.js',
        singleRun: true
    }, callback).start();
});

function stopServer(callback) {
    appServer.stop(callback);
}