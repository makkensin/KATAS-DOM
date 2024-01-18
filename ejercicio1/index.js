

//*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const btn = document.querySelector(".showme");
console.log(btn);

//*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const h1 = document.querySelector("#pillado");
console.log(h1);

//*1.3 Usa querySelector para mostrar por consola todos los p

const parrafos = document.querySelectorAll("p");
console.log(parrafos);

//*1.4 Usa querySelector para mostrar por consola todos los elementos con 
//*la clase.pokemon

const pokemon = document.querySelectorAll(".pokemon")
console.log(pokemon);

//*1.5 Usa querySelector para mostrar por consola todos los elementos con 
//*el atributo data-function="testMe".
const span = document.querySelectorAll("[data-function='testMe']")
console.log(span);
//*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//*data-function="testMe".
const span1 = document.querySelectorAll("[data-function='testMe']")[2];
console.log(span1);