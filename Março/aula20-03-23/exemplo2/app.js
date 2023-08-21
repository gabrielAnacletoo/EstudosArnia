const timestamp = (new Date()).getTime();
const publicKey = 'd0d76a60dcc1d76a2227bc2debaca41c';
const privateKey = '92eab95f3d5ee3fc201dbf74e7d984192599f316';
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`);

promise.then(response => {
  response.json().then(res => {
    console.log(res);
    res.data.results.forEach(character => {
      let series = '';
      character.series.items.forEach(series => {
        series += `${series.name}<br>`
      })
      let comics = '';
      character.comics.items.forEach(comic => {
        comics += `${comic.name}<br>`;
      });
      document.getElementById('card').innerHTML += `
      <div style="background-color:#E9E9E9;padding:10px;width:500px;display: flex;border-radius:5px;font-family: 'Poppins', sans-serif;font-size: 16px;border: 1px solid #777777;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
        <div>
          <img src="${character.thumbnail.path}.${character.thumbnail.extension}" style="width:15em;height: 18em; border-radius:5px;">
        </div>
        <div style="margin-left:1em;">
          <h3>${character.name}</h3>

          <p style="font-size:13px"><b>Revistas:</b><br> ${character.comics.items.slice(0, 2).map(comic => comic.name).join("<br>")}</p>
          <p style="font-size:13px"><b>Series:</b><br> ${character.series.items.slice(0, 2).map(series => series.name).join("<br>")} </p>
        </div>
      </div>
      `;
    });
  });
}).catch(error => {
  console.log('Erro: ' + error);
});
