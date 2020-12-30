//conexcion a la base de datos 
// ======================================

var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null, 
    database : 'gg'
});


connection.connect(function(err) {
    if(err){
        console.log("Ya valio")
        console.log(err.code);
        console.log(err.fatal);
    }
});

function getConection(){
    return connection
}

module.exports = {getConection}

// =======================================


/**=====================================================

$query = "SELECT * FROM videojuego LIMIT 10";

connection.query($query, function(err, rows, fields) {
    if(err){
        console.log("An error ocurred performing the query.");
        console.log(err);
        return;
    }

    console.log("Query succesfully executed", rows);
});

===================================================
**/