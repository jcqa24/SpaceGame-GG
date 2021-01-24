/**
 * Archivo principal
 * 
 * Creación y redireccionamiento de las ventanas de la APP
 */
const { BrowserWindow, Menu } = require("electron");
let window;

  /**
   * Crea la ventana Index
   */
  function index() {
    window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
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
      },
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
      },
    });

    window.setMenu(null);
    window.loadFile("src/views/ViewReporteVentas.html");
  }

  const templateMenu = [
    {
      label: 'Control',
      submenu: [
        {
          label: 'Iniciar Sesión',
          click(){
              logIn();
          }
        },
        {
          label: 'Reporte de Ventas',
          click(){
              reporteVentas();
          }
        }
      ]
    }
  ];

  // Exportacion de modulos 
  module.exports = {
    index,
    logIn,
    reporteVentas
  };
