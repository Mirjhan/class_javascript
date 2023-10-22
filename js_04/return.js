function saludar(){
    return "Hola";
    console.log("Hola!")

}

//console.log(saludar());

function realizarOperacion(op, a, b){
    switch (op){
        case "sumar":
            return parseInt(a) + parseInt (b);
            
        case "multiplicar":
            return a * b;
        default: return 0
    }
}
console.log(realizarOperacion("sumar", 4, 5));
//console.log(realizarOperacion("multiplicar", 4, 5));
