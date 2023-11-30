<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$spec = $db -> getSpecByHero($selectedHero);  

unset($db);

echo json_encode($spec, JSON_UNESCAPED_UNICODE);
                 