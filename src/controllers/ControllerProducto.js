const { remote } = require('electron');
const main = remote.require('./main');

const productsList = document.getElementById("ProductosLista");

const inputVideoJuego = document.getElementById("inputVideoJuego");
const inpuNumeroStock = document.getElementById("inpuNumeroStock");
const inputPlataforma = document.getElementById("inputPlataforma");
const inputGenero = document.getElementById("inputGenero");
const inputAnyo = document.getElementById("inputAnyo");
const inputPrecio = document.getElementById("inputPrecio");
const inputDescripcion = document.getElementById("inputDescripcion");

let products = [];
let editingStatus = false;
let editProductId;

const deleteProduct = async (id) => {
  const response = confirm("Quiere Eliminar el DATO");
  if (response) {
    await main.deleteProduct(id);
    await getProducts();
  }
  return;
};

const editProduct = async (id) => {
  const product = await main.getProductById(id);
  inputVideoJuego.value = product.Nombre_Video;
  inpuNumeroStock.value = product.Stock;
  inputPlataforma.value = product.Consola;
  inputGenero.value = product.Genero;
  inputAnyo.value =  product.Anio;
  inputPrecio.value = product.Costo;
  inputDescripcion.value = product.Descripcion;

  editingStatus = true;
  editProductId = id;
};

productForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const newVideoJuego = {
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
      const savedProduct = await main.createProduct(newVideoJuego);
      console.log(savedProduct);
    } else {
      const productUpdated = await main.updateProduct(editProductId, newVideoJuego);
      console.log(productUpdated);

      // Reset
      editingStatus = false;
      editProductId = "";
    }

    productForm.reset();
    inputVideoJuego.focus();
    getProducts();
  } catch (error) {
    console.log(error);
  }

});

function renderProducts(tasks) {
  productsList.innerHTML = "";
  tasks.forEach((t) => {
    productsList.innerHTML += `
      <div class="collapse navbar-collapse">
        <h4>${t.Nombre_Video}</h4>
        <h4>${t.Stock}</h4>
        <h4>${t.Costo}</h4>
        <h4>${t.Cantidad_Vend}</h4>
        <p>
        <button class="nav-item active" onclick="deleteProduct('${t.idvideojuego}')">
          DELETE
        </button>
        <button class="nav-item active" onclick="editProduct('${t.idvideojuego}')">
          EDIT 
        </button>
        </p>
      </div>
    `;
  });
}

const getProducts = async () => {
  products = await main.getProducts();
  renderProducts(products);
};

async function init() {
  await getProducts();
}

init();