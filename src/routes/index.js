/**
 * Ruta principal de la APP
 */
const { reporteVentas, index } = require("../main");
const { app } = require("electron");

require('./database');
require('electron-reload')(__dirname);

app.allowRendererProcessReuse = true;
app.whenReady().then(index);
