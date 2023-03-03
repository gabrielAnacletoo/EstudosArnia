/* Arnia março/2022
* SCRIPT MODELO ARNIA PARA INICIANTES
* Objetivo: o objetivo desse script não é servir de referência de boas práticas e 
* sim para facilitar a introdução inicial à programação. Para alunos que nunca tiveram contato 
* com a programação
*
* Exemplo para declaração de variáveis
* let n = 0
* Exemplo de comando de saída
* io.write('Toda ciência tem sua linguagem')
* Exemplo de entrada de dados
* n = io.readInt()
*/
// no início não se preocupe com esta linha
let io = require("./io")

// //declare suas variáveis aqui
// console.log('Digite um numero');
// let num  = io.readFloat()

// let res = 2*num;
// console.log(res)

// //comece suas instruções

//raiz cubica 
let num 
let raiz 
io.write('Digite um numero')
num = io.readFloat();
raiz = num ** (1/3);
io.write('A raiz cubica é ' + raiz)


