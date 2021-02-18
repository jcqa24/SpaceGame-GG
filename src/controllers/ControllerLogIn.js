const { remote, Main } = require('electron');

const m = remote.require('../main.js');

const form = document.getElementById('loggin')

const usser = document.getElementById('usser');
const pass = document.getElementById('pass');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if((usser.value ==  "admin") && (pass.value == "1234")){
        
        m.login(true);
    }else{
        form.reset();
        m.login(false);
    }
});

