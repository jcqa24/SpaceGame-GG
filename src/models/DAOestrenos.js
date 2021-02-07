/**
 * DAO Estreno
 * Componente que suministra la interfaz común entre la aplicación y los "Estrenos" 
 * de la base de datos
 * 
 * @author David Moreno Gutiérrez
 */
const { getConnection } = require("../routes/database");

  /**
   * Función que recupera de la base de datos TODOS los estrenos en la BD
   * 
   * @return {List} una lista con todos los "Estrenos" existentes en la base de datos 
   */
  const getAllEstrenos = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM Estrenos ORDER BY idEstreno DESC");
    return results;
  };
  /**
   * Función que recupera de la base de datos TODOS los estrenos en la BD
   * 
   * @param {Number} id
   * @return {List} un Estreno especificado por su id en la base de datos 
   */
  const getEstrenoById = async (id) => {
    const conn = await getConnection();
    const result = await conn.query("SELECT * FROM Estrenos WHERE idEstreno = ?", id);
    return result[0];
  };
  /**
   * Función que modifica un Estreno de la BD
   * 
   * @param {Number} id
   * @param {Object} estreno
   * @return {Object} regresa el objeto modificado de la base de datos o null en otro caso
   */
  const updateEstreno = async (id, estreno) => {
    const conn = await getConnection();
    const result = await conn.query("UPDATE Estrenos SET ? WHERE idEstreno = ?", [
      estreno,
      id,
    ]);
    return result;
  };

  // Exportacion de modulos a otras capas 
  module.exports = {
    getAllEstrenos,
    getEstrenoById,
    updateEstreno
  };
