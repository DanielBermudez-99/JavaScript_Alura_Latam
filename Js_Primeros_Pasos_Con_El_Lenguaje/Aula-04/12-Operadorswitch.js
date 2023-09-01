ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
const ciudadDestino = "Bogotá";

let valorPasaje = 0;

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    switch (ciudadDestino) {
        case "Bogotá":
            valorPasaje = 1000;
            break;
        case "Lima":
            valorPasaje = 2000;
            break;
        case "Santiago":
            valorPasaje = 3000;
            break;
        case "Montevideo":
            valorPasaje = 4000;
            break;
        default:
            valorPasaje = 0;
            break;
    }
    console.log(`El valor del pasaje es ${valorPasaje}`);
} else {
    console.log("Ciudad no disponible");
}