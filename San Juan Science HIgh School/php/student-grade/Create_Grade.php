<?php
require '../ConnectToDB.php';

if(!empty($_POST['StudentNum'])){
	Insert($db);
}

function Insert($db){
	try{
		$stmt = $db->prepare("INSERT into tblstudentgrade(StudentNum, GradeLevel, Quarter, fil, eng, math, sci, ap, esp, tle, mapeh, music, arts, pe, health)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
		$stmt->bindValue(1, $_POST["StudentNum"]);
		$stmt->bindValue(2, $_POST["GradeLevel"]);
		$stmt->bindValue(3, $_POST["Quarter"]);
		$stmt->bindValue(4, $_POST["fil"]);
		$stmt->bindValue(5, $_POST["eng"]);
		$stmt->bindValue(6, $_POST["math"]);
		$stmt->bindValue(7, $_POST["sci"]);
		$stmt->bindValue(8, $_POST["ap"]);
		$stmt->bindValue(9, $_POST["esp"]);
		$stmt->bindValue(10, $_POST["tle"]);
		$stmt->bindValue(11, $_POST["mapeh"]);
		$stmt->bindValue(12, $_POST["music"]);
		$stmt->bindValue(13, $_POST["arts"]);
		$stmt->bindValue(14, $_POST["pe"]);
		$stmt->bindValue(15, $_POST["health"]);
		$stmt->execute();	
		$stmt->closeCursor();
		echo "REGISTRATION SUCCESSFUL";
	}
	catch(Exception $e){
		echo "REGISTRATION FAILED";
	}
}
?>