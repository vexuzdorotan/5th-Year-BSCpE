<?php
	session_start();
	include 'ConnectToDB.php';
	$username = $_POST['username'];
	$password = $_POST['pass'];
	$access = strtolower($_POST['access']);

	$stmt = $db->prepare("SELECT * FROM access WHERE username = ? AND pass=TO_BASE64(?) AND access = ?");
	$stmt->bindValue(1, $username);
	$stmt->bindValue(2, $password);
	$stmt->bindValue(3, $access);

	$stmt->execute();
	$row = $stmt->fetch();
	$stmt->closeCursor();	

	if($row != null){
		if($row[2] == 'student'){
			$_SESSION['id'] = $row[0];
		}
		else{
			$_SESSION['id'] = explode("-", $row[0])[0];
		}
		$_SESSION['access'] = $row[2];
		echo $row[2];
	}
	else{
		echo "failed";
	}
	// echo $row[2];
	// try{
	// 	echo $row;
	// }
	// catch(Exception $e){
	// 	echo "error";
	// }

?>