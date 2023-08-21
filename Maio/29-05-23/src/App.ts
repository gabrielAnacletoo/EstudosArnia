// type TipoOperacao = {
//   soma: string
//   multiplicacao: string
//   subtracao: string
//   divisao: string
// }

type Operacao = "+" | "*" | "-" | "/";

function Operacoes(num1: number, num2: number, operacao: Operacao): number | string {
  if (operacao === '+') {
    return num1 + num2;
  } else if (operacao === '*') {
    return num1 * num2;
  } else if (operacao === '-') {
    return num1 - num2;
  } else if (operacao === '/') {
    if (num2 === 0) {
      return "Divisão por zero não é permitida.";
    } else {
      return num1 / num2;
    }
  }

  return "Operação inválida.";
}

