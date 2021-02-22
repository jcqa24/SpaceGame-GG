const chai = require('chai'); 
const assert = chai.assert;

const lg = require('../src/controllers/ControllerPago');
 


describe('Pruebas unitarias para apartados',function() {
    it("Prueba unitaria de reserva de apartados", function(){
        result = lg.pagar("Jaime","Alvarez","1","1","1999.99");
        assert.equal(result,true);
    });
    it("Prueba unitaria incorrecta de reserva de apartados", function(){
        result = lg.pagar("Jaime","Alvarez","1","101","201,998.99");
        assert.equal(result,false);
    });
})