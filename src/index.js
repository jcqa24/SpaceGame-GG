const { app, BrowserWindow, Menu }= require('electron');

const url = require ('url');
const path = require ('path');

// Conexion ala base de datos
//============================

//importamos el archivo de conexion 
const con = require('./model/conexion.js')

//realizamos la conexcion con la funcion getconection del archivo anterior
connection = con.getConection();


// sql de prueba que selecciona hasta 10 elementos de la tabla videojuegos 
$query = "SELECT * FROM videojuego LIMIT 10";

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        console.log(err);
        return;
    }

    console.log("Query succesfully executed", rows);
});


//Cerramos la conexion 

connection.end();

//Codigo para actualizar la pantalla principal sin cerrarla
// solo durate la produccion se ejecuta este modulo 

if(process.env.NODE_ENV !== 'production'){

    require ('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })

}



let mainWindow
let logInWindow

app.on('ready', () => {
    
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({

        pathname: path.join (__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true

    }))

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);


    mainWindow.on('closed', () => {
        app.quit();
    });

    //DEv Tols
    //mainWindow.webContents.openDevTools()

});

function logIn (){
    logInWindow = new BrowserWindow({
        with: 350,
        height: 480,

        title: 'Iniciar sesión'
    });

    logInWindow.setMenu(null);

    logInWindow.loadURL(url.format({

        pathname: path.join (__dirname, 'views/logIn.html'),
        protocol: 'file',
        slashes: true
    }))
    logInWindow.on('closed', () => {
        logInWindow = null
    });
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
            }
        ]
    }
];

