let frutas = ["Manzana","Pera", "Banana"];

console.log(frutas.length);

let primero = frutas[0];
console.log(primero);
// Manzana

let ultimo = frutas[frutas.length - 1];
console.log(ultimo);
// Banana

frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
  });
  // Manzana 0
  // Pera 1
  // Banana 2

  let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
  console.log(frutas);
// ["Manzana", "Pera", "Banana", "Naranja"]

let ultimo1 = frutas.pop(); // Elimina "Naranja" del final
console.log(ultimo1);
console.log(frutas);
// ["Manzana","Pera", "Banana"]

let nuevaLongitud1 = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
console.log(nuevaLongitud1);
console.log(frutas);
// ["Fresa" ,"Manzana","Pera", "Banana"]

let primero2 = frutas.shift(); // Elimina "Fresa" del inicio
console.log(frutas);
// ["Manzana", "Pera", "Banana"]

frutas.push("Fresa");
// ["Manzana","Pera", "Banana", "Fresa"]

let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
console.log(pos);
// 2

let elementoEliminado = frutas.splice(pos, 1);
console.log(elementoEliminado);
console.log(frutas);
// ["Manzana", "Pera", "Fresa"]

console.log("------------------------")

let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos1 = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(pos1, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

let copiaArray = vegetales.slice();
console.log(vegetales);
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

console.log("_______________________________________________");
let arr = [
    "este es el primer elemento",
    "este es el segundo elemento",
    "este es el último elemento",
  ];
  console.log(arr[0]); // escribe en consola 'este es el primer elemento'
  console.log(arr[1]); // escribe en consola 'este es el segundo elemento'
  console.log(arr[arr.length - 1]); // escribe en consola 'este es el último elemento'
  

  