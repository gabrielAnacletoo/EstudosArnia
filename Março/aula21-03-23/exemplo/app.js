const timestamp = new Date().getTime();
const publicKey = '69eabe3f27314e413717d549848035ba';
const privateKey = '0be969e4b5185551309c1da92bc3cfcec182eb32';
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);
const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}&orderBy=-modified&limit=100`;

const idspopulares = [73, 98, 85, 83, 82, 81, 80, 79, 77, 76, 75, 36];
const exibir = document.querySelector("#lista-personagens");
const exibircomics = '';
const exibirmovies = '';

async function getPopularCharacters() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const popularCharacters = result.data.results;

    let html = ""; // string vazia para armazenar o HTML de todos os personagens

    for (let i = 0; i < idspopulares.length; i++) {
      const index = idspopulares[i];
      html += `
      <div id="resultado" style="display: inline-block">
        <p>${popularCharacters[index].name}</p>
          <img src="${popularCharacters[index].thumbnail.path}.${popularCharacters[index].thumbnail.extension}">
      </div>`;
    }

    exibir.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}

getPopularCharacters();
