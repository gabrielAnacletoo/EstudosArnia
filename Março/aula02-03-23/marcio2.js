

let io = require("../aulasjs/io")

let num 
let m = 0

for (let i =0; i < 5; i++){  //enquanto i for menor que 5 i++
    io.write("Digite um número")
    num = io.readInt();
    if (num > m) { // se o numero digitado for maior que m, defina m com valor digitado
        m = num;
    }

}
io.write("O maior número digitado foi " + m)