function NumbersWord (palavra) {
    return new Promise((resolve,reject) => {
        let tamanho = palavra.length;
        resolve(tamanho)
    })
}

const testeDeTamanho = 'Esta é uma frase de teste';
NumbersWord(testeDeTamanho).then((Resposta) => {
    console.log('Resposta: ', Resposta);
}).catch((error) => {
    console.log('Erro: ', error);
});