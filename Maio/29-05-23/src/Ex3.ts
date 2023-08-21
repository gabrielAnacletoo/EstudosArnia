// Desenvolva um tipo literal chamado "GeneroMusical" que represente diferentes
//  gêneros musicais ('rock', 'pop', 'hip hop', 'jazz'). Crie uma função que
//   receba um parâmetro do tipo "GeneroMusical" e retorne uma 
// mensagem personalizada com uma recomendação de música do gênero informado.

type GeneroMusical = 'rock' | 'pop' | 'hiphop' | 'jazz'

function Musica (genero: GeneroMusical): string {
    if (genero === 'rock') {
        return 'Recomendação : We will rock you - Queen'
    } else if (genero === 'pop') {
        return 'Recomendação: Billie Jean - Michael Jackson'
    } else if (genero === 'hiphop') {
        return 'Recomendação: Lose Your Self - Eminem'
    } else if (genero === 'jazz') {
        return 'Recomendação: Take Five - Dave Brubeck'
    }  else {
        throw new Error('Gênero musical invalido.')
      }
}
console.log()