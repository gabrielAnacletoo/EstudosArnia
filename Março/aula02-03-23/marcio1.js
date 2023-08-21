

let io = require("../aulasjs/io")

let num 

io.write("Digite um numero inteiro");
numero = io.readInt();

for(let i = numero; i >= 0; i--) { // inicia o laço a partir do número inserido pelo usuário e decrementa até zero
                            //enquanto i for menor que numero , i decremente.
    console.log(i); // exibe cada número do laço no console
  }