const { isAsyncFunction } = require('util/types');
var pool = require('./bd');

//SIRVE PARA LISTAR LAS NOVEDADES
async function getNovedades(){
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

//SIRVE PARA AGREGAR LAS NOVEDADES --INSERT--

async function insertNovedad(obj){
    try {
        var query = 'insert into novedades set ?';
        var rows = await pool.query(query, [obj]);
        return rows;

    } catch (error) {
        console.log(error);
        throw error;        
    }
}

/*SIRVE PARA ELIMINAR NOVEDADES */

async function deleteNovedadesById(id){
    var query ='delete from novedades where id = ?';
    var rows = await pool.query(query,[id]);
    return rows;
}

/*PARA TRAER(select) UNA NOVEDAD by ID*/

async function getNovedadById(id){
    var query = 'select * from novedades where id = ?';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/*PARA MODIFICAR UPDATE DE LOS DATOS */

async function modificarNovedadById(obj,id){
  try {
    var query = 'update novedades set ? where id = ?';
    var rows = await pool.query(query, [obj,id]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error; 
  }
}

module.exports = {getNovedades, insertNovedad, deleteNovedadesById, getNovedadById, modificarNovedadById};