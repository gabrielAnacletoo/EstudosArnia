// Dado um array de objetos representando usuários, encontre o nome do primeiro usuário que
//  tenha idade superior a 18 anos e cujo nome comece com a letra "A".

const Users = [
    { id: 1, name: "Gabriel", age: 29, country: "Brasil"},
    { id: 2, name: "Maria", age: 16, country: "Brasil"},
    { id: 3, name: "José", age: 18, country: "Brasil"},
    { id: 4, name: "Clarina", age: 11, country: "Brasil"},
    { id: 5, name: "Antonio Julio", age: 92, country: "Brasil"}
]


const primeiroUsuario = Users.find(usuario => usuario.age > 18 && usuario.name.startsWith("A"))
//find usa uma callback com nome de usuario que retorna idade maior que 18 E nome que começa com A

if (primeiroUsuario) {//se for true exibe esta mensagem
    console.log("Nome do primeiro usuário com idade superior a 18 anos e que começa com a letra 'A':", primeiroUsuario.name);
} else {
    console.log("Nenhum usuário encontrado com as condições especificadas.")
}