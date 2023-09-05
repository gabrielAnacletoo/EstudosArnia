function formatarProcesso(input) {
    // Remove todos os caracteres não numéricos da entrada
    var valor = input.value.replace(/\D/g, '');

    // Adiciona os separadores no formato desejado
    var novoValor = '';
    if (valor.length > 0) {
        novoValor += valor.substr(0, 7);
        novoValor += '-' + valor.substr(7, 2);
        novoValor += '.' + valor.substr(9, 4);
        novoValor += '.' + valor.substr(13, 1);
        novoValor += '.' + valor.substr(14);
    }

    input.value = novoValor;
}
