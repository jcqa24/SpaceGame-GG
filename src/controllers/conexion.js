//conexcion a la base de datos 
// ======================================

var mysql = require('promise-mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : null, 
    database : 'gg'
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