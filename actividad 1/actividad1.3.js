/*
 Escribir una función flecha que reciba un número y devuelva si es par o 
impar
*/

const par = num => num%2==0 ? "par" : "impar"

let num = parseInt(prompt("Numero: "))
document.write(par(num))