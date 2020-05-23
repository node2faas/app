'use strict';

module.exports = function(app) {
  var apicalc = require('../controllers/calc');
  
  app.route('/multiplication/:a/:b')
    .get(apicalc.multiplication)
}