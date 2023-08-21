function BoasVindas(nome: string, idade:number, isProfessor:boolean): string {
  let prefixo = '';

  if (isProfessor) {
    prefixo = "Prof."
  }
  return `Seja bem-vindo(a), ${prefixo} ${nome} ${idade} anos`
}

const nomeAluno = "Gabriel";
const idadeAluno = 29;
const Professor = false;
const MsgAluno = BoasVindas(nomeAluno, idadeAluno,Professor)

const nomeProf = "Lucas"
const idadeProf = 30;
const isProfessor = true;
const MsgProfessor = BoasVindas(nomeProf,idadeProf,isProfessor)
console.log(MsgProfessor)
console.log(MsgAluno)