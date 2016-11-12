/**
 * Created by Anneos on 12/11/2016.
 */
var express = require('express');
module.exports = function() {
    var app = express();
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    return app;
};
