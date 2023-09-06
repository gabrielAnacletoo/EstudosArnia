const {MakeProduct} = require("./teste01.js")

test('Deve Retornar um objeto produto válido', () => {
    const mock = {name: 'S22', price: 7000}

    const result = MakeProduct(mock)

    expect(result.name).toBe(mock.name)
    expect(result.price).toBe(mock.price)
    expect(result.startRating).toBe(0)
    expect(result.createdAt).toBeTruthy()
})

test('deve retornar uma excessao passando um objeto produto invalido', () => {
    const mock = { price: 6000 }
    const result = () => MakeProduct(mock)
    expect(result).toThrow('Missing parameters for MakeProduct')
  })