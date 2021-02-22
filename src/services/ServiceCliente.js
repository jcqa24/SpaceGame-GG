/**
 * Servicio Cliente
 * 
 * Crea la conexion entre el DAOcliente para realizar las consultas a la BD.
 * Tambien se encarga de la lógica de negocio de la Aplicación
 * 
 * @author David Moreno Gutiérrez
 * @since 21/02/2021
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

/**
 * Recupera un Cliente especificado por su Email
 * 
 * @param {String} email
 * @return {Object} Un objeto con el Cliente obtenido de la consulta, o null otro caso
 */
const getClienteByEmail = async (email) => {
  cliente = await DAOClientes.getClienteById(email);
  return cliente;
};

// Exportacion de modulos a otras capas 
module.exports = {
    createCliente,
    getClienteByEmail
};
