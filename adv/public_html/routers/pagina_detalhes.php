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

</head>
<body>
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
                <li><img src="../images/Clients.png" class="imgDash"><a href="arquivados.php"> Arquivados</a> </li>
                <li onclick="openModal();" class="button"><img src="../images/right.png" class="imgDash"> <u>Novo Cliente</u></li>
               <li><img src="../images/trending-up.png" class="imgDash">&nbsp;<a href="clientes.php"> Clientes</a></li>
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
                Total de Clientes<span class="percentPositive">
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
          
                <?php
                 $id = $_GET['id'];
                $nome = $_GET['nome'];
                $matricula = $_GET['matricula'];
                $processo = $_GET['processo'];
                $dataatual = $_GET['data'];
                $selecao = $_GET['selecao'];
                $unidade = $_GET['unidade'];
                $anotacoes = $_GET['anotacoes'];
                ?>
<div class="details">
    <span class="Span"><img src="../images/user.png" class="imgUser"><br>&nbsp; &nbsp; <?php echo $nome; ?> </span>

    <span class="Span2">
      <form action="../service/process_edit.php" method="POST">
            <input type="hidden" name="id" value="<?php echo $id; ?>">
            <input type="hidden" name="nome" value="<?php echo $nome; ?>">
        <p><b>Matrícula:</b> <input value="<?php echo $matricula; ?>" id="matriculaInput" class="inputDisabled" name="matricula" disabled></p>
        <p><b>Processo:</b> <input value="<?php echo $processo; ?>" id="processoInput" name="processo" class="inputDisabled" disabled></p>
        
        <p><b>Data:</b> <input type="text" value="<?php echo $dataatual ?>" id="dataInput" class="inputDisabled date-toggle" name="dataatual"></p>
        <p><b>Regime:</b> <input value="<?php echo $selecao; ?>" id="regimeInput" class="inputDisabled" name="selecao" disabled></p>
        <p><b>Unidade:</b> <input value="<?php echo $unidade; ?>" id="unidadeInput" class="inputDisabled" name="unidade" disabled></p>
        <p><b>Anotações:</b><br><textarea id="anotacoesInput" name="anotacoes" rows="4" disabled><?php echo $anotacoes; ?></textarea></p>
    </span>

 
         <span id="saveCancelButtons" style="display: none;">
            <button type="submit" id="saveButton" onclick="saveValues()" class="btnSalvar">Salvar</button>
            <button onclick="cancelEdit(event)" class="btnCancelar">Cancelar</button>
             <select name="saveOptionEdit" id="saveOptionEdit">
                <option value="" selected disabled hidden>Salvar em</option>
                <option value="">Padrão</option>
                <option value="clientes">clientes</option>
                <option value="arquivados">arquivados</option>
            </select>
             </form>
        </span>
                  <span id="editButtons">
            <button id="editButton" class="editButton" onclick="editValues(event)">Editar</button>
            <button class="btnExcluir" onclick="confirmExclusao(<?php echo $id; ?>)">Excluir</button>

        </span>
</div>


</div>
</div>


<script>
// Função para abrir o modal
function openModal() {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "block";
    overlay.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    modal.style.display = "none";
    overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const modal = document.querySelector(".modal-content");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch("../service/process_create.php", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                modal.innerHTML = "<p>" + data.message + "</p>";
                location.reload();
            } else {
                modal.innerHTML = "<p>Erro ao adicionar registro.</p>";
            }
        } catch (error) {
            modal.innerHTML = "<p>Erro ao comunicar com o servidor.</p>";
        }
    });
});
</script>


<script>
    function confirmExclusao(id) {
        if (confirm("Tem certeza de que deseja excluir este cliente?")) {
            window.location.href = "../service/process_delete_pessoa.php?id=" + id;
        }
    }
</script>

<script>
  let OriginalDate = document.getElementById('dataInput');
  let originalDate = "<?php echo $dataatual; ?>";
function editValues(e) {
    e.preventDefault(); // Evita o envio automático do formulário

    var fields = document.querySelectorAll('.Span2 input, .Span2 textarea');
    var dateInput = document.getElementById('dataInput');

    
    fields.forEach(function(field) {
        field.removeAttribute('disabled');
    });

    // Mude o tipo do campo de data para "date"
    dateInput.type = 'text';

    document.getElementById('editButtons').style.display = 'none';
    document.getElementById('saveCancelButtons').style.display = 'block';
}


function saveValues(e) {
    e.preventDefault(); // Impede o envio automático do formulário

    var fields = document.querySelectorAll('.Span2 input, .Span2 textarea');
    var dateInput = document.getElementById('dataInput');
    var dateOriginalInput = document.querySelector('input[name="dataOriginal"]');

    fields.forEach(function(field) {
        field.setAttribute('disabled', 'disabled');
    });

    // Mude o tipo do campo de data para "text"
    dateInput.type = 'text';

    document.getElementById('editButtons').style.display = 'block';
    document.getElementById('saveCancelButtons').style.display = 'none';

    // Verifique se o campo de data foi editado
    var isDateEdited = dateInput.value !== dateOriginalInput.value;

    // Se o campo de data foi editado, envie o valor atual
    // Se não foi editado, envie o valor original
    var dataToSend = isDateEdited ? dateInput.value : dateOriginalInput.value;

    // Define o valor do campo de data antes de enviar o formulário
    dateInput.value = dataToSend;

    // Se o valor enviado for vazio e o valor original for uma data válida,
    // defina o valor como a data original
    if (dataToSend === '' && isValidDate(dateOriginalInput.value)) {
        dateInput.value = dateOriginalInput.value;
    }
    
    // Envia o formulário
    document.querySelector('form').submit();
}


function cancelEdit(e) {
    e.preventDefault(); // Evita o envio automático do formulário

    var fields = document.querySelectorAll('.Span2 input, .Span2 textarea');
    var dateInput = document.getElementById('dataInput');

    // Restaura a data original
    dateInput.type = 'text';
    dateInput.value = originalDate;

    fields.forEach(function(field) {
        field.setAttribute('disabled', 'disabled');
    });

    document.getElementById('editButtons').style.display = 'block';
    document.getElementById('saveCancelButtons').style.display = 'none';
}


</script>

    <script src="../javascript/buscar.js"></script>
    <script src="../javascript/filter.js"></script>

</body>

</html>
