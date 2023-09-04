const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const preciosDisponibles = new Array(500, 400, 380, 200);
const presupuestoDisponible = 380;

let  i = 0;

//While.. Se repite 0 o más veces
//Do... Se repite 1 o más veces
while (preciosDisponibles[i] > presupuestoDisponible && i < preciosDisponibles.length){
    i++;
}
if (i == preciosDisponibles.length){
    console.log ("No hay pasajes disponibles");
} else {
console.log ("Puedes comprar pasajes para: " +ciudadesDisponibles[i] +" por " +preciosDisponibles[i] +" pesos");
}

/*Ejemplo  del Do While
do {
    i++;
} while (preciosDisponibles[i] > presupuestoDisponible && i < preciosDisponibles.length);
*/