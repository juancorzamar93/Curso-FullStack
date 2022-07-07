var express = require('express');
var router = express.Router();
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad =>{
    if(novedad.img_id){
      const imagen = cloudinary.url(novedad.img_id, {
        width:960,
        height: 200,
        crop: 'fill'
        //crop:'pad' //recorta y se adapta a esos 960
        // o poner hight: 200 en vez de crop
      });
      return{
        ...novedad,
        imagen
      }
      
    }
    else{
      return{
        ...novedad,
        imagen: ''
      }
    }
  })


  res.render('novedades',{
    isNovedades:true,
    novedades
  }); //llamar a novedades.hbs
});

module.exports = router;