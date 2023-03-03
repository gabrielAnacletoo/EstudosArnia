
let io = require("../aulasjs/io");


let n 
io.write("Digite um numero para exibir os numeros pares até ZERO a partir dele")
n = io.readInt();

for (let i = 0; i < n; i++) { //enquanto i for menor que n digitado pelo usuario , i++
    if(i % 2 === 0 ) {        // se i tiver resto de divisao 0 então ele é par ,exiba no console
        console.log(i);// i vai sendo incrementado e verifcando de o resto da divisao por 2 é zero
    }
}