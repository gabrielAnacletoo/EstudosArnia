// Faça um programa de computador para receber preços de 10 produtos e depois imprimir os preços que estão acima da média.

let io = require("../aulasJS/io");

// solicita ao usuário que digite os preços dos produtos
let prices = [];
for(let i = 0; i < 10; i++){
    io.write("Digite o preço do produto " + (i+1) + ":");
    prices.push(io.readFloat());
}
// calcula a média dos preços
let soma = 0
for(let i = 0; i < prices.length; i++){
  soma+= prices[i]
}
let average = soma / prices.length;
// imprime os preços acima da média
io.write("Os preços acima da média (" + average.toFixed(2) + ") são:");
for (let i = 0; i < prices.length; i++) {
    if ( prices[i] > average) {
        io.write(prices[i].toFixed(2));
    }
}
