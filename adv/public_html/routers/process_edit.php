<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = mysqli_connect("myshared0309", "advfarias", "M748lmrt61c!", "advfarias");

    if (!$conn) {
        die("Erro na conexão: " . mysqli_connect_error());
    }

    $id = $_POST['id'];
    $anotacoes = $_POST['anotacoes'];

    $updateQuery = "UPDATE pessoa SET anotacoes='$anotacoes' WHERE id=$id";
    $result = mysqli_query($conn, $updateQuery);

 if ($result) {
    // Redirecionar de volta para a página de detalhes com o parâmetro na URL
    header("Location: ../index.php");
    exit();
} else {
    echo "Erro ao atualizar os dados no banco de dados. ";
}

mysqli_close($conn);
}
?>
