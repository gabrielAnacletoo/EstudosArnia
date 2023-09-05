function filtrarTabela() {
    var filtro = document.getElementById("filtroRegime").value;
    var linhasTabela = document.querySelectorAll("#dataTable1 tbody tr");
    
    linhasTabela.forEach(function(linha) {
        var colunaRegime = linha.querySelector("td:nth-child(6)"); // Coluna do Regime (começa em 1)
        
        if (!filtro || colunaRegime.textContent === filtro) {
            linha.style.display = "table-row";
        } else {
            linha.style.display = "none";
        }
    });
}
