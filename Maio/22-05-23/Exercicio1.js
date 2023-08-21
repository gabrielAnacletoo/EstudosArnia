// Dado um array de objetos representando produtos, encontre o preço médio dos 
// produtos que estejam em estoque e cujo preço seja superior a R$ 50,00.


const produtos = [
    { id: 1, name: "Mouse", price: 35, amount:0},
    { id: 2, name: "HeadSet", price: 65, amount: 15},
    { id: 3, name: "Teclado", price: 67, amount: 10},
    { id: 4, name: "WebCam", price: 25, amount: 2}
]

const produtosEmEstoque = produtos.filter(produto => produto.amount > 0 && produto.price > 50)
console.log(produtosEmEstoque)
const precosProdutosEmEstoque = produtosEmEstoque.map(produto => produto.price)
console.log(precosProdutosEmEstoque)
//a função map usar produtosEmEstoque e retorna apenas os produtos que tem price maior que 50
const precoMedio = precosProdutosEmEstoque.reduce((total, preco) => total + preco, 0) / precosProdutosEmEstoque.length;
console.log(precoMedio)
//a funcao reduce soma todos os precos dentro de precoProdutosEmEstoque e divide pela quantidade de 
//elementos para saber o preço médio
//console.log("Preço médio dos produtos em estoque e com preço superior a R$ 50,00:", precoMedio)
