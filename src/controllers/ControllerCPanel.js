const { remote, Main } = require('electron');

const m = remote.require('../main.js');

function closeWindow(){
    m.closeCP();
}