// prime os pares e depois os ímpares
// Faça um programa de computador para receber 10 números e depois imprimir os primos.

let io = require("../aulasJS/io");

let numeros = []

for(let i = 0; i < 5; i ++){
    let numero = io.readInt(`Digite o número ${i}`);
    numeros.push(numero) // adiciona o valor digitado em numero ao array numeros
}
// loop para verificar quais números são primos e imprimi-los
console.log("Números primos:");
for (let i = 0; i < numeros.length; i++) {
    let primo = true;
    for (let j = 2; j < numeros[i]; j++) {
        if (numeros[i] % j == 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(numeros[i])
    }
}