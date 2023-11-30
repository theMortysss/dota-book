<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$atk = $db -> getAttackTypeByHero($selectedHero);  

unset($db);

echo json_encode($atk, JSON_UNESCAPED_UNICODE);
                 