/**
 * Controlador Videojuego
 * 
 * Se encarga de manipular las funcionalidades de la ventana "Reporte de Ventas"
 */
const ServiceEstrenos = require("../services/ServiceEstrenos");
const ServiceApartado = require("../services/ServiceApartado");

const idEstreno = sessionStorage.getItem("idEstreno");
const imagen = document.querySelector("#imagen");
const nombreEstreno = document.querySelector("#nombreEstreno");
const costo = document.querySelector("#costo");
const Cantidad = document.querySelector('#cantidad');

const pagar = document.querySelector("#pagar");
const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');


let editingStatus = false;
let editProductId;
/**
 * Renderiza los renglones de la tabla para mostrarlo con los datos obtenidos de
 * las capas superiores y mostrarlos en la ventana "Reporte de Ventas"
 * 
 * @param {estreno} e
 */
function renderEstreno(e) {
 
  imagen.innerHTML = `<img src="${e.imagen}" class="img-fluid" alt="">`;
  nombreEstreno.innerHTML = `<label class="form-label">Título del Videojuego</label>
  <input id="inputVideojuego" type="text" class="form-control" aria-describedby="nombreEstreno" readonly value="${e.nombreEstreno}">`;
  costo.innerHTML = `<label class="form-label">Total a Pagar</label> 
  <div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input id="inputCosto" type="text" class="form-control" aria-describedby="costo" readonly value="${e.costo}">
  <span class="input-group-text">MXN</span>
</div>
  `;
  cantidad.innerHTML = `<label class="form-label">Cantidad</label>
  <input id="inputCantidad" type="number" class="form-control" aria-describedby="cantidad" required value="1" step="1" min="1" max="${e.cantidad}">`;
  
  const inputCosto = document.querySelector('#inputCosto');
  const inputVideojuego = document.querySelector('#inputVideojuego');
  const inputCantidad = document.querySelector('#inputCantidad');

  inputCantidad.addEventListener('change', (event) => {
    cant = `${event.target.value}`;
    inputCosto.value = `${e.costo}` * cant;
  });

}

pagar.addEventListener("submit", async (e) => {
  respuesta = confirm("¿Estás seguro de realizar la compra?");
  try {
    if (respuesta) {
      e.preventDefault();
      const apartado = {
        nombreCliente: inputNombre.value,
        apellidoCliente: inputApellido.value,
        videojuego: inputVideojuego.value,
        cantidad: inputCantidad.value,
        pago: inputCosto.value,
      };

      const savedApartado = await ServiceApartado.createApartado(apartado);
      //console.log(savedApartado);
      await ServiceEstrenos.updateDisponibles(idEstreno, inputCantidad.value);
      window.location.replace("ViewPagoExitoso.html");
    } 
  } catch (error) {
    alert(error);
    window.location.replace("ViewPagoFallido.html");
  }
});

/**
 * Inicializa la ventana con los videojuegos obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  estreno = await ServiceEstrenos.getEstrenoById(idEstreno);
  renderEstreno(estreno);
}

init();
