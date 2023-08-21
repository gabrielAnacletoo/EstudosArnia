// agora escreva uma funcao em typscript que recebe 3 parametros que 
// serao numeros e inteiros a funcao devera retornar o maior destes parametros
//  porem a funcao devera retornar uma mensagem de erro caso o numero
//  digitado nao seja uma numero inteiro e dizer "o numero {numero} nao é um numero inteiro"
function EncontrarMaior(num1, num2, num3) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || !Number.isInteger(num3)) {
        return "O n\u00FAmero digitado n\u00E3o \u00E9 um n\u00FAmero inteiro.";
    }
    return Math.max(num1, num2, num3);
}
console.log(EncontrarMaior(10, 25, 500));