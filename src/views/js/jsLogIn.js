function validarInicioS(){
    var usuario = document.getElementById('exampleInputUsuario').value;
    var psw = document.getElementById('exampleInputPassword').value;

    if (usuario == 'Hector' && psw == '123'){

        alert('Entrada');
    }
    else{
        alert ('Mal');
    }
}