// aça um programa que leia do usuário 5 nomes e depois imprime na tela estes mesmos nomes


let io = require("../aulasJS/io");

let names = []
for (let i = 0; i < 5; i++) {
    io.write("Digite 5 nomes: ")
    names[i] = io.read();
}   
io.write("Nomes digitados são: ")
for (let i = 0; i < 5; i++) {
    io.write(names[i])
}