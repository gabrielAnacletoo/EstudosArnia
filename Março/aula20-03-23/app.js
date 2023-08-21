
const promise = new Promise((resolve, reject) => {
  /**
   * Adicionando setTimeout para exemplificar o tempo que 
   * uma promise demoraria para responder
   */
  setTimeout(() => {
    /**reject
     * Respondendo o que a promise gostaria
     */
    resolve('Ola mundo!')
    /**
     * "reject" para retornar erro
     * reject('Ola mundo!');
     */
    
  }, 300)
})

promise.then(response => {
  console.log(response)
}).catch(error => {
  console.log('Erro: ' + error)
});
