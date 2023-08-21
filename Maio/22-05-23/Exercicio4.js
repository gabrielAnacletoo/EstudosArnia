// Dado um array de strings, encontre o número total de caracteres em todas as strings que contenham a 
// letra "a" (maiúscula ou minúscula) e tenham mais de 5 caracteres.

const words = [
    {id: 1 , palavra: "Jogos"},
    {id: 2 , palavra: "Xadrez"},
    {id: 3 , palavra: "Abelhas"},
    {id: 4 , palavra: "Altar"},
    {id: 5 , palavra: "Lógica"},
    {id: 6 , palavra: "analogico"},
]

const totalCaracteres = words
    .filter(word => word.palavra.toLowerCase().includes("a") && word.palavra.length > 5)
    // Filtra as palavras que contêm a letra "a" (maiúscula ou minúscula) e têm mais de 5 caracteres.
    .map(word => word.palavra.length)
    // Mapeia somente as palavras que foram filtradas no filter, ou seja map pega a quantidade de letras de todas as palavras ex: 11
    // map() está sendo usado para criar um novo array contendo os comprimentos das palavras.
    // word.palavra representa cada palavra no array original 
    .reduce((total, length) => total + length, 0);
    // soma a quantidade de todas as letras se baseando nas palavras que map retorna

console.log("O número total de caracteres nas palavras que contêm 'a' e têm mais de 5 caracteres é:", totalCaracteres)


// Sim, o método `includes()` pode ser usado para verificar a presença de qualquer letra, número ou sequência de caracteres em uma string. Ele não se limita apenas a letras ou números específicos.

// Por exemplo, se você deseja verificar se uma palavra contém o número "5", pode usar o método `includes()` da seguinte forma:

// ```javascript
// const palavra = "Olá, mundo 123";
// const contemNumero = palavra.includes("5");
// console.log(contemNumero); // Saída: false
// ```

// Nesse exemplo, a palavra "Olá, mundo 123" não contém o número "5", então o resultado é `false`.

// Da mesma forma, se você deseja verificar a presença de uma sequência de caracteres, como "abc", pode usar o método `includes()` dessa forma:

// ```javascript
// const palavra = "Olá, mundo abc123";
// const contemSequencia = palavra.includes("abc");
// console.log(contemSequencia); // Saída: true
// ```

// Nesse exemplo, a palavra "Olá, mundo abc123" contém a sequência "abc", então o resultado é `true`.

// Em resumo, o método `includes()` pode ser usado para verificar a presença de qualquer caractere, número ou sequência de caracteres em uma string.