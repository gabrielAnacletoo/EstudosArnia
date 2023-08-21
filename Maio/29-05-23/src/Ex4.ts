// Escreva uma função que realiza uma 
// requisição HTTP. Você deverá passar a url,
//  o método, o body e os headers para a função. O body deverá ser opcional,
//   enquanto que o restante é obrigatório. Para definir um tipo como opcional,
//    basta utilizar uma interrogação na definição do tipo, por exemplo:
// function chamarNome (nome?: string) {}


type HttpMethod = 'GET' | 'POST' | 'PULL' | 'DELETE';

type RequestHttp = {
url:string
headers: object
body?:object
}


// function loadurl ({url, headers, body}: RequestHttp){

// }

// console.log(loadurl({
//     headers: {},
//     url: ''

// }))