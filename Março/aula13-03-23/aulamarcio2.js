class pessoa {
    constructor (id,nome,sexo,dataNascimento) {
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento
    }   
}

let p1 = new pessoa(1, "gabriel", "Masculino", 1994)
let p2 = new pessoa(2, "Isabela", "Feminino", 1996)
console.log(p1.id,p1.nome,p1.sexo,p1.dataNascimento)
console.log(p2.id,p2.nome, p2.sexo,p2.dataNascimento)
