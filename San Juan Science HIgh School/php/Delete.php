<?php
	require 'ConnectToDB.php';
	$table1 = strtolower($_POST['whatToDelete']);
	$whatToDelete = $_POST['whatToDelete'];
	if(isset($_POST['query'])){
		$query = $_POST['query'];
		$stmt = $db->prepare("DELETE from " . $table1 . " WHERE ". $query);
	}
	else{
		if(is_numeric($_POST['value'])){
			$stmt = $db->prepare("DELETE from " . $table1 . " WHERE ". $whatToDelete . "Num = ?");
		}
		else{
			$stmt = $db->prepare("DELETE from " . $table1 . " WHERE ". $whatToDelete . "Name = ?");
		}
		$stmt->bindValue(1, $_POST['value']);
		// $stmt->execute();
	}

	try{
		$stmt->execute();
		$stmt->closeCursor();
	}
	catch(Exception $e){
		echo "DELETION FAILED";
	}
	// echo json_encode($row);
?>