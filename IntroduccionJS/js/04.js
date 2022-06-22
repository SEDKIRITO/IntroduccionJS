//METODOS PARA LOS STRING .length, .indexOf, .includes

const Tweet = "Aprendiendo JavaScrip con el curso de desarrollo web Completo";
const producto2 = "Monitor HD";
const email = "correo@correo.com";

// length es para la extencion de una cadena 
console.log(Tweet.length);
console.log(producto2);

//IndexOf es para encontrar un elemento en una cadena (Retorna posicion)
console.log(Tweet.indexOf("JavaScrip"));
console.log(producto2.indexOf("Tablet"));
console.log(email.indexOf("@"));

//include (Retorna true o false)
console.log(Tweet.includes("JavaScrip"));
console.log(producto2.includes("Tablet"));