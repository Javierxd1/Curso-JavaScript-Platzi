//Definición de strings

let string = "Hola mundo"
let stringII = 'Javascript es genial'
let stringIII = `Hola Mundo`

let message = `${string} desde Javascript` //Forma de concaternar #1
let messageII = string + ', ' + stringII  //Forma de concatenar #2

let lengthMessage = (message.length) //Longitud de un string
let lowerMessage = message.toLowerCase() //Mensaje en mayuscula
let upperMessage = message.toUpperCase() //Mensaje en minuscula
let subMessage = message.substring(0,11) //Slicing sobre un array

//Impresiones en pantalla.
console.log(message)
console.log(messageII)
console.log(lengthMessage)
console.log(lowerMessage)
console.log(upperMessage)
console.log(subMessage)