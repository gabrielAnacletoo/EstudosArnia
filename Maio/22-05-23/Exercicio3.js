// Dado um array de objetos representando pedidos, verifique se todos os pedidos foram entregues 
// (propriedade "entregue" igual a true) ou se há pelo menos um pedido pendente.

const pedidos = [
    {id:1 , pedido: "2 X-Tudos", entregue: true},
    {id:2 , pedido: "3 Pasteis de Queijo", entregue: true},
    {id:3 , pedido: "1 Pizza de Calabresa", entregue: false},
    {id:4 , pedido: "1 X-Salada com coca-cola", entregue: true},
    {id:5 , pedido: "4 Pizzas", entregue: true}


]
// const algumPendente = pedidos.some(pedido => pedido.entregue === false);
// some retorna um booleano 

const pedidosPendentes = pedidos.filter(pedido => pedido.entregue === false);
//retorna todos elementos com propriedade false
const quantidadePendentes = pedidosPendentes.length;
//atribui a variavel a quantidade de elementos que pedidos pendentes tem
if (quantidadePendentes > 1) {
    console.log(`Existem ${quantidadePendentes} pedidos com entrega pendentes.`)
} else {
    console.log(`Existe ${quantidadePendentes} pedido com entrega pendente.`)
}