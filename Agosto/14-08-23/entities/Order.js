/*
## Pedido
- Nome do produto -> string
- Endereço do comprador -> string
- Nome do comprador -> string
- Data do pedido -> string
- Pedido entregue -> boolean
*/

class Order {
    constructor(data){
        this.nameProduct = data.nameProduct
        this.adress = data.adress
        this.nameBuyer = data.nameBuyer
        this.orderDate = new Date().toLocaleDateString('pt-BR')
        this.delivered = data.delivered
    }
}

export {Order}