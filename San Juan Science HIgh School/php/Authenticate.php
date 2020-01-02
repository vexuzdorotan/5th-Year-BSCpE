<?php
	session_start();
	include 'ConnectToDB.php';
	$username = $_POST['username'];
	$password = $_POST['pass'];
	$access = strtolower($_POST['access']);

	$stmt = $db->prepare("SELECT * FROM access WHERE username = ? AND pass=ENCODE(?, 'secret') AND access = ?");
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
		    $stmt = $db->prepare("UPDATE employee SET Age = (SELECT FLOOR(DATEDIFF(CURDATE(), Birthday)/365.25))");
		    $stmt->execute();
		    $stmt = $db->prepare("UPDATE student SET Age = (SELECT FLOOR(DATEDIFF(CURDATE(), Birthday)/365.25))");
		    $stmt->execute();
    		$stmt->closeCursor();
		}
		$_SESSION['access'] = $row[2];
		// $_SESSION['user'] = $row[1];
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