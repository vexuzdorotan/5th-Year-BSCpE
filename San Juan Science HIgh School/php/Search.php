<?php
	require 'ConnectToDB.php';
	$table_name = strtolower($_POST['whatToSearch']);
	$whatToSearch = $_POST['whatToSearch'];
	$columns = "";
	// if(isset($_POST['columnIDS'])){
	$columnIDS = json_decode($_POST['columnIDS'], null);
	foreach($columnIDS as $key => $value){
		$columns .= $value . ",";
	}

	$columns = substr($columns, 0, strlen($columns)- 1);
	// }
	if(is_numeric($_POST['value'])){
		$stmt = $db->prepare("SELECT " . $columns . " from " . $table_name . " WHERE ". $whatToSearch . "Num LIKE ? LIMIT 20");
	}
	else{
		$stmt = $db->prepare("SELECT " . $columns . " from " . $table_name . " WHERE ". $whatToSearch . "Name LIKE ? LIMIT 20");	
	}

	$stmt->bindValue(1, $_POST['value'] . "%");
	$stmt->execute();

	$row = $stmt->fetchAll();

	echo json_encode($row);
?>