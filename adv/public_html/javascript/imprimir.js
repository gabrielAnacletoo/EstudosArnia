document.addEventListener('DOMContentLoaded', function() {
    function changeDatabase() {
        const select = document.getElementById("changeDatabase");
        const selectedDatabase = select.value;

        const checkboxes = document.querySelectorAll(".select-checkbox:checked");

        if (checkboxes.length > 0) {
            const selectedIds = Array.from(checkboxes).map((checkbox) =>
                checkbox.closest("tr").getAttribute("data-id")
            );

            // Enviar os IDs e o novo banco de dados para o servidor
            const formData = new FormData();
            formData.append("database", selectedDatabase);
            formData.append("ids", JSON.stringify(selectedIds));

            fetch("../service/change_database.php", {
                method: "POST",
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        // Atualizar a página ou realizar qualquer outra ação necessária
                        location.reload();
                    } else {
                        // Lidar com erros, se houver
                        console.error("Erro ao mudar de banco de dados");
                    }
                })
                .catch((error) => {
                    console.error("Erro ao comunicar com o servidor", error);
                });
        } else {
            // Lidar com a situação em que nenhum registro está selecionado
            console.log("Nenhum registro selecionado");
        }
    }

    // Adicionar um ouvinte de evento para o menu select
    const changeDatabaseSelect = document.getElementById("changeDatabase");
    changeDatabaseSelect.addEventListener("change", changeDatabase);

    document.getElementById('printButton').addEventListener('click', function() {
        const selectedRows = document.querySelectorAll('.select-checkbox:checked');
        if (selectedRows.length > 0) {
            let printContent = '<table style="width: 100%; border-collapse: collapse; font-size: 12px; border: 1px solid #000;"><thead><tr><th style="border: 1px solid #000; padding: 5px;">Nome</th><th style="border: 1px solid #000; padding: 5px;">Matrícula</th><th style="border: 1px solid #000; padding: 5px;">Processo</th><th style="border: 1px solid #000; padding: 5px;">Data</th><th style="border: 1px solid #000; padding: 5px;">Regime</th><th style="border: 1px solid #000; padding: 5px;">Unidade</th><th style="border: 1px solid #000; padding: 5px;">Anotações</th></tr></thead><tbody>';
            selectedRows.forEach(row => {
                const rowElement = row.closest('tr'); // Encontra a linha da tabela pai
                const columns = rowElement.querySelectorAll('td');

                // Crie um array para armazenar o conteúdo de cada célula da linha, exceto a última coluna
                const rowData = [];
                for (let i = 1; i < columns.length - 1; i++) {
                    const content = columns[i].textContent.trim();
                    rowData.push(content);
                }

                // Aqui, você pode diretamente adicionar a variável de anotações do PHP
                const anotacoes = rowElement.getAttribute('data-anotacoes'); // Obtém as anotações não formatadas

                rowData.push(anotacoes); // Adicione esta linha para incluir as anotações na impressão

                printContent += '<tr><td style="border: 1px solid #000; padding: 5px;">' + rowData.join('</td><td style="border: 1px solid #000; padding: 5px;">') + '</td></tr>';
            });
            printContent += '</tbody></table>';

            const printWindow = window.open('', '_blank');
            printWindow.document.open();
            printWindow.document.write('<html><head><title>Impressão</title></head><body>' + printContent + '</body></html>');
            printWindow.document.close();

            // Adicione um pequeno atraso antes de chamar a função print para garantir que os dados sejam renderizados adequadamente
            setTimeout(function() {
                printWindow.print();
            }, 1000);
        }
    });
});
