/**
 * Servicio Apartado
 * 
 * Crea la conexion entre el DAOapartado para realizar las consultas a la BD.
 * Tambien se encarga de la lógica de negocio de la Aplicación
 * 
 * @author David Moreno Gutiérrez
 */
const { remote } = require("electron");
const DAOapartado = remote.require("../models/DAOapartado");

/**
 * Función que se comunica con el DAO para crear un apartado, si se creo correctamente
 * regresa un objeto de tipo apartado, en caso contrario regresa null.
 * 
 * @param {apartado} apartado 
 * @return {apartado} a 
 */
const createApartado = async (apartado) => {
  a = await DAOapartado.createApartado(apartado);
  return a;
};

// Exportacion de modulos a otras capas 
module.exports = {
    createApartado
};
