/**
 * Servicio Videojuego
 * Se comunica con el DAOvideojuego para realizar la lógica de negocio de la aplicación
 * 
 * @author David Moreno Gutiérrez
 */
const { remote } = require("electron");
const DAOvideojuego = remote.require("../models/DAOvideojuego");

/**
 * Elimina un Videojuego de la base de datos especificado por su ID
 * 
 * @return {boolean} Verdadero si se eliminó correctamente el archivo,
 * Falso en caso contrario
 */
const deleteVideojuego = async (id) => {
  await DAOvideojuego.deleteVideojuego(id);
  return true;
};

/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
 */
const getAllVideojuegos = async () => {
  videojuegos = await DAOvideojuego.getAllVideojuegos();
  return videojuegos;
};

/**
 * Recupera todos los videojuegos existentes en orden mayor
 * en razon a las ventas
 * @return Una lista con los usuarios (o lista vacía)
 */

const RankingMayor = async () => {
  videojuegos = await DAOvideojuego.RankingMayor();
  return videojuegos;
};

/**
 * Recupera todos los videojuegos existentes en orden menor
 * en razon a las ventas
 * @return Una lista con los usuarios (o lista vacía)
 */

const RankingMenor = async () => {
  videojuegos = await DAOvideojuego.RankingMenor();
  return videojuegos;
};

/**
 * Verifica si existen ventas bajas en un videojuego segun las reglas de negocio
 * 
 * @param videojuego
 * @return {boolean} Verdadero si se eliminó correctamente el archivo,
 * Falso en caso contrario
 */
function isLowSales(videojuego) {
  if (videojuego.cantidad_Vend < 50){
    return true;
  } else {
    return false;
  }
}

// Exportacion de modulos a otras capas 
module.exports = {
    getAllVideojuegos,
    deleteVideojuego,
    isLowSales,
    RankingMayor,
    RankingMenor

};