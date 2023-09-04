//Listas o Arrays de datos
const ciudadesDisponibles = new Array('Bogotá', 'Lima', 'Santiago');
//console.log(ciudadesDisponibles);
//Definir arrays de manera mas corta
const paisesDisponibles = ['Colombia', 'Perú', 'Chile'];
//console.log(paisesDisponibles);

//Agregar elementos a un array al final
{
    paisesDisponibles.push('Argentina');
    ciudadesDisponibles.push('Buenos Aires');

    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);
}

//Agregar elementos a un array al inicio
{
    paisesDisponibles.unshift('Venezuela');
    ciudadesDisponibles.unshift('Caracas');

    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);

}

//Mostrar el primer elemento de la lista
{
    console.log(paisesDisponibles[1]);
    console.log(ciudadesDisponibles[1]);
}
//Quita elementos y los coloca en la posicion  de los que quitamos
{
    paisesDisponibles.splice(1, 2, 'España', 'Rusia');
    console.log(paisesDisponibles);
}