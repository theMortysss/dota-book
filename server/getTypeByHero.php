<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$type = $db -> getTypeByHero($selectedHero);  

unset($db);

echo json_encode($type, JSON_UNESCAPED_UNICODE);
                 