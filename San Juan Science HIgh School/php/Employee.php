<?php

$target_dir = "../pictures/employee/";
require 'ConnectToDB.php';
//What does PHP receive?
// if(empty(($_POST['sjajsaj']))){
// 	echo "HI";
// }
if(!empty($_FILES['files'])){
	UPLOAD($target_dir);
}
else if(!empty($_POST['LastName'])){
	Insert($db, $target_dir);
}

function Insert($db, $target_dir){
	try{
		$stmt = $db->prepare("INSERT into employee(LastName, FirstName, MiddleName, Birthday, Street_Address1, Street_Address2, City, Province, Country, Gender, Position, URL_Picture) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)");

		$stmt->bindValue(1, $_POST["LastName"]);
		$stmt->bindValue(2, $_POST["FirstName"]);
		$stmt->bindValue(3, $_POST["MiddleName"]);
		$stmt->bindValue(4, $_POST["Birthday"]);
		$stmt->bindValue(5, $_POST["StreetAdd1"]);
		$stmt->bindValue(6, $_POST["StreetAdd2"]);
		$stmt->bindValue(7, $_POST["City"]);
		$stmt->bindValue(8, $_POST["Province"]);
		$stmt->bindValue(9, $_POST["Country"]);
		$stmt->bindValue(10, $_POST["Gender"]);
		$stmt->bindValue(11, $_POST["Position"]);
		// $stmt->bindValue(12, $_POST["Type"]);
		$stmt->bindValue(12, $target_dir . $_POST["URL_Picture"]);
		$stmt->execute();	
		$stmt = $db->prepare("UPDATE employee SET Age = (SELECT FLOOR(DATEDIFF(CURDATE(), Birthday)/365.25))");
	   	$stmt->execute();
		$stmt->closeCursor();
		echo "REGISTRATION SUCCESSFUL";
	}
	catch(Exception $e){
		echo $e;
	}
}


//Move files to a directory
function UPLOAD($target_dir){
	foreach ($_FILES['files']['tmp_name'] as $key => $value) {
    	# code...
    	$targetpath = $target_dir . basename($_FILES['files']['name'][$key]);
	    if(move_uploaded_file($value, $targetpath)){
        	echo true;
    	}
	}
}

//SIZE IS NOT YET CONSIDERED
?>