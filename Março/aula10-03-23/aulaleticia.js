// let array = [3,5,6,1,8,9];

// array = array.filter((elemento) =>  {
//     if(elemento % 2 ===0) 
//         return true
// })

// console.log(array)


// let array = [10,20,30,40,50,60,70];

// const somaTotal = array.reduce((soma, elemento) => {
//     return elemento % 2 === 0
// }, 0)


const soma = [5, 10, 5, 10, 5, 5];

const somaTotal = soma.reduce((total, quantidade) => {
    return total + quantidade
})
 

console.log(somaTotal)


// Nesse exemplo, reduce aceita dois parâmetros, o total e o valor atual.
// O método reduce passa por cada número do array como se fosse um laço for.
// Quando o laço começa, o valor de total é o número na extrema esquerda (5) e o valor atual é o número ao seu lado (10).
// No exemplo específico, queremos adicionar o valor atual ao total.
// O cálculo é repetido para cada valor no array, mas, a cada momento. o valor atual passa a ser o próximo número no array, indo em direção à direita.
// Quando não houver mais números para se ler no array, o método retorna o valor total.

