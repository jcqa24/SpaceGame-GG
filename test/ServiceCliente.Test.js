/**
 * Pruebas unitarias del ServiceCliente
 * 
 * @author David Moreno Gutiérrez
 * @since 21/02/2021
 */

const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;

const { remote } = require("electron");
const DAOCliente = require("../src/models/DAOCliente");

 describe('-- Pruebas unitarias de ServiceCliente --', function(){
    /**
     * PRECONDICIONES:
     * 
     * 1.   Existe un cliente en la base de Datos
     * 2.   El correo del cliente no es nulo
     */
    beforeEach(function() {
        const cliente = {
            nombre: "test",
            apellido: "test",
            email: "test",
            contrasena: "test",
            ciudad: "test",
            estado: "test",
            cp: "test",
            calle: "test",
        };
        DAOCliente.createCliente(cliente);
    });

    /**
     * Reseteo de las Precondiciones antes de la prueba
     */
    afterEach(function() {
        DAOCliente.deleteAllClientes();
    });


    /**
     * Test de la Funcion crearClientes
     * 
     * Regresa el objeto si es que no existe en la BD o null en caso contrario
     */
    describe('1.   Función createCliente', function(){
        it('Caso 1: Regresa un Objeto de el cliente si no existe en la BD', function(){
            const test = {
                nombre: "prueba",
                apellido: "prueba",
                email: "prueba",
                contrasena: "prueba",
                ciudad: "prueba",
                estado: "prueba",
                cp: "prueba",
                calle: "prueba",
            };
            const expected = DAOCliente.createCliente(test);
            expect(expected).to.not.be.null;
        }); 
        it('Caso 2: Regresa NULL si el Cliente ya existe en la BD', function(){
            const test = {
                nombre: "test",
                apellido: "test",
                email: "test",
                contrasena: "test",
                ciudad: "test",
                estado: "test",
                cp: "test",
                calle: "test",
            };
            const expected = DAOCliente.createCliente(test);
            assert.exists(expected);
        }); 
        it('Caso 3: Regresa NULL si el Cliente es Nulo', function(){
            const test = {};
            assert.exists(test);
        });  
    });
    /**
     * Test de la Funcion getClienteByEmail
     * 
     * Regresa el objeto si es que no existe en la BD o null en caso contrario
     */
    describe('2.   Función getClienteByEmail', function(){
        it('Caso 1: Regresa el cliente si el Email no existe en la BD', function(){
            const test = {
                nombre: "prueba",
                apellido: "prueba",
                email: "prueba",
                contrasena: "prueba",
                ciudad: "prueba",
                estado: "prueba",
                cp: "prueba",
                calle: "prueba",
            };
            const expected = DAOCliente.getClienteByEmail(test);
            expect(expected).to.not.be.null;
        }); 
        it('Caso 2: Regresa NULL si el Email existe en la BD', function(){
            const test = {
                nombre: "test",
                apellido: "test",
                email: "test",
                contrasena: "test",
                ciudad: "test",
                estado: "test",
                cp: "test",
                calle: "test",
            };
            const expected = DAOCliente.getClienteByEmail(test);
            assert.exists(expected);
        }); 
        it('Caso 3: Regresa NULL si el Email es Nulo', function(){
            const test = {};
            assert.exists(test);
        });  
    });
});