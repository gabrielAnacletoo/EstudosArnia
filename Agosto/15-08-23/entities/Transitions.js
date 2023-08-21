/*
## Transaction
value -> number
description -> string
kind -> 'withdraw' or 'deposit'
createdAt -> Date
canceledAt -> Date
*/

class Transition {
    constructor(data){
        this.value = data.value
        this.description = data.description
        this.kind = data.kind
        this.createdAt = new Date().toLocaleDateString('pt-BR');
        this.canceledAt = null
    }
}

export { Transition }