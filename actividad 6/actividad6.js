/*
Dado el siguiente array de objetos
Usar filter para obtener solo los productos cuyo precio sea mayor a 100.
Usar map para obtener un nuevo array de strings con el siguiente formato: 
"Notebook: $1200"
Usar reduce para calcular el precio total de todos los productos.
Combinar filter y map para obtener los nombres de los productos que 
cuesten menos de 100, todo en minúsculas.
*/  

const productos = [
    { nombre: "Notebook", precio: 1200 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 },
    ];

let filtrados = productos.filter((producto) => producto.precio > 100);
console.log(filtrados);

let formato = filtrados.map((producto) => `${producto.nombre}: $${producto.precio}`);
console.log(formato);   

let total = productos.reduce((i, producto) => i + producto.precio, 0);
console.log(`El precio total es: $${total}`);

let totalFiltrado = productos
    .filter(producto => producto.precio < 100)
    .reduce((i, producto) => i + producto.precio, 0);

console.log(`El precio total filtrado es: $${totalFiltrado}`);