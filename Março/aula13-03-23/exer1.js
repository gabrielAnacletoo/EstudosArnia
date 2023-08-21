let io = require("../aulasJS/io");

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoas = [];
const maioresDeIdade = [];

for (let i = 0; i < 3; i++) {
  io.write("Digite o nome: ");
  const nome = io.read();
  io.write("Digite a idade: ");
  const idade = io.read();
  
  const pessoa = new Pessoa(nome, idade);
  pessoas.push(pessoa);

  if (idade >= 18) {
    maioresDeIdade.push(pessoa);
  }
}

console.log("Todas as pessoas:", pessoas);
console.log("Pessoas maiores de idade:", maioresDeIdade);
