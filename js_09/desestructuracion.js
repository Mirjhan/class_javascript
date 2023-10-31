const numeros = [1, 2, 3]; 

//Sin destructuracion
let uno = numeros[0],
dos = numeros[1],
tres = numeros[2];

console.log(uno,dos,tres);

//Con destructuracion
const [one, two, three] = numeros;
console.log(one,two,three);

const persona = {
    nombre: "Mirjhan",
    apellido: "Castillo",
    edad: 30
}

let {nombre,apellido,edad} = persona;
console.log(nombre, apellido, edad);


console.log("=========================");

const arreglo = [1, 2, 3, 4, 5];
const [valor1, valor2, valor3] = arreglo;
console.log(valor1,valor2,valor3);