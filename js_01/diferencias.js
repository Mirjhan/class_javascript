//---AMBITO DE VAR---
var saludar = "Hey, hola";
function nuevaFuncion(){
    var hola = "hola";
}
console.log(saludar); //Hey, hola
console.log(hola); //hola is not defined

//SE PUEDEN VOLVER A DECLARAR Y MODIFICAR
var saludar ="dice Hola también";

saludar ="Hola también";
console.log(saludar); //Hola también

//---HOISTING DE VAR---
console.log(saludar);
var saludar = "dice hola"; //undefined


//---PROBLEMA CON VAR---se redefine saludar 
var saludar = "hey, Hola";
    var tiempos = 4;
    if (tiempos > 3) {
        var saludar = "dice Hola tambien"; 
    }
    console.log(saludar); //dice Hola tambien

//----AMBITO LET---SOLO DISPONIBLE EN EL BLOQUE DONDE FUE DECLARADA
let saludar = "dice Hola";
   let tiempos = 4;
   if (tiempos > 3) {
        let hola = "dice Holaa tambien";
        console.log(hola); //dice Holaa tambien
    }
   console.log(hola) //hola is not defined

//---LET NO PUEDE VOLVER A DECLARARSE YA QUE ESTAN EN EK MISMO BLOQUE
   let saludar = "dice Hola";
   let saludar = "dice Hola tambien"; //identifier 'saludar' has already been declared


//EN DIFERENTES AMBITOS son tratadas como variables diferentes
   let saludar = "dice Hola";
    if (true) {
        let saludar = "dice Hola tambien";
        console.log(saludar); //dice Hola tambien
    }
    console.log(saludar) //dice Hola

//----CONST----No se puede modificar ni volver a declararse
const saludar = "dice Hola";
saludar = "dice Hola tambien"; //Assignment to constant variable

const saludar = "dice Hola";
const saludar = "dice Hola tambien" //Identifier 'saludar' has already been declared

//OBJETOS CON CONST- no se pueden actualizar , pero sus propiedades si se pueden actualizar
const saludar = {
    mensaje: "dice Hola",
    tiempos: 4
}
console.log(saludar); //mensaje: 'dice Hola', tiempos : 4 
saludar.mensaje = "dice hola tambien"
console.log(saludar); //mensaje: 'dice hola tambien', tiempos : 4
saludar = {
    palabras: "Hola",
    numero: "cinco"
} //Assignment to constant variable.