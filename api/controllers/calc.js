'use strict';

exports.multiplication = function(req, res) {
  var result = 1;
  for (var i in req.params){
    if (i == "a" || i == "b"){
      result *= req.params[i];
    }
  }
  res.json(result);
};