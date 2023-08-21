// Faça um programa que leia a idade e a altura de 5 pessoas.
//  Ao final, o programa deverá acusar a maior Idade e a média das alturas.
let io = require("../aulasjs/io");

let idade
let altura
let maiorIdade = 0
let somaAlturas = 0
// Solicita a idade e a altura de 5 pessoas
for(let i = 1; i <= 5; i ++) {
    io.write("Digite a idade da Pessoa");
    idade = io.readInt();
    io.write("Digite a altura da pessoa")
    altura = io.readFloat();
    // Verifica se a idade digitada é maior que a maior idade anterior
        if(idade > maiorIdade) {
            maiorIdade = idade;
   }   
   // Soma a altura digitada à soma das alturas
  somaAlturas += altura; 
}
//calcula a media
let mediaAlturas = somaAlturas/5; //divide todas alturas pelo numero de entradas total no  caso 5
// Exibe a maior idade e a média das alturas no console
console.log(`Maior idade: ${maiorIdade}`);
console.log(`Média das alturas: ${mediaAlturas.toFixed(2)}`);
