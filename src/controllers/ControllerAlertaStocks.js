const { remote } = require('electron');
const main = remote.require('./main');

const productsList = document.getElementById("TablaCuerpo");

const getProducts = async () => {
    products = await main.getProductsAlertStock();
    renderProductsAlertsStock(products);
  };

  function renderProductsAlertsStock(tasks) {
    productsList.innerHTML = "";
    tasks.forEach((t) => {
      productsList.innerHTML += `
        <tr>
        <th scope="col">${t.Nombre_Video}</th>
        <th scope="col">${t.Stock}</th>
        <th scope="col">${t.Costo}</th>
        <th scope="col">${t.Cantidad_Vend}</th>
        <tr >
      `;
    });
  }


  async function init() {
    await getProducts();
  }
  
  init();