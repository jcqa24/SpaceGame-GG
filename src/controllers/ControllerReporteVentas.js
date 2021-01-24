/**
 * Controlador Videojuego
 * 
 * Se encarga de manipular las funcionalidades de la ventana "Reporte de Ventas"
 */
const ServiceVideojuego = require("../services/ServiceVideojuego");
const productTable = document.querySelector("#productTable");

/**
 * Renderiza los renglones de la tabla para mostrarlo con los datos obtenidos de
 * las capas superiores y mostrarlos en la ventana "Reporte de Ventas"
 * 
 * @param {videojuegos} tasks 
 */
function renderVideojuegos(tasks) {
  productTable.innerHTML = "";
  tasks.forEach((t) => {
    if (ServiceVideojuego.isLowSales(t)) {
      productTable.innerHTML += `
      <tr class="table-danger">
        <th scope="row">${t.idvideojuego}</th>
        <td>${t.Nombre_Video}</td>
        <td>${t.Cantidad_Vend}</td>
        <td>${t.Stock}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteVideojuego('${t.idvideojuego}')">
          DELETE
        </button>
        </td>
      </tr>
      `;
    } else {
      productTable.innerHTML += `
      <tr>
        <th scope="row">${t.idvideojuego}</th>
        <td>${t.Nombre_Video}</td>
        <td>${t.Cantidad_Vend}</td>
        <td>${t.Stock}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteVideojuego('${t.idvideojuego}')">
          DELETE
        </button>
        </td>
      </tr>
      `;
    }
  });
}
/**
 * Inicializa la ventana con los videojuegos obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  videojuegos = await ServiceVideojuego.getAllVideojuegos();
  renderVideojuegos(videojuegos);
}

/**
 * Funcion que se activa al escuchar que se presione el botón "Eliminar"
 * Pregunta si esta seguro de eliminar el videojuego y llama al metodo eliminar
 * de la capa superior
 */
function deleteVideojuego(videojuego){
  response = confirm("¿Estás seguro de eliminar el videojuego con ID: " + videojuego + " de la base de datos?")
  if (response){
    ServiceVideojuego.deleteVideojuego(videojuego);
    init();
  }
}

init();
