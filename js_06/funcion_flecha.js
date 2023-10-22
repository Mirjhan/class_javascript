/*function sumar(param1, param2){
    return param1 + param2
}*/

/*const sumar= (param1, param2) => {
    if(typeof param1 != 'number'){
        return "Error no es numero"
    }else{
        return param1 + param2
    }
}*/

const sumar= (param1, param2) => {
    if(typeof param1 != 'number') return "Error no es numero"
    return param1 + param2
}

//const sumar= (param1, param2) => param1 + param2


console.log(sumar(7,16))