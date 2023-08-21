// Crie um tipo literal chamado "EstacaoAno" que represente as estações do ano 
// ('primavera', 'verão', 'outono', 'inverno'). Escreva uma função
//  que receba uma data (dia e mês) e retorne a estação do ano correspondente.
function obterEstacaoAno(dia, mes) {
    if ((mes === 3 && dia >= 20) || (mes === 4) || (mes === 5) || (mes === 6 && dia < 21)) {
        return 'outono';
    }
    else if ((mes === 6 && dia >= 21) || (mes === 7) || (mes === 8) || (mes === 9 && dia < 23)) {
        return 'inverno';
    }
    else if ((mes === 9 && dia >= 23) || (mes === 10) || (mes === 11) || (mes === 12 && dia < 21)) {
        return 'primavera';
    }
    else {
        return 'verão';
    }
}
// Exemplo de uso
var dia = 27;
var mes = 9;
var estacao = obterEstacaoAno(dia, mes);
console.log('Estação da data:', estacao);
