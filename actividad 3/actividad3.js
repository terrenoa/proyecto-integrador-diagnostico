/*
 Escribir una función que reciba un array y una función callback. La función 
debe aplicar el callback a cada elemento del array y retornar el nuevo array.
*/
const procesar = (array , callback) => array.map(callback);

let arr = [1,2,3,4,5];
let cb = x=>x*2;
let resultado = procesar(arr,cb);
document.write(resultado);