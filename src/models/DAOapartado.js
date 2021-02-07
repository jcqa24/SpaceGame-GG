/**
 * DAO Apartado
 * Componente que suministra la interfaz común entre la aplicación y los "Apartados" 
 * de la base de datos
 * 
 * @author David Moreno Gutiérrez
 */
const { getConnection } = require("../routes/database");

  /**
   * Regresa una lista con todos los "Apartados" existentes en la base de datos 
   * 
   * @return {List} result
   */

  const createApartado = async (apartado) => {
    try {
      const conn = await getConnection();
      apartado.pago = parseFloat(apartado.pago);
      const result = await conn.query("INSERT INTO apartado SET ?", apartado);
      apartado.idapart = result.insertId;
  
      // Notifica al Usuario
      new Notification({
        title: "Electron Mysql",
        body: "New Reserva Saved Successfully",
      }).show();
  
      // Regresa el Objeto "Apartado" creado
      return apartado;
    } catch (error) {
      console.log(error);
    }
  };

  // Exportacion de modulos a otras capas 
  module.exports = {
    createApartado
  };
