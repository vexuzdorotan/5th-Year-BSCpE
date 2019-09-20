<?php
	require 'ConnectToDB.php';
	$table_name = strtolower(substr($_POST['whatToSearch'], 6));
	$whatToSearch = substr($_POST['whatToSearch'], 6);

	// try{
	// 	$stmt = $db->prepare("SELECT * from " . $table_name . " WHERE ". $whatToSearch . "Num LIKE ? LIMIT 20");
	// 	$stmt->bindValue(1, $_POST['value'] . "%");
	// 	$stmt->execute();
	// }
	// catch(Exception $e){
	// 	$stmt = $db->prepare("SELECT * from " . $table_name . " WHERE ". $whatToSearch . "Name LIKE ? LIMIT 20");
	// 	$stmt->bindValue(1, $_POST['value'] . "%");
	// 	$stmt->execute();
	// }
	if(is_numeric($_POST['value'])){
			$stmt = $db->prepare("SELECT * from " . $table_name . " WHERE ". $whatToSearch . "Num LIKE ? LIMIT 20");
	}
	else{
		$stmt = $db->prepare("SELECT * from " . $table_name . " WHERE ". $whatToSearch . "Name LIKE ? LIMIT 20");	
	}
	
	$stmt->bindValue(1, $_POST['value'] . "%");
	$stmt->execute();

	$row = $stmt->fetchAll();

	echo json_encode($row);
?>