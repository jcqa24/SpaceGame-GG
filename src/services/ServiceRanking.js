/**
 * Servicio Videojuego
 * 
 * Crea la conexion entre el DAOVideojuego para realizar las consultas a la BD.
 * Tambien se encarga de la lógica de negocio de la Aplicación
 * 
 * @author Yehosuah Eli Mendoza Mendoza
 */

const { remote } = require("electron");
const DAOranking = remote.require("../models/DAOranking");

/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
 */
 const RankingMayor = async () => {
  videojuegos = await DAOranking.RankingMayor();
  return videojuegos;
};

/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
 */
const RankingMenor = async () => {
    videojuegos = await DAOranking.RankingMenor();
    return videojuegos;
};
  
module.exports = {
    RankingMayor,
    RankingMenor
};