const chai = require('chai'); 
const assert = chai.assert;

const lg = require('../src/controllers/Login');
 


describe('Pruebas unitarias para la funcion de login',function() {
    it("Prueba unitaria de loggin para valores correctos", function(){
        result = lg.Login("admin","1234");
        assert.equal(result,true);
    });
    it("Prueba unitaria de loggin para usuario incorrecto", function(){
        result = lg.Login("usuario incorrecto","1234");
        assert.equal(result,false);
    });
    it("Prueba unitaria de loggin para contraseña incorrecta", function(){
        result = lg.Login("admin","123456");
        assert.equal(result,false);
    });
    it("Prueba unitaria de loggin para ambos datos incorrectos", function(){
        result = lg.Login("admin123","123456");
        assert.equal(result,false);
    })
})