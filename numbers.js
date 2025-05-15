//Definición de decimales y eneteros
const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal) //Se constanta que son del tipo number

//Notación cientifica
const cientifico = 5e4

//Infitos
const infinito = Infinity

//NAN
const noEsNumero = NaN

//Operaciones aritméticas
const suma = 3 + 4
const resta = 5 - 7
const multiplicación = 5 * 3
const división = 8 / 4

//Modulos y exponenciales
const modulo = 15 % 8
const exponenciales = 2 ** 3

//Precisión
const resultado = 0.1 + 0.2
console.log(resultado.toFixed(3)) //Permite ajustar la presición en Javascript

//Operaciones avanzadas
const sqrt = Math.sqrt(25) //Entrega la raíz cuadrada
const abs = Math.abs(-8) //Entrega el valor absoluto
const aleatorio = Math.random()

console.log(sqrt)
console.log(abs)
console.log(aleatorio)