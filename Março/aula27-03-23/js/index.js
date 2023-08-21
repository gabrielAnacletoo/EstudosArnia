const url = "http://localhost:3000/quiz"

const comecar = document.querySelector("#start");
const questions = document.querySelector("#content")
let questoes = [];
let pontuacao = 0; //pontos a serem incrementados caso acerte
let perguntaAtual = 1; //esse vai ser o indice

comecar.addEventListener("click", async(e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:3000/quiz";
        const requestquiz = await fetch(url);
        const resultquiz = await requestquiz.json();
        questoes = resultquiz; //questos recebeu os aways 
        questaoFormat(perguntaAtual);
    } catch (error){
        console.log(error)
    }
})

function questaoFormat(index) {
    const question = questoes[index]; //[index] é o valor que Pagina atual recebe
    const questionHTML = `
        <div class="card-body">
        <h5 class="card-title"> ${question.Pergunta}</h5>
        <div class="text-start">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="alternativa" id="alternativa1" value="${question.alternativa1}">
          <label class="form-check-label" for="alternativa1">
            ${question.alternativa1}
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="alternativa" id="alternativa2" value="${question.alternativa2}">
          <label class="form-check-label" for="alternativa2">
            ${question.alternativa2}
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="alternativa" id="alternativa3" value="${question.alternativa3}">
          <label class="form-check-label" for="alternativa3">
            ${question.alternativa3}
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="alternativa" id="alternativaCorreta" value="${question.alternativaCorreta}">
          <label class="form-check-label" for="alternativaCorreta">
            ${question.alternativaCorreta}
          </label>
        </div>
        <div class="text-end">
          <button class="btn btn-xl btn-primary" id="next-question">Próxima Pergunta</button>
        </div>
      </div>`;
    questions.innerHTML = questionHTML;


    //FUNÇÃO DO BOTAO PROXIMA PERGUNTA
    const nextButton = document.querySelector('#next-question');
    nextButton.addEventListener('click', () => {
        const alternativas = document.querySelectorAll('input[name="alternativa"]:checked'); //pega todos os inputs com name alternativa e checados
        if (alternativas.length > 0) {
        const respostaSelecionada = alternativas[0].value;
        const alternativaCorreta = question.alternativaCorreta;
        if (respostaSelecionada === alternativaCorreta) {
        pontuacao++;
        }
        perguntaAtual++;
        if (perguntaAtual === questoes.length) {
        const resultado = `<div class="card-body"> <h5 class="card-title" style="color:green;">Quiz Finalizado!</h5><img src="img/2705.svg" style="width:10em;border-radius:50%;"> <p>Você acertou ${pontuacao} de ${questoes.length} perguntas</p> </div><br>
        <a href="index.html">Refazer Quiz</a>`;
        questions.innerHTML = resultado;
        } else {
          questaoFormat(perguntaAtual);
        }
        } else {
        alert("Selecione uma alternativa!");
        }
        });
        }
