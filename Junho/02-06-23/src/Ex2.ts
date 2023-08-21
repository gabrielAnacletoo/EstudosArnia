// Exercício 2:  Considere a seguinte interface representando um carro:

interface Car {
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
}
// Crie um novo tipo CarSummary utilizando 
// Pick para selecionar apenas as propriedades brand, model e year da interface Car.


type CarSummary = Pick<Car, "brand" | "model" | "year">