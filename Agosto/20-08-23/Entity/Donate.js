

class Donate {
   constructor(data){
    this.title = data.title
    this.description = data.description 
    this.city = data.city
    this.location = data.localizacao
    this.phoneNumber = data.phoneNumber
    this.isDonated = false
    this.createdAt = new Date().toLocaleDateString('pt-BR');
    this.deleted = false
   }
}

export { Donate }