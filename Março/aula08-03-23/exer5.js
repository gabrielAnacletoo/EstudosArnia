// Implemente uma função que recebe um vetor de números e
//  retorna um outro vetor que contém somente os números pares.

let io = require("../aulasJS/io");
io.write("Digite 6 números para verificar se são pares")
let numeros = [];
let pares = [];
for (let i = 0; i < 6; i++) {
    io.write("Digite o " + (i+1) + " º número")
    numeros.push(io.readInt())
}
function exibirPares() {
    for (let i =0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0){
            pares.push(numeros[i]); // Adiciona o número par ao array 'pares'
        }
    }
    return pares
}
console.log(exibirPares())
