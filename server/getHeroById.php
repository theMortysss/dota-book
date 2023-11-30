<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$hero = $db -> getHeroById($selectedHero);  

unset($db);

echo json_encode($hero, JSON_UNESCAPED_UNICODE);
                 