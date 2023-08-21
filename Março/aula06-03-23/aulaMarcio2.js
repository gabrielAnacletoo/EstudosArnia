//recebe 5 numeros e escreve a media para o usuario

let io = require("../aulasJS/io");


let numeros = [] // definiu o array
let media //definiu media como vazia 
let soma = 0; //definiu soma como 0

for (let i =0 ; i< 5; i++) {
    io.write("Digite um número") // i começa com zero e vai repetir enquanto for menor que 5
    numeros[i] = io.readFloat(); //numeros array recebe os numeros
    soma += numeros[i] // soma + numeros digitados
}
//calculando media
media = soma/5;   //dividiu tudo que tinha em soma por 5
//escreve os que estão abaixo
io.write(`Media ${media} - Soma ${soma}`);
io.write("Abaixo das media estão");
for(let i = 0; i < 5;i++) {
    if (numeros[i] < media) { //se for menor que a media,exiba eles
        io.write(numeros[i])
    }
}