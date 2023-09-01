const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
//console.log(ciudadesDisponibles);
//Definir arrays de manera mas corta
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];
//console.log(paisesDisponibles);


//Para ver el tamaño de un array
const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} ciudades`);
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} países`);

//Remover el primer elemento de un array
{
    ciudadesDisponibles.shift();
    console.log(ciudadesDisponibles);
    console.log(`En la lista de ciudades tenemos ${cantidadCiudades.length} ciudades`);
}
//Remover el ultimo elemento de un array
{
    ciudadesDisponibles.pop();
    console.log(ciudadesDisponibles);
    console.log(`En la lista de ciudades tenemos ${cantidadCiudades.length} ciudades`);
}

//Filtro de elementos de un array
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//Unificar elementos de un array
console.log(paisesDisponibles.join(" - "));

//Ordenar elementos de un array
console.log(paisesDisponibles.sort());

//Conocer la posicion de un elemento en un array
console.log(paisesDisponibles.indexOf("Chile"));

//Unificar elementos de un array
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);