<?php
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $conn = mysqli_connect("myshared0309", "advfarias", "M748lmrt61c!", "advfarias");

    if (!$conn) {
        die("Erro na conexão: " . mysqli_connect_error());
    }

    // Excluir o registro da tabela pessoa
    $deleteQuery = "DELETE FROM arquivados WHERE id=?";
    $stmtDelete = mysqli_prepare($conn, $deleteQuery);

    if ($stmtDelete) {
        mysqli_stmt_bind_param($stmtDelete, "i", $id);
        $resultDelete = mysqli_stmt_execute($stmtDelete);

        if (!$resultDelete) {
            echo "Erro ao excluir cliente: " . mysqli_error($conn);
        } else {
            mysqli_stmt_close($stmtDelete);
            mysqli_close($conn);
            header("Location: ../routers/arquivados.php"); // Redireciona para a página principal após a exclusão
            exit();
        }
    } else {
        echo "Erro na preparação da consulta de exclusão: " . mysqli_error($conn) . "<br>";
        echo "SQL: " . $deleteQuery . "<br>";
        echo "Erro de conexão: " . mysqli_connect_error();

    }
} else {
    echo "ID do cliente não fornecido.";
}
?>
