/*
 Dado el siguiente array:
const numeros = 3, 7, 12, 5, 2;
Usar 
map para generar un nuevo array con los números al cuadrado.
Usar 
filter para obtener los números mayores a 5.
 Escribir una función flecha que reciba un número y devuelva si es par o 
impar
*/

const numeros = [3, 7, 12, 5, 2]

// Cuadrados
const cuadrados = numeros.map(numero => numero**2);
document.write("Cuadrados: " + cuadrados + "<br>");

// Mayores que 5
const mayores = numeros.filter(numero => numero > 5);
document.write("Mayores que 5: " + mayores);