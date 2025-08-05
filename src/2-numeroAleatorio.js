/*
crear un proyecto que genere numeros aleatorios tomando los datos
de la terminal pero si no le paso los datos tiene valores por defecto
minimo 1 y maximo 100
*/
//argv deja ingresar a los argumentos de la consola
const argumentos = process.argv;
//slice corta el array desde la posicion inicial hasta donde le diga
const args = argumentos.slice(2);
console.log(args);

//valores por defecto
let min = 1;
let max = 100;

//verificar si los datos de los argumentos son correctos
//cambiar tipo de dato a number

if (args.length === 2) {
  //modificar tipo
  const minParseado = parseInt(args[0]);
  const maxParseado = parseInt(args[1]);
  //pregunto su si es un numero
  if (!isNaN(minParseado) && !isNaN(maxParseado) && minParseado < maxParseado) {
    min = minParseado;
    max = maxParseado;
  } else {
    console.log("numeros fuera de rango, se usaran valores por defecto");
  }
}
//agregar logica de numero aleatorio
const aleatorio = Math.floor(Math.random() * (max - min) + min);
console.log(`el numero aleatorio es: ${aleatorio}, el rango ${min} y ${max}`);
