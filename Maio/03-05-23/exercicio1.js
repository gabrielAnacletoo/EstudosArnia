function Numbers() {
    array = [1,2,3,4,5,6,7]
    return new Promise((resolve,reject) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    resolve(soma);
    })
}

Numbers().then((Somas) => {
    console.log('Valor: ', Somas);
}).catch((error) => {
    console.log('Erro: ', error)
})