//FUNCION CLASICA - HOISTING

function saludar(nombre){
    return 'Hola ' + nombre;
}

console.log(saludar('David'));

//FUNCION ANONIMA - NO HOISTING
let saludo =function(nombre){
    return 'saludos ' + nombre;
}

console.log(saludo('David'));

//FUNCION FLECHA () => {}
//no necesita la palabra FUNCTION
//si solo es un parametro se puede omitir parentesis y llaves
//permite optimizar el codigo
let saludo2 = nombre => 'saludos '+ nombre;

let suma = (a,b) => a + b;

console.log(suma(4,3));

let obj = () => ({nombre: 'Bob', edad : 20});



const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));

console.log(this);