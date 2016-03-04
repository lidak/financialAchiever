'use strict';

var express = require('express'),
  app = express();

app.use('/bower_components', express.static(__dirname + '/app/bower_components'));
app.use('/js', express.static(__dirname + '/app/js'));
app.use('/views', express.static(__dirname + '/app/views'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen('5000', function () {
  console.log('Static was served by express.');
});