// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.

let io = require("../aulasJS/io");

//defini as variaveis 
let anos,meses,dias 
//recebe anos, meses e dias
io.write('Digite sua idade em anos: ')
anos = io.readInt();
io.write('Agora digite os meses: ')
meses = io.readInt();
io.write('Agora digite os dias: ')
dias = io.readInt();

//função para calcular
function idadeEmDias (anos,meses,dias){
    const diasAno = 365; //dizendo de forma imprecisa que o ano tem 365 dias
    const diasMes = 30; // mesma coisa  com mes
    //anos digitadosX365 + mesesdigitadosX30 + dias digitados
    const soma = (anos*diasAno) + (meses*diasMes) + dias; 
    //retorna a variavel soma
    return soma
}
let soma = idadeEmDias(anos,meses,dias)
io.write(`Sua idade em dias é ${soma}`)