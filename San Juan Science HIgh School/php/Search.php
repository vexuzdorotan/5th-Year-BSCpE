<?php
	require 'ConnectToDB.php';
	$whatToSearch = strtolower(substr($_POST['whatToSearch'], 6));

	$stmt = $db->prepare("SELECT * from " . $whatToSearch . " WHERE ". $whatToSearch . "Num LIKE ?");
	$stmt->bindValue(1, $_POST['value'] . "%");
	$stmt->execute();

	$row = $stmt->fetchAll();

	echo json_encode($row);
?>