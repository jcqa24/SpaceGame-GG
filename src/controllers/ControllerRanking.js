/**
 * Controlador Ranking
 * Se encarga de manipular las funcionalidades de la ventana "Ranking"
 */
const ServiceVideojuego = require("../services/ServiceVideojuego");
const rankingTable = document.querySelector("#rankingTable");

/**
 * Renderiza los renglones de la tabla para mostrarlo con los datos obtenidos de
 * @param {videojuegos} tasks 
 */

 function muestraVideojuegos(tasks) {
  rankingTable.innerHTML = "";
  tasks.forEach((t) => {
      rankingTable.innerHTML += `
      <tr>
      <td>${t.idvideojuego}</td>
      <td>${t.Nombre_Video}</td>
      <th scope="row">${t.Cantidad_Vend}</th>
      <td>${t.Stock}</td>
      </tr>
      `;
  });
}

/**
 * Inicializa la ventana con los videojuegos obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  videojuegos = await ServiceVideojuego.RankingMayor();
  muestraVideojuegos(videojuegos);
}

/**
 * Ordena de mayor a menor el ranking
 */
async function rankingMayor(){
  videojuegos = await ServiceVideojuego.RankingMayor();
  muestraVideojuegos(videojuegos);
}

/**
 * Ordena de menor a mayor el ranking
 */
async function rankingMenor(){
  videojuegos = await ServiceVideojuego.RankingMenor();
  muestraVideojuegos(videojuegos);
}

rankingMayor();
rankingMenor();
init();
