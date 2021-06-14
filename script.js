const usuario = 'usuario';
let contrasenia = '123';
let saldo = 3000;




let ingresarUsuario = prompt('Ingrese su nombre de usuario');
let ingresarConstasenia = prompt('Ingrese su contraseña');

if (ingresarUsuario === usuario && ingresarConstasenia === contrasenia) {

   let key = parseInt(prompt('Ingrese una opción: Las opciones disponibles son: 1: verSaldo 2: retirarDinero 3:depositarDinero 4:cambiarClave 0:Salir de la cuenta'));

    switch (key) {
        case 1:
            alert('Su saldo actual es: ' + saldo);
            break;

        case 2:
            let dineroRetirar  = parseInt(prompt('¿Cuánto dinero desea retirar?'));
            if (dineroRetirar > saldo) {
                alert('No tiene sufiente dinero');
                
            }else{
                saldo = saldo - dineroRetirar ;
                alert('Su saldo actual es de ' + saldo);
            }
        
            break;
            
        case 3:
                let dineroDepositar = parseInt(prompt('Ingrese el monto del dinero a depositar'));
                if (dineroDepositar>=0 && dineroDepositar!== isNaN(dineroDepositar)){
                    alert(saldo+dineroDepositar);
                }else{
                    alert('El caracter ingresado NO es un valor correcto');
                }
               
            break;
        
        case 4:
                let nuevaConstrasenia = prompt('Ingrese su nueva constraseña');
                contrasenia = nuevaConstrasenia;
                alert('Su nueva contraseña es' + contrasenia);
            break;
        
        default :
            alert('Dato inválido, se ha interrumpido su proceso bancario');

            break;
    }
}