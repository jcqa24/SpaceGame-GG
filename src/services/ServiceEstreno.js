/**
 * Servicio Estreno
 * 
 * Crea la conexion entre el DAOEstreno para realizar las consultas a la BD.
 * Tambien se encarga de la lógica de negocio de la Aplicación
 * 
 * @author David Moreno Gutiérrez
 */
const { remote } = require("electron");
const DAOestrenos = remote.require("../models/DAOestrenos");

/**
 * Recupera todos los estrenos existentes de la BD
 * 
 * @return Una lista con los estreno en caso contrario regresa una lista vacía
 */
const getAllEstrenos = async () => {
  estrenos = await DAOestrenos.getAllEstrenos();
  return estrenos;
};

/**
 * Recupera un Estreno especificado por su id
 * 
 * @param {Number} id
 * @return {Object} Un objeto con el estreno obtenido de la consulta, o null otro caso
 */
const getEstrenoById = async (id) => {
  estreno = await DAOestrenos.getEstrenoById(id);
  return estreno;
};

/**
 * Funcion que se encarga de la regla de negocio que verifica si un estreno tiene 
 * reservas disponibles
 * 
 * @param {estreno} estreno 
 * @returns {boolean} true si hay 1 o más disponibles, false en caso contrario
 */
function isDisponible(estreno){
  if (estreno.cantidad <= 0) {
    return false;
  } else {
    return true;
  }
}

/**
 * Función que se encarga de la regla de negocio que requiere que se actualizen la 
 * cantidad de reservas disponibles de cada Estreno
 * 
 * @param {apartado} apartado 
 * @return {apartado} e
 */
const updateDisponibles = async (id, cantidad) => {
  const estreno = await getEstrenoById(id);
  estreno.cantidad = estreno.cantidad - cantidad;
  e = await DAOestrenos.updateEstreno(estreno.idEstreno, estreno);
  return e;
};

// Exportacion de modulos a otras capas 
module.exports = {
    getAllEstrenos,
    getEstrenoById,
    isDisponible,
    updateDisponibles
};
