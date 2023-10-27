const arrayDeObjetos = [{
    nombre: "David",
    edad: 24,
    comidaFavorita: "Hamburguesa",
},
{
    nombre: "Sally",
    edad: 22,
    comidaFavorita: "Shawarma",
},
{
    nombre: "Steven",
    edad: 18,
    comidaFavorita: "Pizza",
},

]

for (let i = 0; i < arrayDeObjetos.length; i++) {
    //console.log(arrayDeObjetos[i]);
    console.log("--------------------------");
    console.log("nombre: "+arrayDeObjetos[i].nombre);
    console.log("edad: "+arrayDeObjetos[i].edad);
    console.log("comidaFavorita: "+arrayDeObjetos[i].comidaFavorita);
}


console.log("--------------------------");
//Objeto con Array

const objetoConArray = {
    nombre: "Objeto con Array",
    arr: ["abeja","banana","camion","dado"],
}

objetoConArray.arr.forEach((element) => {
    console.log(element +" jaja");
});

console.log("--------------------------");
const arrayAparte = objetoConArray.arr
for (let i = 0; i< arrayAparte.length; i++) {
  console.log(arrayAparte[i]+ " jejeje");
    }