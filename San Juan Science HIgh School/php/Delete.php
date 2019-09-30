<?php
	require 'ConnectToDB.php';
	$table_name = strtolower($_POST['whatToDelete']);
	$whatToDelete = $_POST['whatToDelete'];

	if(is_numeric($_POST['value'])){
		$stmt = $db->prepare("DELETE from " . $table_name . " WHERE ". $whatToDelete . "Num = ?");
	}
	else{
		$stmt = $db->prepare("DELETE from " . $table_name . " WHERE ". $whatToDelete . "Name = ?");
	}

	$stmt->bindValue(1, $_POST['value']);
	$stmt->execute();

	// echo json_encode($row);
?>