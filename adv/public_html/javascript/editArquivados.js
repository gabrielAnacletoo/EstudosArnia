    const tableRows = document.querySelectorAll('.table-row');

    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            const id = row.getAttribute('data-id');
            const nome = row.getAttribute('data-nome');
            const matricula = row.getAttribute('data-matricula');
            const processo = row.getAttribute('data-processo');
            const data = row.getAttribute('data-data');
            const selecao = row.getAttribute('data-selecao');
            const unidade = row.getAttribute('data-unidade');
            const anotacoes = row.getAttribute('data-anotacoes');

            const url = `../routers/pagina_detalhes_arquivados.php?nome=${nome}&id=${id}&matricula=${matricula}&processo=${processo}&data=${data}&selecao=${selecao}&unidade=${unidade}&anotacoes=${anotacoes}`;
            window.location.href = url;
        });
    });
