/**
 * Servicio Estreno
 * Se comunica con el DAOestrenos para realizar la lógica de negocio de la aplicación
 * 
 * @author David Moreno Gutiérrez
 */
const { remote } = require("electron");
const DAOestrenos = remote.require("../models/DAOestrenos");

/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
 */
const getAllEstrenos = async () => {
  estrenos = await DAOestrenos.getAllEstrenos();
  return estrenos;
};

/**
 * Recupera todos los usuarios existentes
 * 
 * @return Una lista con los usuarios (o lista vacía)
 */
const getEstrenoById = async (id) => {
  estreno = await DAOestrenos.getEstrenoById(id);
  return estreno;
};

function isDisponible(estreno){
  if (estreno.cantidad <= 0) {
    return false;
  } else {
    return true;
  }
}

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
