/**
 * Controlador Registrarse
 * 
 * Se encarga de manipular las funcionalidades de la vista de "ViewRegistrarse", además de 
 * solicitarinformación del estreno en la base de datos, almacena informacion de la
 * reserva.
 * 
 * @author David Moreno Gutiérrez
 * @since 21/02/2021
 */
const ServiceCliente = require("../services/ServiceCliente");

const registrar = document.querySelector("#registrar");
const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputEmail = document.querySelector('#email');
const inputContrasena = document.querySelector('#contrasena');
const inputCiudad = document.querySelector('#ciudad');
const inputEstado = document.querySelector('#estado');
const inputCp = document.querySelector('#cp');
const inputCalle = document.querySelector('#calle');

/**
 * Funcion que se encarga de escuchar el evento del envio del formulario "pagar",
 * procesa toda la información del formulario y la envía a la capa superior para
 * crear un apartado del estreno, si la transacción es exitosa le muestra la vista
 * "ViewPagoExitoso" en caso contrario muestra la vista "ViewPagofallido"
 * Es aplica una regla de negocio:
 * Si se realiza la transaccion se actualiza la cantidad de disponibles
 */
registrar.addEventListener("submit", async (e) => {
  respuesta = confirm("¿Estás seguro de completar registro?");
  try {
    if (respuesta) {
      e.preventDefault();
      const cliente = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
        email: inputEmail.value,
        contrasena: inputContrasena.value,
        ciudad: inputCiudad.value,
        estado: inputEstado.value,
        cp: inputCp.value,
        calle: inputCalle.value,
      };
      const savedCliente = await ServiceCliente.createCliente(cliente);
      muestraRegistroExitoso();
    } 
  } catch (error) {
    alert(error);
  }
});

/**
 * Funcion que se encarga de iniciar la vista Registro Exitoso
 */
function muestraRegistroExitoso() {
  window.location.replace("ViewRegistroExitoso.html");
}