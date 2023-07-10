let cuentas = [
    { nombre: "Mali", saldo: 200, password: "6545"}, // 0
    { nombre: "Gera", saldo: 290, password: "ee89"}, // 1
    { nombre: "Maui", saldo: 67, password: "91pt" } // 2
];

document.querySelector("#persona").addEventListener("change",leerPersona)

// cuentas[1] <- Gera

function leerPersona(){
    let indice = parseInt(document.querySelector("#persona").value); //Variable para almacenar el número de la posición
    //console.log(cuentas[indice]);
    let nombre = cuentas[indice].nombre;
    let saldo = cuentas[indice].saldo;

    document.getElementById("saludo").innerHTML = "Hola " + nombre;
    document.getElementById("nuevoSaldo").innerHTML = "Saldo Actual: " + saldo;
    document.getElementById("meter-password").style.display = "block";

    document.getElementById("Consultar-saldo").style.display = "none";
    document.getElementById("Ingresar-Monto").style.display = "none";
    document.getElementById("Retirar-Monto").style.display = "none";

    document.getElementById("Entrar").addEventListener("click",Login)  
    document.getElementById("Ingresar").addEventListener("click",ingresarDinero)
    document.getElementById("Retirar").addEventListener("click",retirarDinero) 
    //document.getElementById("Consultar-saldo").addEventListener("click",consultaSaldo)
      
}

 function Login(){
    let indice = parseInt(document.querySelector("#persona").value);
    let password = cuentas[indice].password;
    let contraseña = document.getElementById("pass").value;
 
    if(contraseña == password)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    {
        document.getElementById("Consultar-saldo").style.display = "block";
        document.getElementById("Ingresar-Monto").style.display = "block";
        document.getElementById("Retirar-Monto").style.display = "block";


    }
    else 
    { 
        alert("Contraseña incorrecta");
        
    }
    document.getElementById("meter-password").style.display = "none";
 }
 
 /*function consultaSaldo(){

    document.getElementById("nuevoSaldo").innerHTML = "Saldo Actual: " + SaldoActual;
 }*/

 function ingresarDinero(){
    let indice = parseInt(document.querySelector("#persona").value);
    let saldo = cuentas[indice].saldo;
    let monto = parseInt(prompt("¿Cuánto dinero desea depositar?"));

 
    if (saldo + monto > 990) {
        alert("Su ingreso excede los $990");
      }
      else
      {
        saldo = saldo + monto;
        //alert("su nuevo saldo es " +SaldoActual);
        document.getElementById("nuevoSaldo").innerHTML = "Saldo Actual: " + saldo;
        
      }
 }

 function retirarDinero(){
    let indice = parseInt(document.querySelector("#persona").value);
    let saldo = cuentas[indice].saldo;
    let monto = parseInt(prompt("¿Cuánto dinero desea retirar?"));

    if (saldo < monto ) 
      {
        alert("No tiene suficiente dinero en la cuenta");
      }
      if (saldo - monto < 10)
      {
        alert("La cuenta no puede quedar con menos de $10");
      }
      else
      {
        saldo = saldo - monto;
        //alert("su nuevo saldo es " +saldo);
        document.getElementById("nuevoSaldo").innerHTML = "Saldo Actual: " + saldo;
      }
 }


/*function irAotraPagina(){
    window.location.href = "exito.html"
}

// leerPersona();
*/
