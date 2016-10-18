'use strict';

var express = require('express'),
    app = express(),
    server,
    port = process.env.PORT || 5000,
    serverStarted = false;

app.use('/bower_components', express.static(`${__dirname}/app/bower_components`));
app.use('/js', express.static(`${__dirname}/app/js`));
app.use('/views', express.static(`${__dirname}/app/views`));

app.get('*', function(req, res) {
    res.sendFile(`${__dirname}/app/index.html`);
});


function start(callback) {
    if (serverStarted) {
        return;
    }

    server = app.listen(port, function() {
        serverStarted = true;
        console.log(`Static was served by express on ${port}-th port.`);
        if (typeof callback === 'function') {
            callback();
        }
    });
}

function stop(callback) {
    if (!serverStarted) {
        return;
    }
    server.close();
    if (typeof callback === 'function') {
        callback();
    }
    serverStarted = false;
}


module.exports = {
    start: start,
    stop: stop
};