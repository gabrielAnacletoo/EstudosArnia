function BoasVindas(nome, idade, isProfessor) {
    var prefixo = '';
    if (isProfessor) {
        prefixo = "Prof.";
    }
    return "Seja bem-vindo(a), ".concat(prefixo, " ").concat(nome, " ").concat(idade, " anos");
}
var nomeAluno = "Gabriel";
var idadeAluno = 29;
var Professor = false;
var MsgAluno = BoasVindas(nomeAluno, idadeAluno, Professor);
var nomeProf = "Lucas";
var idadeProf = 30;
var isProfessor = true;
var MsgProfessor = BoasVindas(nomeProf, idadeProf, isProfessor);
console.log(MsgProfessor);
console.log(MsgAluno);
