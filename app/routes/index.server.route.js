/**
 * Created by Anneos on 12/11/2016.
 */
module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};