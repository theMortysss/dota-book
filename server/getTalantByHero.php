<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$tal = $db -> getTalantByHero($selectedHero);  

unset($db);

echo json_encode($tal, JSON_UNESCAPED_UNICODE);
                 