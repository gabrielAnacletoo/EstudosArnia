
// 4 - Faça uma função que recebe do usuário um vetor e retorna outro vetor com os valores em ordem invertida.


let io = require("../aulasJS/io");

let numeros = [];
io.write("Digite 4 números para mostrar eles invertidos.")
for (let i = 0; i < 4; i++) {
    io.write("Digite o " + (i+1) + " º número")
    numeros.push(io.readInt());
}
function invertido(){
    return numeros.reverse();
}
const resultado = invertido();
console.log(resultado)