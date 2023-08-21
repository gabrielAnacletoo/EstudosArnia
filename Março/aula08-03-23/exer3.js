let io = require("../aulasJS/io");

let numeros = [];
let soma = 0;

io.write("Digite 4 números para verificar a média.")
for(let i = 0; i < 4; i++) { // loop vai se repetir 4 vezes
    io.write("Digite o " + (i+1) + "º numero");
    numeros.push(io.readInt()); //adiciona os numeros digitados ao array numeros
    soma+= numeros[i] // soma recebe o valor digitado+ valor anterior
}
function media() {
  return soma / numeros.length; //dividindo soma pelo total de indices dentro do array
}

const resultado = media(); // chamando a função
console.log(`A média aritmética é: ${resultado}`);
