// agora escreva uma funcao em typscript que recebe 3 parametros que 
// serao numeros e inteiros a funcao devera retornar o maior destes parametros
//  porem a funcao devera retornar uma mensagem de erro caso o numero
//  digitado nao seja uma numero inteiro e dizer "o numero {numero} nao é um numero inteiro"


function EncontrarMaior(num1:number, num2:number, num3:number): number | string {
    if(!Number.isInteger(num1) || !Number.isInteger(num2) || !Number.isInteger(num3)){
        return `O número digitado não é um número inteiro.`
    }
    return Math.max(num1,num2,num3)
}


EncontrarMaior(10,25,500)