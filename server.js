'use strict';

var express = require('express'),
    app = express(),
    server,
    port = process.env.PORT ||5000;

app.use('/bower_components', express.static(__dirname + '/app/bower_components'));
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/views', express.static(__dirname + '/app/views'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});


function start (callback) {
    server = app.listen(port, function() {
        console.log('Static was served by express.');
        callback();
    });
}

function stop (callback) {
    server.close();
    callback();
}


module.exports = {
    start: start,
    stop: stop
};