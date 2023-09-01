//Operadores de comparación 
const valorPasaje = 1000;
if (valorPasaje == 1000) {
  console.log("El pasaje cuesta 1000");
}

const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

//Operadores lógicos
// &&: AND - Se deben cumplir todas las condiciones
// ||: OR - Se debe cumplir al menos una condición
// "!:" NOT - Niega una condición


//Ejemplo del &&
/*const edadPasajero =  20;
console.log(`Verificando pasajes para ${ciudadDestino}`);
//Palabra reservada if: evalua una condición
if ((ciudadesDisponibles.indexOf(ciudadDestino) >= 0) && (edadPasajero >= 18)) {
  console.log("Pasaje disponible para la venta");
} else {
  console.log("No hay pasajes disponibles para la venta");
}*/

//Ejemplo del || o or
/*const edadPasajero =  19;
const estaAcompaado = true;
console.log(`Verificando pasajes para ${ciudadDestino}`);
if ((edadPasajero>= 0) || estaAcompaado) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && (edadPasajero >= 18 || estaAcompaado)) {
      console.log("Pasaje disponible para la venta");
    } else {
      console.log("No hay pasajes disponibles para la venta o pasajero no tiene la edad suficiente");
    }
}*/

//Ejemplo de la negación !
/*let edadPasajero =  19;
let estaAcompaado = true;
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (!(edadPasajero>= 0) || !estaAcompaado) {
    console.log("No hay pasajes disponibles para la venta o pasajero no tiene la edad suficiente");
} else {
    if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && (edadPasajero >= 18 || estaAcompaado)) {
      console.log("Pasaje disponible para la venta");
    } else {
      console.log("No hay pasajes disponibles para la venta o pasajero no tiene la edad suficiente");
    }
}
 */

//Operadores logicos 
let edadPasajero =  16;
let estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
    if ((ciudadesDisponibles.indexOf(ciudadDestino) > 0) && (edadPasajero >= 18 || estaAcompanado)){
    console.log("Pasaje disponible para la venta");
} else {
    console.log("Ciudad no disponible o pasajero imcumple las reglas");
}  

//Aplicando el operador NOT !
edadPasajero = 16;
estaAcompanado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
if (!(ciudadesDisponibles.indexOf(ciudadDestino) > 0) && (edadPasajero >= 18 || estaAcompanado)) {
  console.log("Ciudad no disponible o pasajero imcumple las reglas");
} else {
  console.log("Pasaje disponible para la venta");
} 

