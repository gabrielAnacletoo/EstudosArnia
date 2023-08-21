// type TipoOperacao = {
//   soma: string
//   multiplicacao: string
//   subtracao: string
//   divisao: string
// }
function Operacoes(num1, num2, operacao) {
    if (operacao === '+') {
        return num1 + num2;
    }
    else if (operacao === '*') {
        return num1 * num2;
    }
    else if (operacao === '-') {
        return num1 - num2;
    }
    else if (operacao === '/') {
        if (num2 === 0) {
            return "Divisão por zero não é permitida.";
        }
        else {
            return num1 / num2;
        }
    }
    return "Operação inválida.";
}
console.log(Operacoes(15,5,'-'))