<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
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

    // Atualize os dados na tabela "clientes"
    $updateQuery = "UPDATE clientes SET nome=?, matricula=?, processo=?, dataatual=?, selecao=?, unidade=?, anotacoes=? WHERE id=?";
    $stmtUpdate = mysqli_prepare($conn, $updateQuery);

    if ($stmtUpdate) {
        // Bind parameters
        mysqli_stmt_bind_param($stmtUpdate, "sssssssi", $nome, $matricula, $processo, $dataatual, $selecao, $unidade, $anotacoes, $id);

        // Execute the statement
        $resultUpdate = mysqli_stmt_execute($stmtUpdate);

        if (!$resultUpdate) {
            echo "Erro na atualização dos dados: " . mysqli_error($conn);
        } else {
            // Redirect to the main page after successful edit
            mysqli_stmt_close($stmtUpdate);
            mysqli_close($conn);
            header("Location: ../routers/clientes.php"); // Substitua "index.php" pelo nome da sua página principal
            exit();
        }
    } else {
        echo "Erro na preparação da consulta de atualização: " . mysqli_error($conn);
    }
} else {
    echo "Requisição inválida.";
}
?>
