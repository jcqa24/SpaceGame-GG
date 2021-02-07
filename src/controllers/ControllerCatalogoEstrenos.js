/**
 * Controlador del Catálogo de Estrenos
 * 
 * Se encarga de manipular las funcionalidades de la vista "Catálogo de Estrenos"
 * Ventana que se encarfa de mostrar los titulos de los estrenos disponibles
 */
const ServiceEstrenos = require("../services/ServiceEstreno");

/**
 * Constante productos,hace referencia a la caja donde son almacenados los productos
 */
const productos = document.querySelector("#productos");

/**
 * Función que hace el renderizado de cada uno de los títulos (imagen e información)
 * y los muestra en forma de caja flexible para exhibirlos.
 * 
 * Se aplica una regla de negocio:
 * Si hay copias existentes del producto muestra la cantidad disponible y el enlace para
 * hacer la venta, en caso contrario solo muestra el texto "Agotado" y deshabilita el botón
 * 
 * @param {estrenos} estrenos 
 */
function renderEstrenos(estrenos) {
  productos.innerHTML = "";
  estrenos.forEach((e) => {
    if (ServiceEstrenos.isDisponible(e)) {
      productos.innerHTML += `
      <div class="producto">
        <img class="img-fluid" src="${e.imagen}" alt="">
        <button class="btn btn-primary" onclick="verMas(${e.idEstreno})">
            ${e.cantidad} DISPONIBLES
        </button>
      </div>
      `;
    }
    else {
      productos.innerHTML += `
      <div class="producto">
        <img class="img-fluid" src="${e.imagen}" alt="">
        <button class="btn btn-primary" disabled aria-label="Close"">
            VENTAS AGOTADAS
        </button>
      </div>
      `;
    }
  });
}
/**
 * Redirecciona al usuario a la vista Estreno donde tendrá información completa de
 * este estreno y podrá realizar posteriormente su pago
 * @param {Estreno} idEstreno 
 */
function verMas(idEstreno) {
  window.location.href = "ViewEstreno.html";
  sessionStorage.setItem("idEstreno", idEstreno);
}

/**
 * Inicializa la ventana con los estrenos obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  estrenos = await ServiceEstrenos.getAllEstrenos();
  renderEstrenos(estrenos);
}

init();
