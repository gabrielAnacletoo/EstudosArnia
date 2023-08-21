//FUNÇÃO MODAL
let OpenModal = document.querySelector("#btnAdicionar");

OpenModal.addEventListener("click", () => {
  dialog.showModal();
});

let FecharModal = document.querySelector("#FecharModal");
Close.addEventListener("click", (e) => {
    e.preventDefault();
  dialog.close();
});

//========================================================================>
//BOTÃO ADICIONAR
let AddCar = document.querySelector("#Adicionar");
AddCar.addEventListener("click", async (e) => {
  e.preventDefault(); //evita que a  pagina seja carregada

  //pega os valores
  const marca = document.querySelector('input[name="Marca"]').value;
  const modelo = document.querySelector('input[name="Modelo"]').value;
  const cor = document.querySelector('input[name="Cor"]').value;
  const combustivel = document.querySelector('input[name="Combustivel"]').value;
  const fotoURL = document.querySelector('input[name="Foto"]').value;

  // Criando objeto com os valores do formulário
  const novoCarro = {
    id: "",
    Marca: marca,
    Modelo: modelo,
    Cor: cor,
    Combustivel: combustivel,
    FotoURL: fotoURL,
  };
  // Chamando a função para adicionar o novo objeto ao arquivo JSON
  await createPost(novoCarro);
  // Atualizando a página para mostrar o novo objeto adicionado
  location.reload();
});
//========================================================================>
//BOTÃO ADICIONAR

/*
Código Editar e Excluir
========================================================================
*/
const createPost = async (post) => {
  await fetch("http://localhost:3000/carros", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
};


const edit = async (id, post) => {
  await fetch(`http://localhost:3000/carros/${id}`, {
    method: "PUT",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
}
const deletePost = async (id) => {
  await fetch(`http://localhost:3000/carros/${id}`, {
    method: "DELETE"
  })
}
// Exibir carros 
const exibirestoque = document.querySelector("#estoque");

window.addEventListener('load', async () => {
  try {
    const url = "http://localhost:3000/carros";
    const requestveiculos = await fetch(url);
    const resultadoreq = await requestveiculos.json();

    let html = "";
    resultadoreq.forEach(carro => {
      if (carro.id != ""){
        html += `
          <div id="card"> 
            <span>Marca: <b>${carro.Marca}</b><br>
            Modelo: <b>${carro.Modelo}</b><br>
            Cor:<b>${carro.Cor}</b><br>
            Combustivel: <b>${carro.Combustivel}</b></span><br>
            Galeria: <img src="${carro.FotoURL}"> <br>
            <button class="editar" title="Editar" data-id="${carro.id}"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class="deletar" title="Deletar" data-id="${carro.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
      }
    });

    exibirestoque.innerHTML = html;

    // Adicionar event listeners para cada botão de editar
    const editarBotoes = document.querySelectorAll(".editar");
    editarBotoes.forEach(botao => {
      botao.addEventListener('click', async () => {
        const id = botao.getAttribute("data-id");
        const url = `http://localhost:3000/carros/${id}`;
        const requestcarro = await fetch(url);
        const carro = await requestcarro.json();

        // Preencher formulário de edição com os dados do carro
        document.querySelector('input[name="Marca"]').value = carro.Marca;
        document.querySelector('input[name="Modelo"]').value = carro.Modelo;
        document.querySelector('input[name="Cor"]').value = carro.Cor;
        document.querySelector('input[name="Combustivel"]').value = carro.Combustivel;
        document.querySelector('input[name="Foto"]').value = carro.FotoURL;
        
        // Abrir modal de edição
        dialog.showModal();
      });
    });
    const excluirbtn = document.querySelectorAll(".deletar");
    excluirbtn.forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute("data-id");
        await deletePost(id);
        location.reload();
  })
})

  } catch (error) {
    console.log(error);
  }
});

