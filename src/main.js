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
    webPreferences: {
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

/**
 * Crea la ventana AgregarProducto
 */
function AgregarProducto() {
  ProductoWindow = new BrowserWindow({
    with: 1300,
    height: 780,

    title: 'Agregar Producto',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });

  ProductoWindow.setMenu(null);

  ProductoWindow.loadURL(url.format({

    pathname: path.join(__dirname, 'views/ViewProductos.html'),
    protocol: 'file',
    slashes: true
  }))
  ProductoWindow.on('closed', () => {
    ProductoWindow = null
  });
}

/**
 * Crea la ventana Alerta Stock
 */
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

    pathname: path.join(__dirname, 'views/ViewAlertas.html'),
    protocol: 'file',
    slashes: true
  }))
  ProductoWindow.on('closed', () => {
    ProductoWindow = null
  });
}


/**
 * Agrega un video Juego a la Base de Datos
 * @returns  videojuegos Ingresado
 */

const createProduct = async (VideoJuego) => {
  try {
    const conn = await getConnection();
    VideoJuego.Costo = parseFloat(VideoJuego.Costo);
    const result = await conn.query("INSERT INTO videojuego SET ?", VideoJuego);
    console.log(reult)
    VideoJuego.idvideojuego = result.insertId;

    //Notify the User
    new Notification({
      title: "Agregar o Editar Producto",
      body: "El Producto fue Guardado Satisfactoriamente",
    }).show();

    // Return the created Product
    return VideoJuego;
  } catch (error) {
    console.log(error);
  };
}

/**
 * Selecciona todos los videojugos disponibles de Forma decendiente 
 * @returns lista de todos los videojuegos en la base de datos
 */
const getProducts = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM videojuego ORDER BY idvideojuego DESC");
  return results;
};

/**
 * Elimina un videojugos de la base de Datos
 * @returns videojuegos Eliminado
 */
const deleteProduct = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("DELETE FROM videojuego WHERE idvideojuego = ?", id);
  return result;
};

/**
 * Busaca un videojugos de la base de Datos por id 
 * @returns videojuegos encontrado
 */
const getProductById = async (id) => {
  const conn = await getConnection();
  const result = await conn.query("SELECT * FROM videojuego WHERE idvideojuego = ?", id);
  return result[0];
};

/**
 * Actuliza un videojugos de la base de Datos por id 
 * @returns 
 */
const updateProduct = async (id, product) => {
  const conn = await getConnection();
  const result = await conn.query("UPDATE videojuego SET ? WHERE idvideojuego = ?", [
    product,
    id,
  ]);
  console.log(result)
};

/**
 * Selecciona todos los videojugos disponibles con el Stock = 0
 * @returns lista de todos los videojuegos en la base de datos
 */
const getProductsAlertStock = async () => {
  const conn = await getConnection();
  const results = await conn.query("SELECT * FROM videojuego WHERE Stock = 0");
  console.log(results)
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