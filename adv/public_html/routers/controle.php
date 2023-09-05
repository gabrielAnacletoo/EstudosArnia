<!DOCTYPE html>
<html>

<head>
    <title>Farias Advogados</title>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
<link rel="icon" type="image/png" href="../images/favi.ico">
<script src="https://kit.fontawesome.com/1bd40db174.js" crossorigin="anonymous"></script>
</head>

<body>



    <?php
    // Conexão com o banco de dados
    $conn = mysqli_connect("myshared0309", "advfarias", "M748lmrt61c!", "advfarias");

    // Verifica a conexão
    if (!$conn) {
        die("Erro na conexão: " . mysqli_connect_error());
    }

    // Função para executar uma consulta SQL
    function executeQuery($sql)
    {
        global $conn;
        $result = mysqli_query($conn, $sql);
        return $result;
    }
    // Exibe os dados da tabela
    $query = "SELECT * FROM pessoa ORDER BY dataatual ASC";
    $result = executeQuery($query);

//filtragem
if (isset($_GET['filtroRegime'])) {
    $filtroRegime = $_GET['filtroRegime'];
    
    if ($filtroRegime === "Regime Aberto" || $filtroRegime === "Liberdade Condicional") {
        $query = "SELECT * FROM pessoa WHERE selecao = '$filtroRegime' ORDER BY dataatual ASC";
    }
} else {
    $query = "SELECT * FROM pessoa ORDER BY dataatual ASC";
}

$result = executeQuery($query);






    // Conta o número total de registros da tabela 'pessoa'
$countQuery = "SELECT COUNT(*) AS total FROM pessoa";
$countResult = executeQuery($countQuery);
$countRow = mysqli_fetch_assoc($countResult);
$totalClientes = $countRow['total'];


    // Conta o número total de registros da tabela 'pessoa'
$countQuery = "SELECT COUNT(*) AS total FROM arquivados";
$countResult = executeQuery($countQuery);
$countRow = mysqli_fetch_assoc($countResult);
$totalArquivados = $countRow['total'];

?>

    <div class="container">
        <div class="navside">
            <img src="../images/logo.png" class="logomenu">
            <ul>
                <li><img src="../images/dash.png" class="imgDash"><a href="../index.php"> Dashboard</a></li>
                <li><img src="../images/Clients.png" class="imgDash"><a href="arquivados.php"> Arquivados</a></li>
                <li onclick="openModal();" class="button"><img src="../images/right.png" class="imgDash"> Novo Cliente</li>
                <li>Controle</li>
            </ul>
        </div>
        <div class="modal" id="modal">
            <span class="modal-close" id="close" onclick="closeModal()">X</span>
            <div class="modal-content">
                <form action="../service/process_create.php" method="POST">
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" id="nome" name="nome" autocomplete="off" required>
                    </div>

                    <div class="form-group">
                        <div class="input-row">
                            <label for="matricula">Matrícula</label>
                            <input type="text" id="matricula" name="matricula" autocomplete="off" required>

                            <label for="dataatual">Data</label>
                            <input type="date" id="dataatual" name="dataatual" autocomplete="off" required>

                            <label for="processo">Processo</label>
                            <input type="text" id="processo" name="processo" autocomplete="off" required>

                        </div>


                        <div class="form-radio">
                            <input type="radio" name="selecao" value="Regime Aberto"> Regime Aberto
                          
                            <input type="radio" name="selecao" value="Liberdade Condicional"> Liberdade Condicional

                             &nbsp;&nbsp;&nbsp; <label for="unidade">Unidade</label>
                             <input type="text" id="unidade" name="unidade" autocomplete="off" required>
                        </div>


                        <div class="form-group">
                            <label for="anotacoes">Anotações</label> 
                
                         <textarea id="anotacoes" name="anotacoes" rows="4"></textarea>
                        </div>

                    </div>
            </div>
            <button type="submit" class="BtnEnviar">Enviar</button>
        </div>
        
        </form>


        <div class="overlay" id="overlay" onclick="closeModal()">
        </div>


        <div class="tables">
            <div class="menubar">
                Total de Registros<span class="percentPositive">
                    <?php echo $totalClientes; ?>
                </span> Total Arquivados<span class="percentNegative">
                    <?php echo $totalArquivados; ?>
                </span>

                <input type="text" id="searchInput" class="search-input" placeholder="Pesquisar por nome..."
                    onkeyup="searchNames()">

                <select name="filtroRegime" id="filtroRegime" onchange="filtrarTabela()">
                    <option value="" selected disabled hidden>Filtrar</option>
                    <option value="">Todos</option>
                    <option value="Regime Aberto">Regime Aberto</option>
                    <option value="Liberdade Condicional">Liberdade Condicional</option>
                </select>



            </div>
            <div>
                <table id="dataTable1">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Matrícula</th>
                            <th>Processo</th>
                            <th>Data</th>
                            <th>Regime</th>
                            <th>Unidade</th>
                            <th>anotacoes</th>
                        </tr>
                    </thead>


  <?php
while ($row = mysqli_fetch_assoc($result)) {
    $dataFormatada = date('d/m/Y', strtotime($row['dataatual'])); // Converte a data para formato brasileiro
    
    // Limita as anotações a 10 caracteres
    $anotacoes = $row['anotacoes'];
    $anotacoesFormatada = strlen($anotacoes) > 10 ? substr($anotacoes, 0, 10) . "..." : $anotacoes;

    $unidade = $row['unidade'];
    $unidadeFormatada = strlen($unidade) > 4 ? substr($unidade, 0, 5) . "..." : $unidade;

    echo "<tr class='table-row' data-id='{$row['id']}' data-nome='{$row['nome']}' data-matricula='{$row['matricula']}' data-processo='{$row['processo']}' data-data='{$dataFormatada}' data-selecao='{$row['selecao']}' data-unidade='{$row['unidade']}' data-anotacoes='{$row['anotacoes']}'>
        <td>{$row['nome']}</td>
        <td>{$row['matricula']}</td>
        <td>{$row['processo']}</td>
        <td>{$dataFormatada}</td>
        <td>{$row['selecao']}</td>
        <td>{$unidadeFormatada}</td>
        <td>{$anotacoesFormatada}</td>
    </tr>";
}
?>


                </table>
            </div>
        </div>


    
    </div>



    <script src="../javascript/buscar.js"></script>
    <script src="../javascript/filter.js"></script>
    <script src="../javascript/modal.js"></script>
<script>
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

            const url = `../routers/pagina_detalhes.php?nome=${nome}&id=${id}&matricula=${matricula}&processo=${processo}&data=${data}&selecao=${selecao}&unidade=${unidade}&anotacoes=${anotacoes}`;
            window.location.href = url;
        });
    });
</script>


<script>
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const modal = document.querySelector(".modal-content");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch("../service/process_create.php", {
            method: "POST",
            body: formData
        })
      .then(response => response.json())
        .then(data => {
            if (data.success) {
                modal.innerHTML = "<p>" + data.message + "</p>";
            } else {
                modal.innerHTML = "<p>Erro ao adicionar registro.</p>";
            }
        })  
        .catch(error => {
            modal.innerHTML = "<p>Erro ao comunicar com o servidor.</p>";
        });
    });
});
</script>
</body>

</html>