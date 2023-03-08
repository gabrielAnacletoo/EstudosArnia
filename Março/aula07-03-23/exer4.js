// Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e retorna Xz (X elevado à Z).
//  (sem utilizar funções ou operadores de potência prontos)
let io = require("../aulasJS/io");

io.write('Vamos calcular X elevado a Z');
let num
io.write('Digite o valor de X');
num = io.readFloat();

let num2
io.write('Digite o valor de Z');
num2 = io.readFloat();

function calcular (a,b){
    return a**b;
}
 
const resultado = calcular(num,num2)
console.log(`${resultado.toFixed(0)}`)