//Tipos de datos 
//Alfanumericos
//let nombrePasajero = "Pedro Silva";
//nombrePasajero = "Ramon Silva";
//Numerico
let valorBoleto = 1000;
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 100;

//Booleano
let boletoActivo = true;

//Operaciones Arimeticas
//Suma
//let totalBoletos = valorBoleto +  tasaEmbarque + gestionAgencia;

//Orden de presedencia
//()
// "*" y "/
// "+" y "-"

let totalBoletos2 = (valorBoleto + impuestoAeropuerto) + (valorBoleto + impuestoAeropuerto ) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos2);

//Concatenacion de texto
let nombrePasajero = "Leonardo";
let apellidoPasajero = "LaCruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte ="1000" + "12";
let multiplicacion = parseInt ("1000") / parseFloat ("10");

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);