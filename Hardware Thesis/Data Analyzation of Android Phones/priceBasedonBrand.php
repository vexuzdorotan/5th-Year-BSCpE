<?php
//BASED ON BRAND
include "ConnectToDB.php";
$stmt = $db->prepare("SELECT Brand, AVG(Price), COUNT(ProductName), AVG(YEAR) FROM productlist WHERE Price LIKE '%EUR%' GROUP BY Brand ORDER BY AVG(Price) DESC");
$stmt->execute();

while($row = $stmt->fetch()){
	echo ("<b>Brand: ". $row[0] . " Average Price(".$row[2]."): <u>" . $row[1] . " as of " . $row[3] . "</u></b><br>");
}
?>