// Faça um programa de computador que receba um núqmero natural e acuse se é primo ou
// não. Números primos são os naturais maiores que 1 e que possuem somente 2 divisores.

let io = require("../aulasjs/io");

let numero
io.write('Digite um numero natural para saber se ele é numero primo ou não');
numero = io.readInt();

if(numero % 2 === 0 ){
    console.log(`O Número ${numero} não é primo!`)
} else {
    console.log(`O Número ${numero} é primo!`)
}
