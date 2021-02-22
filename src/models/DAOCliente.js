/**
 * DAO Cliente
 * Componente que suministra la interfaz común entre la aplicación y los "clientes" 
 * de la base de datos
 * 
 * @author David Moreno Gutiérrez
 * @since 21/02/2021
 */
const { getConnection } = require("../routes/database");

  /**
   * Regresa una lista con todos los "clientes" existentes en la base de datos 
   * 
   * @return {List} result
   */

  const createCliente = async (cliente) => {
    try {
      const conn = await getConnection();
      const result = await conn.query("INSERT INTO cliente SET ?", cliente);
      cliente.id_cliente = result.insertId;

      // Regresa el Objeto "cliente" creado
      return result[0];
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Función que recupera de la base de datos TODOS los Cliente en la BD
   * 
   * @param {String} email
   * @return {List} un Cliente especificado por su email en la base de datos 
   */
  const getClienteByEmail = async (email) => {
    const conn = await getConnection();
    const result = await conn.query("SELECT * FROM cliente WHERE email = ?", email);
    return result[0];
  };

  /**
   * Función que elimina un Cliente de la BD
   * 
   * @param {String} email
   * @return {List} un Cliente especificado por su email en la base de datos 
   */
  const deleteAllClientes = async (id) => {
    const conn = await getConnection();
    const result = await conn.query("DELETE FROM cliente");
    return result;
  };

  // Exportacion de modulos a otras capas 
  module.exports = {
    createCliente,
    getClienteByEmail,
    deleteAllClientes
  };
