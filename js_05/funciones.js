function unaFuncion(){
    console.log(1);
    console.log(2);
    console.log(3);
}

unaFuncion();
unaFuncion();
unaFuncion(); //Se puede reutilizar 

function otraFuncion(){
    console.log (1);
    return "hola";

}
//console.log(otraFuncion());
const saludo = otraFuncion();
console.log(saludo);


function suma(a, b){
    return a + b;

}
console.log(suma(2, 4));
const resultado = suma (3, 2);
console.log(resultado);


const algunaFuncion= function(){ //funcion anonima .-.
    console.log(1);
}
algunaFuncion();

const algunaFuncion2= () => { //funcion flecha .-.
    console.log(2)
}
algunaFuncion2();


console.log("----------------------");

// function square(number) {
//     return number * number;
//   }
//   console.log(square(4));

const square= function (number){
    return number*number;
}
  const x = square(4);
  console.log(x);


  console.log("----------------------");

  const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3));

  console.log("----------------------");

  function map(f, a) {
    let result = []; // Crea un nuevo arreglo
    let i; // Declara una variable
    for (i = 0; i != a.length; i++) result[i] = f(a[i]);
    return result;
  }
  const f = function (x) {
    return x * x * x;
  };
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f, numbers);
  console.log(cube);