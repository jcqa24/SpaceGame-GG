const { remote } = require('electron')
const main = remote.require('../main')

const productsList = document.getElementById("ProductosLista");

const productForm = document.getElementById("productForm");
const productNombre_Video = document.getElementById("Nombre_Video");
const productStock = document.getElementById("Stock");
const productConsola = document.getElementById("Consola");
const productGenero = document.getElementById("Genero");
const productAnio = document.getElementById("Anio");
const productCosto = document.getElementById("Costo");
const productDescripcion = document.getElementById("Descripcion");

let products = [];
 
let editingStatus = false;
let editProductId='';

const deleteProduct = async (id) => {
  const response = confirm("Quiere Eliminar este Producto");
  if (response) {
    await main.deleteProduct(id);
    await getProduct();
  }
  return;
}; 

const editProduct = async (id) => {
  const product = await main.getProductById(id);
  
  productNombre_Video.value = product.Nombre_Video;
  productStock.value = product.Stock;
  productConsola.value = product.Consola;
  productGenero.value = product.Genero;
  productAnio.value =  product.Anio;
  productCosto.value = product.Costo;
  productDescripcion.value = product.Descripcion;

  editingStatus = true;
  editProductId = id;
}; 

 productForm.addEventListener("submit", async (e) => { 
	
	e.preventDefault();
	 
  try {
    e.preventDefault();

    const newProduct = {
      Nombre_Video: productNombre_Video.value,
      Descripcion:  productDescripcion.value,
      Stock: productStock.value,
      Cantidad_Vend: 0,
      Genero: productGenero.value,
      Costo: productCosto.value,
      Consola: productConsola.value,
      Anio: productAnio.value,
	  img: '',
	  infop: ''
    };
	 
	
    if (!editingStatus) {
      const savedProduct = await main.createProduct(newProduct)
      console.log(savedProduct);
    } else {
      const productUpdated = await main.updateProduct(editProductId, newProduct)
      console.log(productUpdated);

      // Reset
      editingStatus = false;
      editProductId = "";
    }

    productForm.reset();
    productNombre_Video.focus();
	getProduct();
  } catch (error) {
    console.log(error);
  }
})



function renderProducts(tasks) {
  productsList.innerHTML = "";
  tasks.forEach((t) => {
    productsList.innerHTML += `
      <div class="row">
        <div class="col-sm">${t.Nombre_Video}</div>
        <div class="col-sm">${t.Stock}</div>
        <div class="col-sm">${t.Costo}</div>
        <div class="col-sm">${t.Cantidad_Vend}</div>
        <div class="col-sm">
        <button class="btn btn-danger" onclick="deleteProduct('${t.idvideojuego}')">
          DELETE
        </button>
        <button class="btn btn-info" onclick="editProduct('${t.idvideojuego}')">
          EDIT 
        </div>
      </div>
    `;
  });
}


const getProduct = async () => {
  products = await main.getProducts();
  renderProducts(products);
};

async function init() {
   await getProduct();
 }

init(); 