// Faça uma função que receba do usuário 3 segmentos de reta e 
// retorne se esses segmentos podem ou não formar um triângulo
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
if (valores[0] != valores[1] || valores[1] != valores[2]) {
    console.log(`Não foi possivel formar um triangulo`)
} else {
    const resultado = soma(valores[0],valores[1],valores[2])
    console.log(`A Soma dos Valores digitados é ${resultado}. que formam um triangulo`)
}

