//Palabra const
//Espacio en memoria que no puede cambiar su valor
const valorPasaje = 1650; 
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "Lacruz";

//Palabra let
//Espacio en memoria que puede cambiar su valor
const nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

//Palabra var
//Espacio en memoria que puede cambiar su valor pero su alcance es global (no se usa)
var nombreCompletoPasajero2 = nombrePasajero + " " + apellidoPasajero;

//bloque de codigo
{
    let nombrePasajero = "Juan";
    console.log(nombreCompletoPasajero2);
}