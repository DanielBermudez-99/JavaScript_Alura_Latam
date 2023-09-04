const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
const preciosDisponibles = new Array(500, 400, 380, 200);
const datos = [
    {
    'ciudad': 'Bogotá',	
    'precio': 500
    },
    {
    'ciudad': 'Lima',
    'precio': 400
    },
    {
    'ciudad': 'Santiago',
    'precio': 380
    },
    {
    'ciudad': 'Montevideo',
    'precio': 200
    }
];
const presupuestoDisponible = 210;

let i = 0;

//While.. Se repite 0 o más veces
//Do... Se repite 1 o más veces
while (i < datos.length && datos[i].precio > presupuestoDisponible ) {
  i++;
}
if (i == datos.length) {
    console.log("No hay pasajes disponibles");
} else {
  console.log("Puedes comprar pasajes para: " + datos[i].ciudad +" por " + datos[i].precio +" pesos");
}

