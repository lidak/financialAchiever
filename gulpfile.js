'use strict';

var gulp = require('gulp'),
    gulpProtractorAngular = require('gulp-angular-protractor'),
    Server = require('karma').Server,
    appServer = require('./server');

gulp.task('test', ['runE2ETests', 'runUnitTests']);

gulp.task('TDD', function() {
    gulp.watch(['app/js/*.js', 'app/js/**/**.js'], ['test']);
});

/*gulp.task('server', function (callback) {
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});*/

gulp.task('startServer', function(callback) {
    appServer.start(callback);
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
