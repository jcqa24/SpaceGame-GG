/**
 * Controlador Estreno
 * 
 * Se encarga de manipular las funcionalidades de la vista "ViewEstreno" donde se muestra 
 * informacion completa del estreno seleccionado previamente
 */
const ServiceEstrenos = require("../services/ServiceEstreno");

/**
 * Constante idEstreno, obtiene el id del estreno seleccionado previamente
 */
const idEstreno = sessionStorage.getItem("idEstreno");
/**
 * Constante nombreEstreno, hace referencia a la etiqueta donde se inyectará el
 *  nombre del estreno
 */
const nombreEstreno = document.querySelector("#nombreEstreno");
/**
 * Constante consola, hace referencia a la etiqueta donde se inyectará la 
 * consola del estreno
 */
const consola = document.querySelector("#consola");
/**
 * Constante imagen, hace referencia a la etiqueta donde se inyectará la 
 * imagen del estreno
 */
const imagen = document.querySelector("#imagen");
/**
 * Constante fechaEstreno, hace referencia a la etiqueta donde se inyectará la 
 * fecha del estreno
 */
const fechaEstreno = document.querySelector("#fechaEstreno");
/**
 * Constante descripcion, hace referencia a la etiqueta donde se inyectará la 
 * descripcion del estreno
 */
const descripcion = document.querySelector("#descripcion");
/**
 * Constante genero, hace referencia a la etiqueta donde se inyectará el 
 * genero del estreno
 */
const genero = document.querySelector("#genero");
/**
 * Constante cantidad, hace referencia a la etiqueta donde se inyectará la 
 * cantidad del estreno
 */
const cantidad = document.querySelector("#cantidad");
/**
 * Constante costo, hace referencia a la etiqueta donde se inyectará el 
 * costo del estreno
 */
const costo = document.querySelector("#costo");

/**
 * Función que renderiza los datos del estreno seleccionado previamente, se hacen las
 * inyecciones de los datos del estreno
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

/**
 * Redirecciona al usuario a la vista "ViewPago" donde procederá a realizar
 * el pago del producto seleccionado
 */
function reservar() {
    window.location.href = "ViewPago.html";
  }

/**
 * Inicializa la ventana con los datos del estreno obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  estreno = await ServiceEstrenos.getEstrenoById(idEstreno)
  renderEstreno(estreno);
}

init();
