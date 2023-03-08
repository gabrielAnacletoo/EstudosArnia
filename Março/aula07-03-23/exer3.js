// Faça uma função que recebe um valor inteiro e verifica se o valor é par ou ímpar.
//  A função deve retornar um valor booleano.
let io = require("../aulasJS/io");


io.write('Vamos verificar se o valor digitado é par ou impar')
let valor // definindo variavel
io.write("Digite o valor");
valor = io.readInt();//recebe o valor digitado.

//função
function parOUimpar(numero) {
    return numero % 2 === 0;  // se o resto de divisão do numero digitado por 2 for zero então é par!
}
const resultado = parOUimpar(valor); //resultado recebe a função com valor digitado como parametro
console.log(resultado); // caso seja verdadeiro então == true.



