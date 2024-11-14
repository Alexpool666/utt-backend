// Has hecho una compra y sabes el precio del producto y su iva.
// Haz un script que te calcule el precio total que vas a pagar por tu compra.
// Te recuerdo que para calcular el total debes sumar al precio el resultado de 
// multiplicasr precio por el iva y dividir por 100.
function getPrice(price, ivaD) {
  return price + (price * ivaD);
  // const iva = 200 + (200 * .16) /100;
  // const total = 200 + 2.32
  // return 202.32

  //return 232
}

// En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y 
// el perímetro del cuadrado.
// El area la calculas como lado multiplicado por lado.El perímetro es la suma de los cuatro lados.
function obtenerDatos() {
  console.log('Perimetro: ' + perimetro(5) + ' area: ' + area(5))
}

function area(lado) {
  const area = lado * lado
  return area
}

function perimetro(lado) {
  const perimetro = lado * 4
  return perimetro
}

// Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y 
// salude con un "Hola" seguido del nombre del usuario.
// Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question('Introduce tu nombre ', (name) => {
  console.log('Hola, ' + name)
  rl.close()
})

// En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script 
// mostrará como resultado el valor medio de los tres.
// Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

const numeros = [6, 20, 16];
function prom(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
    console.log(numeros[i]);
  }

  const suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0)
  const media = suma / numeros.length
  console.log(media)

  let valores = Object.values(numeros)
  let suma = valores.reduce((a, b) => a + b, 0);
  let media = suma / valores.length()
  console.log(media)
}

// Calcula la diferencia de tiempo de x fecha a la fecha de hoy, dando como resultado 
// semanas, dias, horas, minutos

function calcularDiff(fechaPass) {
  const fechaActual = new Date()
  const milisegundosFechaActual = fechaActual.getTime()
  const milisegundosFechaPasada = new Date(fechaPass).getTime()

  let diffMilisegundos = milisegundosFechaActual - milisegundosFechaPasada
  const milisegundosXMinuto = 1000 * 60
  const milisegundosXHora = milisegundosXMinuto * 60
  const milisegundosXDia = milisegundosXHora * 24
  const milisegundosXSemana = milisegundosXDia * 7

  const semanas = Math.floor(diffMilisegundos / milisegundosXSemana)
  diffMilisegundos %= milisegundosXSemana
  const dias = Math.floor(diffMilisegundos / milisegundosXDia)
  diffMilisegundos %= milisegundosXDia
}

// Crear funcion que me diga si es par o impar

// Crear funcion que me revierta una palabra

// Crear funcion que apartir de un arreglo me lo muestre en orden inverso