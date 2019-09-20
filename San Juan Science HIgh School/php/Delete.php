<?php
	require 'ConnectToDB.php';
	$whatToDelete = strtolower(substr($_POST['whatToDelete'], 6));
	$stmt = $db->prepare("DELETE from " . $whatToDelete . " WHERE ". $whatToDelete . "Num = ?");
	$stmt->bindValue(1, $_POST['id']);
	$stmt->execute();

	// $row = $stmt->fetchAll();

	// echo json_encode($row);
?>