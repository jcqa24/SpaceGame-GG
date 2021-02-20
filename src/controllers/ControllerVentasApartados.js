/**
 * Controlador Ventas y Apartados
 * Se encarga de manipular las funcionalidades de la ventana "Ventas y Apartados"
 * @author Yehosuah Eli Mendoza Mendoza
 * 
 */

const ServiceVentaApartado = require("../services/ServiceVentaApartado");
const ventasTable = document.querySelector("#ventasTable");
const apartadosTable = document.querySelector("#apartadosTable");

/**
 * Renderiza los renglones de la tabla para mostrarlo con los datos obtenidos de
 * las capas superiores y mostrarlos en la ventana "Ventas y Apartados"
 * 
 * @param {ventas} tasks 
 */
function renderVentas(tasks) {
  tasks.forEach((t) => {
    ventasTable.innerHTML += `
      <tr class="table-danger">
        <th scope="row">${t.idventa}</th>
        <td>${t.Nom_Compra}</td>
        <td>${t.Fecha}</td>
        <td>${t.Costo_Total}</td>
      </tr>
      `;
      });
}


/**
 * Renderiza los renglones de la tabla para mostrarlo con los datos obtenidos de
 * las capas superiores y mostrarlos en la ventana "Ventas y Apartados"
 * 
 * @param {apartados} tasks 
 */
function renderApartados(tasks) {
  tasks.forEach((t) => {
    apartadosTable.innerHTML += `
      <tr class="table-danger">
        <th scope="row">${t.idapart}</th>
        <td>${t.nombreCliente}</td>
        <td>${t.videojuego}</td>
        <td>${t.cantidad}</td>
        <td>${t.pago}</td>
      </tr>
      `;
      });
}

/**
 * Inicializa la ventana con las ventas y los apartados obtenidos de la base de datos
 * A través de las capas superiores
 */
async function init() {
  ventas = await ServiceVentaApartado.getVentas();
  renderVentas(ventas);
  apartados = await ServiceVentaApartado.getApartados();
  renderApartados(apartados);
}


init();
