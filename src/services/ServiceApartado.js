/**
 * Servicio Estreno
 * Se comunica con el DAOEstrenos para realizar la lógica de negocio de la aplicación
 * 
 * @author David Moreno Gutiérrez
 */
const { remote } = require("electron");
const DAOapartado = remote.require("../models/DAOapartado");

/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
 */
const createApartado = async (apartado) => {
  a = await DAOapartado.createApartado(apartado);
  return a;
};

// Exportacion de modulos a otras capas 
module.exports = {
    createApartado
};
