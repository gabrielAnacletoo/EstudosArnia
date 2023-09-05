<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexão com o banco de dados
    $conn = mysqli_connect("myshared0309", "advfarias", "M748lmrt61c!", "advfarias");

    if (!$conn) {
        die("Erro na conexão: " . mysqli_connect_error());
    }

    // Obtenha os dados do formulário
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $matricula = $_POST['matricula'];
    $processo = $_POST['processo'];
    $dataatual = $_POST['dataatual'];
    $selecao = $_POST['selecao'];
    $unidade = $_POST['unidade'];
    $anotacoes = $_POST['anotacoes'];
    $saveOption = $_POST['saveOptionEdit']; // Correção aqui

    // Determina a tabela apropriada com base na opção selecionada
    switch ($saveOption) {
        case "clientes":
            $table = "clientes";
            break;
        case "arquivados":
            $table = "arquivados";
            break;
        default:
            $table = "pessoa";
    }

    if ($table !== "pessoa") {
        // Crie a consulta de inserção na tabela de destino
        $insertIntoDestination = "INSERT INTO $table (nome, matricula, processo, dataatual, selecao, unidade, anotacoes) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmtDestination = mysqli_prepare($conn, $insertIntoDestination);
        mysqli_stmt_bind_param($stmtDestination, "sssssss", $nome, $matricula, $processo, $dataatual, $selecao, $unidade, $anotacoes);

        // Remover o registro original da tabela pessoa
        $deleteQuery = "DELETE FROM pessoa WHERE id=?";
        $stmtDelete = mysqli_prepare($conn, $deleteQuery);
        mysqli_stmt_bind_param($stmtDelete, "i", $id);
    } else {
        // Crie a consulta de atualização
        $updateQuery = "UPDATE pessoa SET nome=?, matricula=?, processo=?, dataatual=?, selecao=?, unidade=?, anotacoes=? WHERE id=?";
        $stmt = mysqli_prepare($conn, $updateQuery);
        mysqli_stmt_bind_param($stmt, "sssssssi", $nome, $matricula, $processo, $dataatual, $selecao, $unidade, $anotacoes, $id);
    }

    if (isset($stmtDestination) && isset($stmtDelete)) {
        // Execute a inserção na tabela de destino
        mysqli_stmt_execute($stmtDestination);

        // Execute a exclusão do registro original
        mysqli_stmt_execute($stmtDelete);

        mysqli_stmt_close($stmtDestination);
        mysqli_stmt_close($stmtDelete);
    } elseif (isset($stmt)) {
        // Execute a atualização na tabela pessoa
        $result = mysqli_stmt_execute($stmt);

        if (!$result) {
            echo "Erro na atualização dos dados: " . mysqli_error($conn);
        } else {
            mysqli_stmt_close($stmt);
        }
    } else {
        echo "Erro na preparação da consulta.";
    }

    mysqli_close($conn);
    header("Location: ../index.php"); // Substitua "index.php" pelo nome da sua página principal
    exit();
} else {
    echo "Requisição inválida.";
}
?>