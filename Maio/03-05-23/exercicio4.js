// Escreva uma função que recebe um número e retorna uma Promise que é rejeitada se o número for negativo

function Negativo(numero) {
    return new Promise((resolve,reject) => {
           if (numero < 0) {
            reject('Numero negativo')
           }
    })
   }
   
   const valor = -5;
   Negativo(valor).then((Resposta) => {
       console.log(`Caiu no then ${Resposta}`)
   }).catch((error) => {
    console.log(`Ocorreu um erro: ${error}`)
   })