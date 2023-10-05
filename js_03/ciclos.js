let contador = 10;
while(contador < 10){

    console.log('while '+contador);
    contador ++;
}

//-------------------------------------

do{
    console.log('do while '+contador);
    contador++;
}while(contador < 10);

//-------------------------------------

for (let i = 0; i < 10; i++) {
    console.log('for '+i);
    
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for(let i = 0; i < numeros.length;i++){
    console.log(numeros[i]);

}

const mirjhan = {
    nombre: 'Mirjhan',
    apellido: 'Castillo',
    edad: 29
}

for (const propiedad in mirjhan) {
    console.log(propiedad);
    console.log(`key:${propiedad}, Value:${mirjhan[propiedad]}`);
}

for (const elemento of numeros) {
    console.log(elemento);
}
let cadena = "Hola Mundo"
for (const caracter of cadena) {
    console.log(caracter);
}


var arr = [ 1, 2, 3 ];
    for (var i = 0; i <= arr.length; i++) {
       console.log(arr[i]);
    }

 for (var elefante = 1; elefante < 10; elefante+=2) {
    if (elefante === 7) {
        break;
    }
    console.info('elefante es ' + elefante);
}