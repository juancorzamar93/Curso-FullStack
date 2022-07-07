var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ //llama al hbs index.hbs
    isHome:true    

  });
});

module.exports = router;
