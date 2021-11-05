const prendaUsuario = Number(prompt("Elegí de que prenda te gustaria saber el precio final con IVA agregado: 1- Remera: $1500 2- Pantalón: $2000 3- Gorra: $1000"));

if (prendaUsuario == 1) {
    const precioFinal = (a, b, c) => {return 1500 * 0.21 + 1500};
    alert("El precio final de esa prenda es de $" + precioFinal());
} else if (prendaUsuario == 2) {
    const precioFinal = (a, b, c) => {return 2000 * 0.21 + 2000};
    alert("El precio final de esa prenda es de $" + precioFinal());
} else if (prendaUsuario == 3) {
    const precioFinal = (a, b, c) => {return 1000 * 0.21 + 1000};
    alert("El precio final de esa prenda es de $" + precioFinal());
} else {
    alert("¡El número ingresado no es válido!");
}
    