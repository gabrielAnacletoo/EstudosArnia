// Exercício 3: 

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}
// Crie um novo tipo ProductForm que seja uma versão modificada da 
// interface Product, removendo as propriedades id e price, e 
// adicionando uma propriedade opcional quantity do tipo number.


type ProductForm = Omit<Product, 'id' | 'price'> & {
    quantity?: number;
}