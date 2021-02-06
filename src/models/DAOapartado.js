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

  const createApartado = async (apartado) => {
    try {
      const conn = await getConnection();
      apartado.pago = parseFloat(apartado.pago);
      const result = await conn.query("INSERT INTO apartado SET ?", apartado);
      apartado.idapart = result.insertId;
  
      // Notify the User
      new Notification({
        title: "Electron Mysql",
        body: "New Reserva Saved Successfully",
      }).show();
  
      // Return the created Apartado
      return apartado;
    } catch (error) {
      console.log(error);
    }
  };

  // Exportacion de modulos a otras capas 
  module.exports = {
    createApartado
  };
