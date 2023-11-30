<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");
$selectedHero = $_POST["HeroID"];           
$db = new DBClass();

$abil = $db -> getAbilityByHero($selectedHero);  

unset($db);

echo json_encode($abil, JSON_UNESCAPED_UNICODE);
                 