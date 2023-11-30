<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$param = $db -> getParamByHero($selectedHero);  

unset($db);

echo json_encode($param, JSON_UNESCAPED_UNICODE);
                 