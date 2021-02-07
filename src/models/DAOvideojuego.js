/**
 * DAO Videojuego
 * Componente que suministra la interfaz común entre la aplicación y los "Videojuegos" 
 * de la base de datos
 * 
 * @author David Moreno Gutiérrez
 */
const { getConnection } = require("../routes/database");

  /**
   * Regresa un verdadero si se pudo ejecutar de forma exitosa la sentencia DELETE
   * En caso contrario regresa falso
   * 
   * @param {idvideojuego} id
   * @return {boolean} result
   */
  const deleteVideojuego = async (id) => {
    const conn = await getConnection();
    const result = await conn.query("DELETE FROM videojuego WHERE idvideojuego = ?", id);
    return result;
  };

  /**
   * Regresa una lista con todos los "Videojuegos" existentes en la base de datos 
   * 
   * @return {List} result
   */
  const getAllVideojuegos = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM videojuego ORDER BY idvideojuego DESC");
    return results;
  };
  
/**
   * Regresa una lista con todos los "Videojuegos" existentes en la base de datos 
   * 
   * @return {List} result
   */
  const RankingMayor = async () => {
    const conn = await getConnection();
      const results = await conn.query("SELECT * FROM `videojuego` ORDER BY `Cantidad_Vend` DESC LIMIT 0, 5");
      return results;  
  }
/**
   * Regresa una lista con todos los "Videojuegos" existentes en la base de datos 
   * 
   * @return {List} result
   */
  const RankingMenor = async () => {
    const conn = await getConnection();
      const results = await conn.query("SELECT * FROM `videojuego` ORDER BY `Cantidad_Vend` ASC LIMIT 0, 5");
      return results;  
  }


  // Exportacion de modulos a otras capas 
  module.exports = {
    getAllVideojuegos,
    deleteVideojuego,
    RankingMayor,
    RankingMenor
  };
