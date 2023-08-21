import { useContext } from "react"
import { ShoppingCartContextType } from "../../context/ShoppingCart"

const products: Array<ShoppingItem> = [
    {name: "Tenis", price: 99.99, quantity: 10},
    {name: "Boné", price: 69.99, quantity: 12},
    {name: "Camiseta", price: 39.99, quantity: 22},

]

const ProductList = () => {
    const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContextType)
    return(
        <div>
            {products.map((product) => <div>
            <p>{product.name} - R$: {product.price}
            Disponivel: {product.quantity}
            <button onClick={() => setShoppingCart({...shoppingCart,
            items: [...shoppingCart.items,product],})}>Adicionar ao carrinho</button>
            </p>
            </div> )}
        </div>
    )
}
export default ProductList