/**
 * DAO Cliente
 * Componente que suministra la interfaz común entre la aplicación y los "clientes" 
 * de la base de datos
 * 
 * @author David Moreno Gutiérrez
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

      // Notifica al Usuario
      new Notification({
        title: "Electron Mysql",
        body: "New Reserva Saved Successfully",
      }).show();

      // Regresa el Objeto "cliente" creado
      return cliente;
    } catch (error) {
      console.log(error);
    }
  };

  // Exportacion de modulos a otras capas 
  module.exports = {
    createCliente
  };
