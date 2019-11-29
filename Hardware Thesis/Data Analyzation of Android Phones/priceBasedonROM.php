<?php
include "ConnectToDB.php";
// $stmt = $db->prepare("SELECT Year, Price FROM `productlist` WHERE REPLACE(InternalMemory, ' ', '') LIKE '%" . str_replace(" ", '', $ram) . "RAM%' AND Price LIKE '%EUR%' AND NOT REPLACE(InternalMemory, ' ', '') LIKE '%.5%' AND Status != 'Cancelled'");

$stmt = $db->prepare("SELECT InternalMemory FROM productlist WHERE Price LIKE '%EUR%'");
$stmt->execute();
$ROM = [];
while($row = $stmt->fetch()){
	// echo(explode(" ",$row[0])[0] . "<br>");
	array_push($ROM, explode(" ", $row[0])[0]);
}

$gbROM = [];
$mbROM = [];

for($i = 0; $i < count($ROM); $i++){
	if(strpos($ROM[$i], "GB") !== false){
		array_push($gbROM, $ROM[$i]);
	}
	else if(strpos($ROM[$i], "MB") !== false){
		array_push($mbROM, $ROM[$i]);
	}
}
$i = 0;
$NewgbROM = [];
$NewmbROM = [];
for($i = 0; $i < count($gbROM); $i++){
	if(!CheckIfExists($gbROM[$i], $NewgbROM)){
		array_push($NewgbROM, $gbROM[$i]);
	}
}
for($i = 0; $i < count($mbROM); $i++){
	if(!CheckIfExists($mbROM[$i], $NewmbROM)){
		array_push($NewmbROM, $mbROM[$i]);
	}
}

function CheckIfExists($element, $array){
	for($i = 0; $i < count($array); $i++){
		if($element === $array[$i]){
			return true;
			break;
		}
	}
}

// for($i = 0; $i < count($NewgbROM); $i++){
// 	echo($NewgbROM[$i] . "<br>");
// }
// echo("------------------------------------------------------<br>");
// for($i = 0; $i < count($NewmbROM); $i++){
// 	echo($NewmbROM[$i] . "<br>");
// }

function GetPrice($ROM){
	include "ConnectToDB.php";
	$stmt = $db->prepare("SELECT Year, Price FROM `productlist` WHERE InternalMemory LIKE '" . $ROM . "%' AND Price LIKE '%EUR%' AND Status != 'Cancelled'");
	$stmt->execute();
	$Price = [];
	$Year = [];
	$sum = 0;
	$yearSum = 0;
	// $count = 0;
	while($row = $stmt->fetch()){
		array_push($Price, $row[1]);
		array_push($Year, $row[0]);
	}
	$stmt->closeCursor();

	// print $Price[0];
	for($i = 0; $i < count($Price); $i++){
		$Price[$i] = str_replace("EUR", "", $Price[$i]);
		$Price[$i] = str_replace(" ", "", $Price[$i]);
		// echo $Price[$i] . "<br>";
		// echo($Year[$i]) . "<br>"
		$yearSum += (int)explode(",", $Year[$i])[0];
		$sum += (int)$Price[$i];
		// $count++;
	}
	// echo "Number of phones: " . $i . "<br>";
	if($i != 0){
		echo "Average Price of " . $ROM . " phones(".$i.") : <b><u>" . $sum/$i . " EUR</u> as of ". $yearSum/$i."</b><br>";
		echo("Current value as of " . date("Y") .": <b>" . Depreciate(($sum/$i * 55), $yearSum/$i). "</b><br>");
	}
	else{
		echo "No ".$ROM." RAM phone<br>";
	}
}

for($i = 0; $i < count($NewgbROM); $i++){
	GetPrice($NewgbROM[$i]);
}
for($i = 0; $i < count($NewmbROM); $i++){
	GetPrice($NewmbROM[$i]);
}
// echo($NewgbROM[count($NewgbROM)- 1]);

// while($row = $stmt->fetch()){
// 	// array_push($MP, explode("MP", $row[0])[0]);
// 	echo($row[0] . "<br>");
// }
function Depreciate($value, $yearReleased){
	$currentYear = (int)date("Y");
	$currentMonth = (int)date("m");
	$depreciation = 0.15;
	$currentYear = $currentYear + $currentMonth/12;

	$value = $value*0.65;
	for($i = (int)ceil($yearReleased); $i < (int)round($currentYear); $i++){
		if($i == (int)ceil($yearReleased)){
			$value = $value * 0.5;
		}
		$value = $value * (1-$depreciation);
	}
	return $value;
}

?>