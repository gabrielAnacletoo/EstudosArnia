<?php
    $conn = mysqli_connect("myshared0309", "advfarias", "M748lmrt61c!", "advfarias");

if (!$conn) {
    die("Erro na conexão: " . mysqli_connect_error());
}

$nome = $_POST['nome'];
$matricula = $_POST['matricula'];
$processo = $_POST['processo'];
$dataatual = $_POST['dataatual'];
$selecao = $_POST['selecao'];
$unidade = $_POST['unidade'];
$anotacoes = $_POST['anotacoes'];
$salvarEM = $_POST['salvarEM']; // Capturar o valor do <select>

if ($salvarEM === "clientes") {
    $table = "clientes"; 
} elseif ($salvarEM === "arquivados") {
    $table = "arquivados"; 
} else {
   $table = "pessoa";
}

$query = "INSERT INTO $table (nome, matricula, processo, dataatual, selecao, unidade, anotacoes) VALUES ('$nome', '$matricula', '$processo', '$dataatual', '$selecao', '$unidade', '$anotacoes')";
$result = mysqli_query($conn, $query);

if ($result) {
    $response = array("success" => true, "message" => "Registro adicionado com sucesso.");
    echo json_encode($response);
} else {
    $response = array("success" => false, "message" => "Erro ao adicionar registro.");
    echo json_encode($response);
}


mysqli_close($conn);
?>
 