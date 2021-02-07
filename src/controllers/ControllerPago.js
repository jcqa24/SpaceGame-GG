/**
 * Controlador Pago
 * 
 * Se encarga de manipular las funcionalidades de la vista de "ViewPago", además de 
 * solicitarinformación del estreno en la base de datos, almacena informacion de la
 * reserva.
 */
const ServiceEstrenos = require("../services/ServiceEstreno");
const ServiceApartado = require("../services/ServiceApartado");

/**
 * Constante idEstreno, obtiene el id del estreno seleccionado previamente
 */
const idEstreno = sessionStorage.getItem("idEstreno");
/**
 * Constante imagen, hace referencia a la etiqueta donde se inyectará la 
 * imagen del estreno
 */
const imagen = document.querySelector("#imagen");
/**
 * Constante nombreEstreno, hace referencia a la etiqueta donde se inyectará 
 * el título del estreno
 */
const nombreEstreno = document.querySelector("#nombreEstreno");
/**
 * Constante costo,hace referencia a la etiqueta donde se inyectará el 
 * costo del estreno
 */
const costo = document.querySelector("#costo");
/**
 * Constante idEstreno,hace referencia a la etiqueta donde se inyectará la 
 * cantidad del estreno
 */
const cantidad = document.querySelector('#cantidad');
/**
 * Constante idEstreno,hace referencia a la etiqueta donde se inyectará la 
 * informacion del estreno
 */
const pagar = document.querySelector("#pagar");
const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');

/**
 * Función que renderiza los datos del Estreno seleccionado en la vista previa
 * para mostrarlo como el producto a comprar
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

  // Este Listener se encarga de escuchar un cambio en la entrada "cantidad" y realiza la operacion para plasmarla en el campo "costo"
  inputCantidad.addEventListener('change', (event) => {
    cant = `${event.target.value}`;
    inputCosto.value = `${e.costo}` * cant;
  });

}
/**
 * Funcion que se encarga de escuchar el evento del envio del formulario "pagar",
 * procesa toda la información del formulario y la envía a la capa superior para
 * crear un apartado del estreno, si la transacción es exitosa le muestra la vista
 * "ViewPagoExitoso" en caso contrario muestra la vista "ViewPagofallido"
 * Es aplica una regla de negocio:
 * Si se realiza la transaccion se actualiza la cantidad de disponibles
 */
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
      await ServiceEstrenos.updateDisponibles(idEstreno, inputCantidad.value);
      window.location.replace("ViewPagoExitoso.html");
    } 
  } catch (error) {
    alert(error);
    window.location.replace("ViewPagoFallido.html");
  }
});

/**
 * Inicializa la ventana con los datos del Estreno obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  estreno = await ServiceEstrenos.getEstrenoById(idEstreno);
  renderEstreno(estreno);
}

init();
