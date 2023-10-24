//Creacion de un array
const miArray =["David", "Juan", "Kevin"] 
const miArray2 =["David",156, false]; //Deben tener el mismo tipo de datos


//Propiedad LENGTH 

const cant = miArray.length;
console.log(cant); //imprime 3, la cantidad de elementos del array

//Acceder a los elementos
var nombre = miArray[0];
console.log(nombre);//Accede y muestra al elemento segun el indice

nombre = miArray[1];
console.log(nombre)

nombre = miArray[2];
console.log(nombre)

nombre = miArray[3];
console.log(nombre) //Esta fuera del alcance del array

//Agregar elementos
miArray.push("Mirjhan"); //agrega el elemento al final
console.log(miArray);

miArray.unshift("Estefany");//agrega elemento al inicio
console.log(miArray);

//Quitar elementos
let final = miArray.pop(); //Quita el ultimo elemento
console.log(miArray);

console.log(final);//Muestra el elemento que se quito del array

let inicio = miArray.shift();
console.log(miArray);//Quital el primer elemento
console.log(inicio);

console.log("--------------");

//Recorrer e iterar el array
const nombres = ["Mirjhan","Estefany","Norma"];

for (let i = 0; i < nombres.length; i++) {  
    console.log(nombres[i]);
}

nombres.forEach((elemento) => {
  console.log(elemento)  
});



//OBJETOS -- creacion de un objeto
const persona = {
    nombre : "Mirjhan",
    edad : 29,
    comidaFavorita : "Arroz Chaufa",
}

//Acceder a una propiedad de un objeto
let edad = persona.edad;
console.log(edad);

//Editar una propiedad
persona.edad=30;
console.log(persona);

//Agregar una nueva propiedad
persona.colorFavorito = "Rosa";
console.log(persona);

//Borrar propiedad
delete persona.comidaFavorita;
console.log(persona);
console.log("-----------------------")

//Recorrer e iterar un objeto
for (const key in persona) {
   console.log(key,persona[key]);
}