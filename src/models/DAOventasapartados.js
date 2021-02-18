/**
 * DAO Videojuego
 * Componente que suministra la interfaz común entre la aplicación y los "Videojuegos" 
 * de la base de datos
 * 
 * @author David Moreno Gutiérrez
 */
const { getConnection } = require("../routes/database");

  /**
   * Función que recupera de la base de datos TODOS los Videojuegos en la BD
   * 
   * @return {List} Regresa una lista con todos los "Videojuegos" existentes en la
   * base datos 
   */
  const getAllVentas = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM venta ORDER BY idventa DESC");
    return results;
  };


    /**
   * Función que recupera de la base de datos TODOS los Videojuegos en la BD
   * 
   * @return {List} Regresa una lista con todos los "Videojuegos" existentes en la
   * base datos 
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
