/**
*	Funcion que escucha el formulaerio del login, cuando se presiona el boton de enviar
*   se reciven los datos ingresados en el formulario y se validan si son correctos o no
*	@author	Juan Carlos Quiroz Aguilar
*   @since  17/02/2021
*/



const { remote } = require('electron');

const m = remote.require('../main.js');
const  lg = require('../controllers/Login')
const form = document.getElementById('loggin')

const usser = document.getElementById('usser');
const pass = document.getElementById('pass');



form.addEventListener("submit", (e) => {
    e.preventDefault();
    u = usser.value;
    p = pass.value;
    form.reset()
    console.log(u,p);
    result = lg.Login(u,p);
    m.login(result);
    
   
});


