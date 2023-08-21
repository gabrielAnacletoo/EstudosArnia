const timestamp = new Date().getTime();
const publicKey = "rXiZatb23uXRq9waTINuBkECVELi7a1N";
let content = document.getElementById("temperatura");
let ventos = document.querySelector("#wind");
let rains = document.querySelector("#chuvas");

document
  .getElementById("botao-pesquisar")
  .addEventListener("click", async (event) => {
    event.preventDefault(); // Evita que a página seja atualizada

    const local = document.getElementById("localidade").value;
    const url = `http://dataservice.accuweather.com/locations/v1/search?q=${local}&apikey=${publicKey}`;

    const resposta = await fetch(url);
    const result = await resposta.json();
    // console.log(result)
    const locationKey = result[0].Key;

    const urlTemp = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${publicKey}&details=true`;

    const respostaTemp = await fetch(urlTemp);
    const resultTemp = await respostaTemp.json();

    const temperatura = resultTemp[0].Temperature.Metric.Value;
    const unidade = resultTemp[0].Temperature.Metric.Unit;
    const velocidade = resultTemp[0].Wind.Speed.Metric.Value;
    const velocidadeunidade = resultTemp[0].Wind.Speed.Metric.Unit;
    let chuvas = resultTemp[0].WeatherText;
    console.log(resultTemp[0].WeatherText);
    if (chuvas === "Clear") {
      chuvas = "0%";
    }

    // atualiza o conteúdo da div modal com a resposta
    content.innerHTML = `<p>${temperatura} ${unidade}</p> `;
    ventos.innerHTML = `<p>${velocidade} ${velocidadeunidade}</p> `;
    rains.innerHTML = `<p>${chuvas} </p>`;
  });
