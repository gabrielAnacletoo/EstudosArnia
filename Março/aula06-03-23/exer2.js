// Faça um programa que recebe do usuário 5 números e depois imprime estes números na ordem inversa ao digitado.


let io = require("../aulasJS/io");
// Criando um array vazio
let numeros = [];
// Pede ao usuário que digite 5 números inteiros
for (let i = 0; i < 5; i++) {
    io.write("Digite 5 números")
    numeros[i] = io.readInt();
  }
  //imprime o sucessor de cada indice do array
  for (let i = 0; i < numeros.length; i++) {
    let sucessor = numeros[i]+1; // sucessor recebe o array numeros +1 até chegar ao tamanho length no caso 5.
    console.log(`O sucessor de ${numeros[i]} é ${sucessor} `)
  }