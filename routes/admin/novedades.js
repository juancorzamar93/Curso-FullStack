var express = require('express');
var router = express.Router();
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

var novedadesModel = require('../../models/novedadesModel');


/* GET home page. */
router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad =>{
    if(novedad.img_id){
      const imagen = cloudinary.url(novedad.img_id, {
        width:960,
        //crop:'pad' //recorta y se adapta a esos 960
        // o poner hight: 200 en vez de crop
        height: 200,
        crop: 'fill' //recorta parte de la imagen a las medidas declaradas arriba
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



  res.render('admin/novedades', {
      layout:'admin/layout',
      usuario: req.session.nombre,
      novedades
  });
  
});

/* llamamo a la página /agregar */

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', { //agregar.hbs
    layout: 'admin/layout'
  })
});

/* procesa agregar novedades a la BD POST*/

router.post('/agregar', async(req, res, next) =>{
  try {
    var img_id = '';
    if(req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.temFilePath)).public_id;
    }


    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedad({
        ...req.body,
        img_id
      });
      res.redirect('/admin/novedades')      
    }
    else{
      res.render('admin/agregar',{
        layout:'admin/layout',
        error:true,
        message:'Todos los datos tienen que completarse'
      })
      
    }
    
  } catch (error){
    console.log(error); 
    res.render('admin/agregar',{
      layout:'admin/layout',
      error:true,
      message:'No se cargo la novedad'
    })
  }
}); //cierra post de agregar novedades

/*PARA ELIMINAR UNA NOVEDAD */

router.get('/eliminar/:id', async(req,res,next)=>{
  let id = req.params.id;
  let novedad = await novedadesModel.deleteNovedadesById(id);

  
  if(novedad.img_id){
    await(destroy(novedad.img_id))
  }
  
   
  //await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades');

}); //cierra el get de eliminar

/*PARA LISTAR UNA SOLA NOVEDAD BY ID */

router.get('/modificar/:id', async(req,res,next) =>{
  var id = req.params.id;
  console.log(req.params.id);
  var novedad = await novedadesModel.getNovedadById(id);
  
  res.render('admin/modificar', {
    layout:'admin/layout',
    novedad
  })

}); //cierra el traer una SOLA novedad by Id

/*PARA MODIFICAR LA NOVEDAD */
router.post('/modificar', async(req, res, next) =>{
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if(req.body.img_delete ==="1"){
      img_id = null;
      borrar_img_vieja = true;
    }else{
      if(req.files && Object.keys(req.files).length>0){
        imagen= req.files.imagen;
        img_id = (await uploader(imagen.temFilePath)).public_id;
        borrar_img_vieja = true; 
      }
    }

    if(borrar_img_vieja && req.body.img_original){
      await(destroy(req.body.img_original));
    }






    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
      //id: req.body.id
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error:true,
      message: 'No se modificó la novedad'
    })
  }
});

module.exports = router;
