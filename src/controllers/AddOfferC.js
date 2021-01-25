const pf = document.getElementById('addofferform')

const { remote, Main } = require('electron');

const m = remote.require('../main.js');



const addgames = document.getElementById('games');
const addapre = document.getElementById('pre');
const addodes = document.getElementById('des');
const addopdes = document.getElementById('pdes');


async function CalcularDescuento(){
    const precio = await  m.SelectGame(addgames.value);
    precio.forEach(e =>{
        addapre.value = e.Costo;
        addopdes.value = e.Costo - (e.Costo * addodes.value)/100;
    });
}


const GGames = async () => {
    const results = await m.GetGames();
    results.forEach(element => {
        const option = document.createElement('option');
        option.value = element.idvideojuego;
        option.text = element.Nombre_Video;
        addgames.appendChild(option);
    });
}

function Cancel(){
    pf.reset();
}

pf.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const NewOffer = {
        Idoferta: addgames.value,
        idvideojuego: addgames.value,
        descuento: addodes.value,
        total: addopdes.value
    };
   m.CreateOffer(NewOffer);
   pf.reset();
   
});

GGames();