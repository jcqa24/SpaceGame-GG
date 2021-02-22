const rdgame = document.getElementById('cardgame')

const { remote, Main } = require('electron');

const m = remote.require('../main.js');

const GGames = async () => {
    let i = 0;
    const results = await m.GetGames();
    rdgame.innerHTML = "";
    nr = results.length;

    while (i < nr) {
        rdgame.innerHTML += `
        <div class="row">
            <div class=col>
                <div class="card card-body">
                    <center>
                        <img src="${results[i].img}" width="140p" height="190p" >
                        <h4>${results[i].Nombre_Video}</h4>
                        <a class="nav-link" href="${results[i].infop}">
                            <button type="button" class="btn btn-primary btn-sm">Más información</button>
                        </a>
                    </center>
                </div>
            </div>
            
            <div class=col>
            <div class="card card-body">
                <center>
                    <img src="${results[i+1].img}" width="140p" height="190p" >
                    <h4>${results[i+1].Nombre_Video}</h4>
                    <a class="nav-link" href="${results[i+1].infop}">
                        <button type="button" class="btn btn-primary btn-sm">Más información</button>
                    </a>
                </center>
            </div>
        </div>
        
        <div class=col>
        <div class="card card-body">
            <center>
                <img src="${results[i+2].img}" width="140p" height="190p" >
                <h4>${results[i+2].Nombre_Video}</h4>
                <a class="nav-link" href="${results[i+2].infop}">
                    <button type="button" class="btn btn-primary btn-sm">Más información</button>
                </a>
            </center>
        </div>
    </div>

            
        </div>
        `;
        i+=3;
    }


}




GGames();