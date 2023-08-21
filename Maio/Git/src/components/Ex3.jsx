/*
Crie um componente que exiba uma lista de produtos.
O array de produtos deverá ser criado por você.
Se o produto estiver em estoque, exiba o preço e um botão de
“Adicionar ao carrinho”. Caso contrário, exiba uma mensagem
informando que o produto está esgotado. Exemplo de objeto:

const produtos = [
	{
		name: “Detergente”,
		stock: 23,
		price: 3.4
  },
  {
  	name: “Veja Limpeza Pesada”,
		stock: 0,
		price: 5.4
  }
]
*/

const produtos = [
	{
		name: "Detergente",
		stock: 23,
		price: 3.4
  },
  {
    name: "Veja Limpeza Pesada",
		stock: 0,
		price: 5.4
  }
]

function converterParaReal (valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

export default function Ex3 () {
  return (
    <div className="products">
      <h1>Carrinho</h1>
      <hr />

      {produtos.map((product, index) => (
        <div key={`product-${index}`} className="product-item">
          <h3>{product.name}</h3>
          {product.stock > 0 ? (
            <>
              <p>{converterParaReal(product.price)}</p>
              <button>Adicionar ao carrinho</button>
            </>
          ) : (
            <p>Esgotado</p>
          )}
          <hr />
        </div>
      ))}
    </div>
  )
}
