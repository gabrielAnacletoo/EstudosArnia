// Faça um programa para pedir 10 nomes de pessoas ao usuário e acusar quantas se chamam “Maria”

let io = require("../aulasjs/io");
let nome
let countMaria = 0;

for(let i = 0; i <= 5; i++) {
    io.write("Digite um nome")
    nome = io.read(); // variavel nome recebe o valor "string" digitado
    if (nome === "maria") { // se a o valor digitado for maria, adicione +1 a variavel CountMaria
        countMaria++;
    } 
}

// Exibe o resultado no console
console.log(`Dos 5 nomes digitados, ${countMaria} são iguais a Maria.`);