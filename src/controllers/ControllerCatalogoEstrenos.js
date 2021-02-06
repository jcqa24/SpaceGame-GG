/**
 * Controlador Videojuego
 * 
 * Se encarga de manipular las funcionalidades de la ventana "Reporte de Ventas"
 */
const ServiceEstrenos = require("../services/ServiceEstrenos");
const productos = document.querySelector("#productos");

/**
 * Renderiza los renglones de la tabla para mostrarlo con los datos obtenidos de
 * las capas superiores y mostrarlos en la ventana "Reporte de Ventas"
 * 
 * @param {estrenos} tasks 
 */
function renderEstrenos(estrenos) {
  productos.innerHTML = "";
  estrenos.forEach((e) => {
    if (ServiceEstrenos.isDisponible(e)) {
      productos.innerHTML += `
      <div class="producto">
        <img class="img-fluid" src="${e.imagen}" alt="">
        <button class="btn btn-success" onclick="verMas(${e.idEstreno})">
            ${e.cantidad} DISPONIBLES
        </button>
      </div>
      `;
    }
    else {
      productos.innerHTML += `
      <div class="producto">
        <img class="img-fluid" src="${e.imagen}" alt="">
        <button class="btn btn-danger" disabled aria-label="Close"">
            VENTAS AGOTADAS
        </button>
      </div>
      `;
    }
  });
}

function verMas(idEstreno) {
  window.location.href = "ViewReserva.html";
  sessionStorage.setItem("idEstreno", idEstreno);
}

/**
 * Inicializa la ventana con los videojuegos obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  estrenos = await ServiceEstrenos.getAllEstrenos();
  renderEstrenos(estrenos);
}

init();
