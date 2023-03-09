// Escreva uma função que recebe, por parâmetro, dois valores X e Z e calcula e retorna Xz (X elevado à Z).
//  (sem utilizar funções ou operadores de potência prontos)
let io = require("../aulasJS/io");
let num
let num2
io.write('Vamos calcular X elevado a Z');

io.write('Digite o valor de X');
num = io.readFloat(); //recebe primeiro valor
io.write('Digite o valor de Z');
num2 = io.readFloat();//recebe segundo valor
function calcular (a,b){ // calcula valor1 elevado a 2
    return a**b;
}

const resultado = calcular(num,num2)
console.log(`${resultado.toFixed(0)}`)