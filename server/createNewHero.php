<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");

require_once("DB.php"); 
$data=json_decode($_POST['NewHero']); 

foreach($data as $key => $value)
{
    echo "$key - $value<br />";
}    
$db = new DBClass();
$res = $db -> createHero($data); 
unset($db);

echo $res;

