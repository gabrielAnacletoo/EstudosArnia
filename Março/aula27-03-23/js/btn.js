const url = "http://localhost:3000/quiz"
const createPost = async (post) => {
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };
  




const addQuiz = document.querySelector("#btnadd")



addQuiz.addEventListener("click", async (e) => {
  e.preventDefault(); //evita que a  pagina seja carregada

  //pega os valores
  const pergunta = document.querySelector('#pergunta').value;
  const alternativa1 = document.querySelector('#alternativa1').value;
  const alternativa2 = document.querySelector('#alternativa2').value;
  const alternativa3 = document.querySelector('#alternativa3').value;
  const alternativaCorreta = document.querySelector('#alternativaCorreta').value;

  // Criando objeto com os valores do formulário
  const formComplet = {
    id: "",
    Pergunta: pergunta,
    alternativa1: alternativa1,
    alternativa2: alternativa2,
    alternativa3: alternativa3,
    alternativaCorreta: alternativaCorreta,
  };
  if (pergunta === '' || alternativa1 === '' || alternativa2 === '' || alternativa3 === '' || alternativaCorreta === '') {
    alert("Você Precisa Preencher os campos")
  } else {
  // Chamando a função para adicionar o novo objeto ao arquivo JSON
  await createPost(formComplet);
  alert("Pergunta Cadastrada com sucesso")
  // Atualizando a página para mostrar o novo objeto adicionado
  location.reload();}
});
//========================================================================>


const exibirQuiz = document.querySelector("#btnExibir");
const modalexibir = document.querySelector("#modal-body")
exibirQuiz.addEventListener("click", async() => {
try {
    const url = "http://localhost:3000/quiz";
    const requestquiz = await fetch(url);
    const resultquiz = await requestquiz.json();
    let modalshow = ''
    resultquiz.forEach(Quizbd => {
        if(Quizbd.id != "") {    
        modalshow += `
        <p>Pergunta : <b>${Quizbd.Pergunta}</b></p>
        <p>Alternativa Correta : <b style="color:green;">${Quizbd.alternativaCorreta}</b></p><hr>
        `;
        }
    });
    modalexibir.innerHTML = modalshow;

} catch (error){
    console.log(error)
}

})