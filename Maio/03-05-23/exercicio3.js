// Escreva uma função que recebe um número e retorna uma Promise que é resolvida com o quadrado do número.

function Quadrado(numero) {
 return new Promise((resolve) => {
        const promessa = Math. sqrt(numero)
        resolve(promessa)
 })
}

const valor = 10;
Quadrado(valor).then((Resposta) => {
    console.log(`A Raiz Quadrada do valor passado é  ${Resposta.toFixed(2)}`)
})