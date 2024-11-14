// Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj"
// o "eoZiugBf&g9".De lo contrario debe retornar false.

// Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos.
// Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 
// debe retornar ingresos * 40 % .De lo contrario retornar 0.


// El índice de masa corporal(IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
// El BMI se calcula con la siguiente formula: peso / altura ^ 2
// Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

//   "Bajo de peso"
// si el BMI < 18.5 "Normal"
// si está entre 18.5 y 24.9
//   "Sobrepeso"
// si está entre 25 y 29.9
//   "Obeso"
// si es igual o mayor a 30

// Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.
// Por ejemplo:
//   1400 se convierte en 1 K
// 34, 567 se convierte en 34 K
// 7’ 456, 345 se convierte en 7 M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.

// Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
//   "fizz"
// si el número es múltiplo de 3.
//   "buzz"
// si el número es múltiplo de 5.
//   "fizzbuzz"
// si el número es múltiplo tanto de 3 como de 5.
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos(excluyéndolos):
// Nota: Utiliza un ciclo en tu solución.Puedes asumir que el primer número va a ser menor que el segundo.

// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final.La función debe retornar la suma de los números en ese rango(incluyéndolos).
// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

// Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a"

// Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros(0).

// Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final.La función debe retornar la suma de todos los números dentro del rango(la posición inicial y la posición final, incluyéndolas).
// Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.

// Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:
// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter“ a” por“ 4”.
// Reemplaza el caracter“ e” por“ 3”.
// Reemplaza el caracter“ i” por“ 1”.
// Reemplaza el carater“ o” por“ 0”.

// Escribir una función llamada numerosAPalabras que reciba un arreglo de números(cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.
// Ejemplo
function numerosAPalabras(numeros) {
  const conversion = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  return numeros.map(numero => conversion[numero]);
}