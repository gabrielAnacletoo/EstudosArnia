<?php
// Conexão com o banco de dados
$conn = mysqli_connect("myshared0309", "advfarias", "M748lmrt61c!", "advfarias");

// Verifica a conexão
if (!$conn) {
    die("Erro na conexão: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $newDatabase = $_POST["database"]; // Novo banco de dados escolhido
    $selectedIds = json_decode($_POST["ids"]); // IDs dos registros selecionados

    // Certifique-se de que o novo banco de dados seja válido (clientes ou arquivados)
    if ($newDatabase === "clientes" || $newDatabase === "arquivados") {
        // Loop pelos IDs dos registros selecionados
        foreach ($selectedIds as $id) {
            // Selecione os dados do cliente da tabela original (Clientes)
            $selectQuery = "SELECT * FROM pessoa WHERE id = $id";
            $result = mysqli_query($conn, $selectQuery);
            $row = mysqli_fetch_assoc($result);

            if ($row) {
                // Inserir o cliente na tabela de destino (Arquivados)
                $insertQuery = "INSERT INTO $newDatabase (nome, matricula, processo, dataatual, selecao, unidade, anotacoes) VALUES (
                    '{$row['nome']}',
                    '{$row['matricula']}',
                    '{$row['processo']}',
                    '{$row['dataatual']}',
                    '$newDatabase',
                    '{$row['unidade']}',
                    '{$row['anotacoes']}'
                )";

                if (mysqli_query($conn, $insertQuery)) {
                    // Excluir o cliente da tabela original (Clientes)
                    $deleteQuery = "DELETE FROM pessoa WHERE id = $id";
                    mysqli_query($conn, $deleteQuery);
                }
            }
        }

        // Sucesso na movimentação
        $response = ["success" => true, "message" => "Registros movidos para $newDatabase com sucesso."];
        echo json_encode($response);
    } else {
        // Banco de dados inválido
        $response = ["success" => false, "message" => "Banco de dados inválido selecionado."];
        echo json_encode($response);
    }
} else {
    // Método de requisição inválido
    header("HTTP/1.1 405 Method Not Allowed");
    echo "Método não permitido";
}

// Feche a conexão com o banco de dados
mysqli_close($conn);
?>
