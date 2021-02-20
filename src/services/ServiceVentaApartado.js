/**
 * Servicio Ventas y Apartados
 * Crea la conexion con DAOventasapartados para realizar las consultas a la BD.
 * @author Yehosuah Eli Mendoza Mendoza
 */

 const { remote } = require("electron");
const DAOventasapartados = remote.require("../models/DAOventasapartados");

/**
 * Recupera todos la informacion existentes
 * @return {List} Una lista con la informacion (o lista vacía)
 */
const getApartados = async () => {
  apartados = await DAOventasapartados.getAllApartados();
  return apartados;
};


/**
 * Recupera todos la informacion existentes
 * @return {List} Una lista con la informacion (o lista vacía)
 */
const getVentas = async () => {
  ventas = await DAOventasapartados.getAllVentas();
  return ventas;
};

// Exportacion de modulos a otras capas 
module.exports = {
  getVentas,
  getApartados
};