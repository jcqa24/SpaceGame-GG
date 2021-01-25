/**
 * Conecta a la base de datos para poder hacer las setencias de MySQL
 */
const mysql = require('promise-mysql');

// Crea la conexion con la Base de Datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gg'
});

/**
 * Obtiene la conexion de la Base de Datos
 * @returns connection
 */
function getConnection() {
  return connection;
}

// Exportacion de modulos
module.exports = { getConnection };