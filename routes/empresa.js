var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('empresa',{
    isEmpresa:true
  }); //llamar a empresa.hbs
});

module.exports = router;