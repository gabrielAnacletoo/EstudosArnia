// Crie um tipo chamado Person. Este tipo deverá possuir: nome, idade,  cpf, data de nascimento e 
// número da certidão de 
// casamento (opcional).


type Person = {
    nome: string;
    idade: number;
    cpf: number;
    dataNascimento: number;
    certidaoCasamento?: number;
  }

  type PartialPerson = Partial<Person>;


// Crie uma função chamada updatePerson que atualize as informações de uma pessoa. 
// A função deve receber um objeto do tipo PartialPerson e um objeto do tipo Person. 
// A função deve retornar um novo objeto do tipo Person com as informações atualizadas. 


function updatePerson(partialPerson: PartialPerson, person: Person): Person {
return {
    nome: person.nome,
    idade: person.idade,
    cpf: person.cpf,
    dataNascimento: person.dataNascimento,
    certidaoCasamento: person.certidaoCasamento
}
}

// Crie uma função chamada createPerson que crie uma nova pessoa. 
// A função deve receber um objeto do tipo RequiredPerson. 
// A função deve retornar um novo objeto do tipo Person com as informações fornecidas.

type RequiredPerson = Required<Person>
function createPerson(required: RequiredPerson): Person {
return{
    nome: required.nome,
    idade: required.idade,
    cpf: required.cpf,
    dataNascimento: required.dataNascimento,
    certidaoCasamento: required.certidaoCasamento
}
}


// Crie uma função chamada createRecord que crie um novo 
// objeto do tipo Record. A função deve receber um array de objetos do 
// tipo Person. A função deve retornar um novo objeto do tipo RecordPerson.

type RecordPerson = Record<string, Person>
//permite que as chaves sejam strings e as propriedades de Person
//exemplo chave = joao: { nome: "joao", idade: 29}

// function createRecord (persons: Person[]): RecordPerson {
//     const returnRecord: RecordPerson = {}
//     return returnRecord;
// }

function CreateRecord(persons: Person[]): RecordPerson {
    const returnRecord: RecordPerson = {}
  
    persons.forEach((person, index) => {
      returnRecord[`person${index + 1}`] = person;
    })
  
    return returnRecord;
  }

  export default CreateRecord