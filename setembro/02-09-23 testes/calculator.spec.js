const calculator = require("./calculator.js")

describe("Calculator class", () => {
    it("Should sum two numbers", () => {
        expect(calculator.sum(4,3)).toBe(7)
    })

    it("Should multiply two numbers", () => {
        expect(calculator.multiply(5,5)).toBe(25)
    })

    it("Should divide two numbers", () => {
        expect(calculator.divide(20,5)).toBe(4)
    })


})