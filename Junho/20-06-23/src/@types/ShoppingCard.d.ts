
type ShoppingItem = {
    name:string;
    price: number;
    quantity: number;
}

type ShoppingCart = {
    items: Array<ShoppingItem>
    total: number;
}