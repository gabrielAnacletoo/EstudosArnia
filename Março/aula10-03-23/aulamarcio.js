let io = require("../aulasJS/io");



// Funcaoteste = (a,b) => {
//     return a*b;
// }

// console.log(Funcaoteste(5,5))

/*
FuncaoTeste é o nome da variavel que vai receber a function
(a,b) são os parametros dela ou seja 2 parametros 
=> indica que é uma function 
{ seu código deve ser escrito aqui}
console.log(Funcaoteste(5,5)) aqui chama a função e passa os 2 parametros
*/

//função saudacao serve apenas para exibir o texto ola + nome
function saudacao(nome){
    io.write('Ola ' + nome)
}
/* processarEntrada recebe o nome o nome vai ser atribuido a cb
m recebe o que foi digitado através de io.read()
atribui o valor de m ao parametro cb
cb passa a valor o nome digitado

ficando nas ordens "Digite seu nome... a função saudacao executa Ola + nome digitado"
*/ 
function processarEntrada(cb) {
    io.write("Digite o seu nome")
    m = io.read()
    cb(m)
}
processarEntrada(saudacao)