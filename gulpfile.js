'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor'),
    Server = require('karma').Server,
    appServer = require('./server'),
    refresh = require('gulp-refresh');

gulp.task('test', [/*'runE2ETests''runUnitTests', */]);

gulp.task('TDD',['startServer'], function() {
    gulp.watch([
        'app/js/*.js',
        'app/js/**/**.js',
        'app/views/**.html',
        'app/index.html'
    ], () => {
        refresh();
        console.log('files change is triggered.')
    });
});

gulp.task('startServer', function(callback) {
    appServer.start(callback);
    refresh.listen();
});

gulp.task('stopServer', function (callback) {
    appServer.stop(callback);
})

gulp.task('runE2ETests', function(callback) {
    gulp
        .src('test/e2e/**.js')
        .pipe(gulpProtractorAngular({
            'configFile': 'configs/protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true
        }))
        .on('error', function(e) {
            console.log(e);
        })
        .on('end', callback);
});

gulp.task('runUnitTests', function(callback) {
    new Server({
        configFile: __dirname + '/configs/karma.conf.js',
        singleRun: true
    }, callback).start();
});
