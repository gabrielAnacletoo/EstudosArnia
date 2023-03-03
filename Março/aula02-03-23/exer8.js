// Programa que peça ao usuário um número natural e imprima seus divisores.
let io = require("../aulasjs/io");


let n
io.write("Digte um numero")
n = io.readInt();
// a variavel n recebe o numero do usuario
for (let i = 0; i <= n; i++) { // enquanto i for menor que n , i +1 se n for 10 i vai se repetir 10 vezes
    if (n % i === 0 ) { // se o resto da divisao de n por i for igual a 0 , mostre esse valor no console
        console.log(i)
    }
}