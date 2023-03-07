// Faça um programa de computador que recebe do usuário 10 números e depois imprime os pares e depois os ímpares

let io = require("../aulasJS/io");
// array vazio para armazenar os números
var numeros = [];
for(let i = 0; i < 5;i++){
    io.write("Digite o proximo numero " + (i+1) + ":")
    numeros.push(io.readInt()); // repita a mensagem 5 vezes
}   
// arrays vazios para armazenar os números pares e ímpares
var pares = [];
var impares = [];

// Percorre o array de números e adiciona cada número ao array correspondente
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {// se resto da divisão for zero então adiciona ao array pares
      pares.push(numeros[i]); 
    } else {
      impares.push(numeros[i]); // se for diferente de zero adicione ao impar
    }
  }
// Imprime os números pares
console.log("Números pares:");
for (let i = 0; i < pares.length; i++){
    io.write(pares[i])
}
// Imprime os números impares 
console.log("Números impares:");
for (let i = 0; i < impares.length; i++) {
    io.write(impares[i])
}