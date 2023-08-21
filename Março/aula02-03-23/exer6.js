let io = require("../aulasjs/io");
let menorNumero = Infinity;

// Inicio do for
for (let i = 1; i <= 10; i++){
    let n
    io.write("Digite 10 números para verificar qual número foi o menor Digitado!");
    n = io.readInt();
    if (n < menorNumero) {// o codigo sera executado 10 vezes
        menorNumero = n; // se o n digitado for menor que menor numero(digitado infinitamente) então menor numero recebe o valor  digitado
    }
}
// Exibe o menor número digitado no console
console.log(`O menor número digitado foi ${menorNumero}.`);