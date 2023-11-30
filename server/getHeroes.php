<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php");            
$db = new DBClass();
$heroes = $db -> getHeroes();   
unset($db);

echo json_encode($heroes, JSON_UNESCAPED_UNICODE);
                 