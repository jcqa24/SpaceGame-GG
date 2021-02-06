/**
 * Controlador Videojuego
 * 
 * Se encarga de manipular las funcionalidades de la ventana "Reporte de Ventas"
 */
const ServiceEstrenos = require("../services/ServiceEstrenos");

const idEstreno = sessionStorage.getItem("idEstreno");
const nombreEstreno = document.querySelector("#nombreEstreno");
const consola = document.querySelector("#consola");
const imagen = document.querySelector("#imagen");
const fechaEstreno = document.querySelector("#fechaEstreno");
const descripcion = document.querySelector("#descripcion");
const genero = document.querySelector("#genero");
const cantidad = document.querySelector("#cantidad");
const costo = document.querySelector("#costo");


/**
 * Renderiza los renglones de la tabla para mostrarlo con los datos obtenidos de
 * las capas superiores y mostrarlos en la ventana "Reporte de Ventas"
 * 
 * @param {estreno} e
 */
function renderEstreno(e) {
  nombreEstreno.innerHTML = `${e.nombreEstreno}`;
  consola.innerHTML = `${e.consola}`;
  imagen.innerHTML = `<img class="estreno-img" src="${e.imagen}">`;
  fechaEstreno.innerHTML = `${e.fechaEstreno}`;
  descripcion.innerHTML = `${e.descripcion}`;
  genero.innerHTML = `${e.genero}`;
  cantidad.innerHTML = `${e.cantidad}`;
  costo.innerHTML = `${e.costo}`;
}

function reservar() {
    window.location.href = "ViewPago.html";
  }

/**
 * Inicializa la ventana con los videojuegos obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  estreno = await ServiceEstrenos.getEstrenoById(idEstreno)
  renderEstreno(estreno);
}

init();
