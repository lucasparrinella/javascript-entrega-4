const userIva = Number(prompt("Estos son los precios de las prendas:                                                                                                                                                                       "
+"1- Remera: $1500                                                                                                                                                                                                                              "
+"2- Gorra: $1000                                                                                                                                                                                                                       "
+"3- Pantalón $1500                                                                                                                                                                                                                                         "
+"Elegí el número de prenda para saber el precio final con el IVA"));

const remera = 1500;
const gorra = 1000;
const pantalon = 1500;

if (userIva == 1) {
    alert("El precio final de la prenda es de: $ "+((remera)*21/100+remera));
} else if (userIva == 2) {
    alert("El precio final de la prenda es de: $ "+((gorra)*21/100+gorra));
} else if (userIva == 3) {
    alert("El precio final de la prenda es de: $ "+((pantalon)*21/100+pantalon));
} else {
    alert("¡El número ingresado no pertenece a una prenda!");
}

const userCalculation = Number(prompt("¿Deseas calcular el IVA de algún precio? Ingresalo aca abajo. ¡Si deseas salir escribe cualquier letra!"));
alert("El valor que ingresaste + el IVA es = $"+(userCalculation*21/100 + userCalculation));