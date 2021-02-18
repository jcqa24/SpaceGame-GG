/**
 * Servicio Videojuego
 * 
 * Crea la conexion entre el DAOVideojuego para realizar las consultas a la BD.
 * Tambien se encarga de la lógica de negocio de la Aplicación
 * 
 * @author David Moreno Gutiérrez
 */
const { remote } = require("electron");
const DAOventasapartados = remote.require("../models/DAOventasapartados");

/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
 */
const getApartados = async () => {
  apartados = await DAOventasapartados.getAllApartados();
  return apartados;
};


/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
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