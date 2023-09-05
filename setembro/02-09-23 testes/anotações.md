=================================================================
o node por padrao ja tem biblioteca de testes
chamada

assertion

const assert = require("assert")

function sum(x,y){
    return x+y
}

assert.equal(sum(2,2),4)
=================================================================
//arquivo de teste
usamos o nome.test.js ou nome.spec.js

1 - começamos com preparação
const x = 2
const y = 3
const expected = 5

2 - execução
const result = sum(x,y)

3 - experado (expect é exclusiva do jest)
expect(result).toEqual(expected)
===============================================================
e na função:
function sum(x,y){
if(x < 0){
    return -1;
}
return x+y
}

===============================================================
