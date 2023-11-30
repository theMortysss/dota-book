<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$attributes = $db -> getAttributeByHero($selectedHero);  

unset($db);

echo json_encode($attributes, JSON_UNESCAPED_UNICODE);
                 