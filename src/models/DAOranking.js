/**
 * DAO Ranking
 * Componente que suministra la interfaz común entre la aplicación y los "Videojuegos" 
 * de la base de datos
 * 
 * @author Yehosuah Eli Mendoza Mendoza
 */
const { getConnection } = require("../routes/database");

  /**
   * Función que recupera de la base de datos TODOS los Videojuegos en la BD
   * 
   * @return {List} Regresa una lista con todos los "Videojuegos" existentes en la
   * base datos 
   */
  const RankingMayor = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM `videojuego` ORDER BY `Cantidad_Vend` DESC");
    return results;
  };

   /**
   * Función que recupera de la base de datos TODOS los Videojuegos en la BD
   * 
   * @return {List} Regresa una lista con todos los "Videojuegos" existentes en la
   * base datos 
   */ 
  const RankingMenor = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM `videojuego` ORDER BY `Cantidad_Vend` ASC");
    return results;
  };
  
  // Exportacion de modulos a otras capas 
  module.exports = {
      RankingMayor,
      RankingMenor
  };
