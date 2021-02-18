/**
 * Archivo principal
 * 
 * Creación y redireccionamiento de las ventanas de la APP
 */
const { app, BrowserWindow, Menu, dialog, Notification } = require('electron');
const { getConnection } = require("./routes/database");
const url = require('url');
const path = require('path');


let window;
let AddOfferWindow;
let ProductoWindow;

  /**
   * Crea la ventana Index
   */
  function index() {
    window = new BrowserWindow({
      width: 1800,
      height: 720,
      webPreferences:{
        nodeIntegration: true,
        enableRemoteModule: true
    }
    });
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
    window.loadFile("src/views/index.html");
  }

 
/**
 * Crea la ventana logIn
 */
function logIn() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  window.setMenu(null);
  window.loadFile("src/views/logIn.html");
}

/**
 * Crea la ventana reporteVentas
 */
function reporteVentas() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  window.setMenu(null);
  window.loadFile("src/views/ViewReporteVentas.html");
}

function AddOfferView() {
  AddOfferWindow = new BrowserWindow({
    with: 800,
    height: 600,
    title: 'Agregar Oferta',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }

  });

  AddOfferWindow.setMenu(null);

  AddOfferWindow.loadURL(url.format({

    pathname: path.join(__dirname, 'views/AddOffer.html'),
    protocol: 'file',
    slashes: true
  }))
  AddOfferWindow.on('closed', () => {
    AddOfferWindow = null
  });


}


/*Crea introduce una nueva ofera a la base de datos
  Recibe como parametro un objeto con los datos necesarios
  para crear la oferta
*/
async function CreateOffer(NewOffer) {
  const conn = await getConnection();
  NewOffer.total = parseFloat(NewOffer.total);
  const result = await conn.query("INSERT INTO ofertas SET ?", NewOffer);

  const options = {
    type: 'info',
    buttons: ['Aceptar'],
    title: 'Oferta agregada',
    message: 'La Oferta se agrego correctamente',
  };

  dialog.showMessageBox(null, options, (response) => {
    console.log(response);

  });

}

/**
 * 
 * @param id  id del videojuego del cual necesitamos la informacion
 * @returns informacion del videojuego correspondiente al id
 */
async function SelectGame(id) {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM videojuego WHERE idvideojuego = ?", id);
  return result;
}


/**
 * Selecciona todos los videojugos disponibles
 * @returns lista de todos los videojuegos en la base de datos
 */


async function GetGames() {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM videojuego");
  return result;

}

//Agregar Producto 

function AgregarProducto() {
  ProductoWindow = new BrowserWindow({
    with: 350,
    height: 480,

    title: 'Agregar Producto',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  ProductoWindow.setMenu(null);

  ProductoWindow.loadURL(url.format({

    pathname: path.join(__dirname, 'views\ViewProductos.html'),
    protocol: 'file',
    slashes: true
  }))
  ProductoWindow.on('closed', () => {
    ProductoWindow = null
  });
}

function VentanaAlerta() {
  ProductoWindow = new BrowserWindow({
    with: 350,
    height: 480,

    title: 'Ventana de Alertas de Stock',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  ProductoWindow.setMenu(null);

  ProductoWindow.loadURL(url.format({

    pathname: path.join(__dirname, 'views/ViewAlertas'),
    protocol: 'file',
    slashes: true
  }))
  ProductoWindow.on('closed', () => {
    ProductoWindow = null
  });
}


// funcion para Agregar un Nuevo Producto
const createProduct = async (VideoJuego) => {
  try {
    const conn = await getConnection();
    VideoJuego.Costo = parseFloat(VideoJuego.Costo);
    const result = await conn.query("INSERT INTO videojuego SET ?", VideoJuego);
    VideoJuego.idvideojuego = result.insertId;

    // Notify the User
    new Notification({
      title: "Producto Nuevo desde Electron Mysql",
      body: "New Product Saved Successfully",
    }).show();

    // Return the created Product
    return VideoJuego;
  } catch (error) {
    console.log(error);
};
}

// funcion que va en un main
const getProducts = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM videojuego ORDER BY idvideojuego DESC");
  return results;
};

const deleteProduct = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("DELETE FROM videojuego WHERE idvideojuego = ?", id);
  return result;
};

const getProductById = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM videojuego WHERE idvideojuego = ?", id);
  return result[0];
};

const updateProduct = async (id, product) => {
  const conn = await getConnection();
  const result = await conn.query("UPDATE videojuego SET ? WHERE idvideojuego = ?", [
    product,
    id,
  ]);
  console.log(result)
};

const getProductsAlertStock = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM videojuego WHERE Stock = 0");
  return results;
};


const templateMenu = [
  {
    label: 'Control',
    submenu: [
      {
        label: 'Iniciar Sesión',
        click() {
          logIn();
        }
      },
      {
        label: 'Reporte de Ventas',
        click() {
          reporteVentas();
        }
      }, {
        label: 'Agregar ofertas',
        click() {
          AddOfferView();
        }
      }, {
        label: 'Agregar Producto',
        click() {
          AgregarProducto();
        }
      }, {
        label: 'Ventana de Alerta',
        click() {
          VentanaAlerta();
        }
      }
    ]
  }
];

// Exportacion de modulos 
module.exports = {
  index,
  logIn,
  reporteVentas,
  CreateOffer,
  GetGames,
  SelectGame,
  createProduct,
  getProducts,
  deleteProduct,
  getProductById,
  updateProduct,
  getProductsAlertStock
};