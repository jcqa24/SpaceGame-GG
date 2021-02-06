/**
 * DAO Estreno
 * Componente que suministra la interfaz común entre la aplicación y los "Estrenos" 
 * de la base de datos
 * 
 * @author David Moreno Gutiérrez
 */
const { getConnection } = require("../routes/database");

  /**
   * Regresa una lista con todos los "Estrenos" existentes en la base de datos 
   * 
   * @return {List} result
   */
  const getAllEstrenos = async () => {
    const conn = await getConnection();
    const results = await conn.query("SELECT * FROM proximosEstrenos ORDER BY idEstreno DESC");
    return results;
  };

  const getEstrenoById = async (id) => {
    const conn = await getConnection();
    const result = await conn.query("SELECT * FROM proximosEstrenos WHERE idEstreno = ?", id);
    return result[0];
  };

  const updateEstreno = async (id, estreno) => {
    const conn = await getConnection();
    const result = await conn.query("UPDATE proximosEstrenos SET ? WHERE idEstreno = ?", [
      estreno,
      id,
    ]);
  };

  // Exportacion de modulos a otras capas 
  module.exports = {
    getAllEstrenos,
    getEstrenoById,
    updateEstreno
  };
