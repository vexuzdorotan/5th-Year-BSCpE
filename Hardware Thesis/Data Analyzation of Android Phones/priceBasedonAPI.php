<?php
//$stmt = $db->prepare("SELECT Year, Price FROM `productlist` WHERE API_Level = " . $API . " AND Price LIKE '%EUR%' AND Status != 'Cancelled'");
function GetPrice($API){
	include "ConnectToDB.php";
	$stmt = $db->prepare("SELECT Year, Price FROM `productlist` WHERE API_Level = " . $API . " AND Price LIKE '%EUR%' AND Status != 'Cancelled'");
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
		echo "Average Price of API Level " . $API . " phones(".$i.") : <b><u>" . $sum/$i . " EUR</u> as of ". $yearSum/$i."</b><br>";
	}
	else{
		echo "No API Level ".$API." phone<br>";
	}
}

for($i = 1; $i < 30; $i++){
	GetPrice($i);
}
?>