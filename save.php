<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $expression = $_POST["expression"] ?? '';
    $result = $_POST["result"] ?? '';

    $log = "Expression: $expression = $result\n";
    file_put_contents("calculations.txt", $log, FILE_APPEND);

    echo "Saved!";
} else {
    echo "Invalid request.";
}
?>
