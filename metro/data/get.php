<?php

header('Access-Control-Allow-Origin: *');
$result = "";

switch ($_GET['object']) {
    case "table": $result = file_get_contents("table.json"); break;
}

echo $result;
