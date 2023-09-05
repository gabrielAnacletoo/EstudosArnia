    const sum = require("./index.js")


    //ideal que testes comecem com describe
    //it é o que espera que seja feito
    //expect eé o resultado
    describe("Sum function", () => {
    it("Deve ser capaz de somar 2 mais 3 e retornar 5", () => {
        //preparação
        const x = 2
        const y = 3
        const expected = 5

        //execução
        const result = sum(x,y)
 
        //esperado
        expect(result).toEqual(expected)
    })
    })