<?php
	require "ConnectToDB.php";
	$crud = $_POST['crud'];
	$query = $_POST['query'];
	try{
		$stmt = $db->prepare($query);
		$stmt->execute();

		if($crud == "SELECT"){
			$row = $stmt->fetchAll();
			echo json_encode($row);
		}
		else{
			echo "Successful";
		}
		$stmt->closeCursor();
	}
	catch(Exception $e){
		echo $query;
		echo $e;
	}
?>