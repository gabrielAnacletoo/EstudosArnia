<!DOCTYPE html>
<html>

<head>
    <title>Farias Advogados</title>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

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
    } else { // Se a opção for "Todos" ou qualquer outra
        $query = "SELECT * FROM pessoa ORDER BY dataatual ASC";
    }
    $result = executeQuery($query);
}


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
                <li><img src="../images/dash.png" class="imgDash"> Dashboard</li>
                <li><img src="../images/Clients.png" class="imgDash"><a href="./routers/arquivados.php"> Arquivados</a></li>
                <li><img src="../images/right.png" class="imgDash"><a href="./routers/create.php"> Adicionar Cliente</a></li>

            </ul>
        </div>

      
        <div class="tables">
            <div class="menubar">
            Total de Clientes<span class="percentPositive"><?php echo $totalClientes; ?></span> Total Arquivados<span class="percentNegative"><?php echo $totalArquivados; ?></span>

            <input type="text" id="searchInput" class="search-input" placeholder="Pesquisar por nome..." onkeyup="searchNames()">
            
            <select name="filtroRegime" id="filtroRegime" onchange="filtrarTabela()">
                <option value="" selected>Todos</option>
                <option value="Regime Aberto">Regime Aberto</option>
                <option value="Liberdade Condicional">Liberdade Condicional</option>
            </select>
            </div>


        </div>
        
    </div>
    
  <div class="registerdiv">
    <form action="../services/process_create.php" method="POST">
      <div class="form-row">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome">
        </div>


        <label for="matricula">Matrícula</label>
        <input type="text" id="matricula" name="matricula">

        <label for="processo">Processo</label>
        <input type="text" id="processo" name="processo">
      </div>

      <div class="form-row">
        <label for="dataatual">Data</label>
        <input type="date" id="dataatual" name="dataatual">

        <div class="radio-group">
          <input type="radio" name="regime" value="Regime Aberto"> Regime Aberto
          <input type="radio" name="regime" value="Liberdade Condicional"> Liberdade Condicional
        </div>

        <label for="unidade">Unidade</label>
        <input type="text" id="unidade" name="unidade">
      </div>

      <input type="submit" value="Adicionar">
    </form>
  </div>
    <script src="../javascript/buscar.js"></script>
    <script src="../javascript/filter.js"></script>
</body>

</html>