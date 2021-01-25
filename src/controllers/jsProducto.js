const { remote, Main } = require('electron');
const main  = remote.require("./main.js");


const productForm = document.querySelector("#AgregarProductoForm");
const inputVideoJuego = document.querySelector("#inputVideoJuego");
const inpuNumeroStock = document.querySelector("#inpuNumeroStock");
const inputPlataforma = document.querySelector("#inputPlataforma");
const inputGenero = document.querySelector("#inputGenero");
const inputAnyo = document.querySelector("#inputAnyo");
const inputPrecio = document.querySelector("#inputPrecio");
const inputDescripcion = document.querySelector("#inputDescripcion");

productForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const VideoJuego = {
      Nombre_Video: inputVideoJuego.value,
      Descripcion: inputDescripcion.value,
      Stock: inpuNumeroStock.value,
	  Cantidad_Vend: 0,
	  Genero: inputGenero.value,
	  Costo: inputPrecio.value,
	  Consola: inputPlataforma.value,
	  Anio: inputAnyo.value,
    };

    if (!editingStatus) {
      //const savedProduct = await main.createProduct(VideoJuego);
	  const savedProduct = await main.createProduct(VideoJuego);
      console.log(savedProduct);
    } else {
	   //Codigo para actualizar producto PROXIMAMENTE
      // const productUpdated = await main.updateProduct(editProductId, VideoJuego);
	  // const productUpdated = await index.updateProduct(editProductId, VideoJuego);
      // console.log(productUpdated);

      Reset
      // editingStatus = false;
      // editProductId = "";
    }

    productForm.reset();
    productName.focus();
    getProducts();
  } catch (error) {
    console.log(error);
  }
});

const getProducts = async () => {
  //documentar si dependiendo de donde se llame la funcion
  //products = await main.getProducts();
  products = await index.getProducts();
  //renderProducts(products);
};

async function init() {
  getProducts();
}

init();