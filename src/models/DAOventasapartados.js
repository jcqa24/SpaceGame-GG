/**
 * DAO VentaApartado
 * Se encarga de suministrar la interfaz entre la aplicación 
 * y las ventas y los apartados de la base de datos
 * @author Yehosuah Eli Mendoza Mendoza
 */

const { getConnection } = require("../routes/database");

  /**
   * Función que recupera de la base de datos las ventas que existen en la BD
   * @return {List} Regresa una lista con todos las ventas existentes 
   */
  const getAllVentas = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM venta ORDER BY idventa DESC");
    return results;
  };

  /**
   * Función que recupera de la base de datos los apatados que existen en la BD
   * @return {List} Regresa una lista con todos los apatados existentes 
   */
  const getAllApartados = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM apartado ORDER BY idapart DESC");
    return results;
  };
    
  // Exportacion de modulos a otras capas 
  module.exports = {
    getAllApartados,
    getAllVentas,
  };
