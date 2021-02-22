/**
*	Valida los datos del usuario
*	@param  {text}  usser  Nombre de usuario 
*   @param  {pass} pass Contraseña del usuario
*   @return {Boolean} True si son correctos los datos de usuario
*   @return {Boolean} False si son incorrectos los datos de usuario
*/

function Login(user,pass){
    if((user ==  "admin") && (pass == "1234")){
        return(true)
    }else{
        return(false)
    }
}

module.exports = {
    Login
}