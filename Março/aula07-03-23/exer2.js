// . Faça uma função que recebe a idade de um nadador por parâmetro e retorna a 
// categoria desse nadador de acordo com a tabela abaixo:  
let io = require("../aulasJS/io");

io.write('Vamos verificar sua idade para saber sua turma. ')
//defini as variaveis 
let idade
//recebe a idade
io.write('Digite sua idade: ')
idade = io.readInt();

function verificar(idade) {
    if (idade >= 5 && idade <= 7) {
        console.log("Categoria: Infantil A!")
    } else if (idade >= 8 && idade <= 10) {
        console.log("Categoria: Infantil B!")
    } else if (idade >= 11 && idade <= 13) {
        console.log("Categoria: Juvenil A!")
    } else if (idade >= 14 && idade <= 17) {
        console.log("Categoria: Juvenil B!")
    } else {
            console.log("Categoria: Adulto!")
    }
}
verificar(idade);