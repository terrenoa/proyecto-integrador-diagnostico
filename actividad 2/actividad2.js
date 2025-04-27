/*
Mostrar en consola un mensaje que diga: "Lucía tiene 28 años y trabaja 
como Diseñadora." usando desestructuración.
Agregar una nueva propiedad al objeto llamada ciudad con el valor 
"Rosario"
*/

const persona = {
    nombre: "Lucía",
    edad: 28,
    profesion: "Diseñadora",
};


let { nombre, edad, profesion } = persona;
document.write(`${nombre} tiene ${edad} años y trabaja como ${profesion}.<br>`);


persona.ciudad = "Rosario";
document.write(`Vive en ${persona.ciudad}.`);
