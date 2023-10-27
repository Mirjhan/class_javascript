//Metodo Constructor
const miObj = new Object();

//Object Literal
const miObj2 = {
    title : "aprendiendo JavaScript",
    pages : 100,
}

//Funcion Constructor
function miObj3 (name){
    this.name = name;
}
const miObj4 = new miObj3('Mirjhan');

//Clases (ES6)
class miObjeto4{
    constructor(name){
        this.name=name;
    }
}
const miObj5 = new miObjeto4('Estefany');

//Patron Singleton

const singl = new (function Singleton(){
    this.name = 'Norma'
})();