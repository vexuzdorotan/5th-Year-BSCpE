<?php
include "ConnectToDB.php";

// $stmt = $db->prepare("SELECT DISTINCT Camera FROM productlist WHERE Camera LIKE '%MP' ORDER BY Camera DESC");
// $stmt->execute();

// while($row = $stmt->fetch()){
// 	// array_push($MP, explode("MP", $row[0])[0]);
// 	echo($row[0] . "<br>");
// }

$MPs = [48, 16, 13, 12, 8, 5, 3.2, 3.15, 2, 1.3, 1.2, 1, 0.9, 0.3];

function GetPrice($MP){
	include "ConnectToDB.php";
	$stmt = $db->prepare("SELECT Year, Price, Camera FROM `productlist` WHERE Camera LIKE '" . $MP . " MP%' AND Price LIKE '%EUR%' AND Status != 'Cancelled'");
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
		echo "Average Price of " . $MP . " MP phones(".$i.") : <b><u>" . ($sum/$i * 55). " PHP</u> as of ". $yearSum/$i."</b><br>";
		echo("Current value as of " . date("Y") .": <b>" . Depreciate(($sum/$i * 55), $yearSum/$i). "</b><br>");
	}
	else{
		echo "No ".$MP." MP phone<br>";
	}
}

for($i = 0; $i < count($MPs); $i++){
	GetPrice($MPs[$i]);
	// echo("Current value as of " . date("Y") .": " . Depreciate($) . "<br>");
}

function Depreciate($value, $yearReleased){
	$currentYear = (int)date("Y");
	$currentMonth = (int)date("m");
	$depreciation = 0.15;
	$currentYear = $currentYear + $currentMonth/12;

	for($i = (int)ceil($yearReleased); $i < (int)round($currentYear); $i++){
		if($i == (int)ceil($yearReleased)){
			$value = $value * 0.5;
		}
		$value = $value * (1-$depreciation);
	}
	return $value;
}

// print "<br> ".ceil((int)date("m")/12); 
// echo("<br>");
// Depreciate("1", "2");
?>