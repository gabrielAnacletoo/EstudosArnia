function getRandomNumber (){
    return new Promise((resolve,reject) => { //resolve nome da promise
        setTimeout(() => {
           const randomNumber = (Math.random()*10).toFixed(2)//gera numero aleatório
           if (randomNumber < 7) {
            reject("Número aleatório menor que 7")
           } else {
            resolve(randomNumber)//promisse recebe numero aleatório
           }         
        }, 1000); //espera 1 segundo
    })
}


//Chamando a function
getRandomNumber().then((success) => { //then se cair no then, passamos sucess como parametro
    console.log('Sucess: ', success)// se der true , retorna sucesso
}).catch((error) => {
    console.log('Erro: ', error)
})