const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");

let edadPasajero = 18;
let estaAcompanado = true;
let tienePasarporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
// A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) > 0 &&edadPasajero >= 18 && tienePasarporte && !estaCasado && estaAcompanado) {
  console.log("Paquete para solteros disponible para la venta");
} else {
  console.log("Ciudad no disponible o pasajero imcumple las reglas");
}  