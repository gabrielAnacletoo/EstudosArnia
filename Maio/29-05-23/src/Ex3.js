// Desenvolva um tipo literal chamado "GeneroMusical" que represente diferentes
//  gêneros musicais ('rock', 'pop', 'hip hop', 'jazz'). Crie uma função que
//   receba um parâmetro do tipo "GeneroMusical" e retorne uma 
// mensagem personalizada com uma recomendação de música do gênero informado.
function Musica(genero) {
    if (genero === 'rock') {
        return 'Recomendação de Música Rock: We will rock you - Queen';
    }
    else if (genero === 'pop') {
        return 'Recomendação de Música Pop: Billie Jean - Michael Jackson';
    }
    else if (genero === 'hiphop') {
        return 'Recomendação de Música hip-hop: Lose Your Self - Eminem';
    }
    else if (genero === 'jazz') {
        return 'Recomendação de Música Jazz: Take Five - Dave Brubeck';
    }
    else {
        throw new Error('Gênero musical invalido.');
    }
}
console.log(Musica('jazz'));
