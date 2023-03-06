//primeiro exemplo de array

let vetNum = [];
let io = require("../aulasJS/io");
for (let i =0; i < 5; i++) {
    io.write("Digite 5 nomes");
    vetNum[i] = io.read();
}
io.write("Os nomes digitados foram: ")
for (let i = 0; i < 5; i++) {
    io.write(vetNum[i])
}