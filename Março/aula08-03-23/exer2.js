// aça uma função que recebe do usuário um vetor de números e retorna a soma desses números.
let io = require("../aulasJS/io");

let valores = [];
io.write("Digite 3 números para verificar se eles formam um triagulo.")
for(let i = 0; i < 3; i++) {
    io.write("Digite o " + (i+1) + "º numero");
    valores.push(io.readInt());
}
function soma(n1,n2,n3) {
    return n1+n2+n3;
}
    const resultado = soma(valores[0],valores[1],valores[2])
    console.log(`A Soma dos Valores digitados é ${resultado}.`)

