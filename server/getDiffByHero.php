<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$diff = $db -> getDiffByHero($selectedHero);  

unset($db);

echo json_encode($diff, JSON_UNESCAPED_UNICODE);
                 