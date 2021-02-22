/**
 * Servicio Cliente
 * 
 * Crea la conexion entre el DAOcliente para realizar las consultas a la BD.
 * Tambien se encarga de la lógica de negocio de la Aplicación
 * 
 * @author David Moreno Gutiérrez
 * @
 */
const { remote } = require("electron");
const DAOCliente = remote.require("../models/DAOCliente");

/**
 * Función que se comunica con el DAO para crear un cliente, si se creo correctamente
 * regresa un objeto de tipo cliente, en caso contrario regresa null.
 * 
 * @param {cliente} cliente 
 * @return {cliente} a 
 */
const createCliente = async (cliente) => {
  a = await DAOCliente.createCliente(cliente);
  return a;
};

// Exportacion de modulos a otras capas 
module.exports = {
    createCliente
};
