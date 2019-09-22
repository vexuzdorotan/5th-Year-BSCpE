<?php

//SELECT * FROM room LEFT JOIN section ON room.RoomNum = section.RoomNum WHERE section.SectionName IS NULL AND RoomType = "Classroom" query for available class rooms
	require 'ConnectToDB.php';
	$table_name = strtolower($_POST['whatToSearch']);
	$whatToSearch = $_POST['whatToSearch'];
	$columns = "";
	// if(isset($_POST['columnIDS'])){
	$columnIDS = json_decode($_POST['columnIDS'], null);
	$preparedstatement = "";
	// }
	if(isset($_POST['whatTable']) || isset($_POST['whereQuery'])){
		foreach($columnIDS as $key => $value){
			$columns .= $whatToSearch.".".$value . ",";
		}

		$columns = substr($columns, 0, strlen($columns)- 1);

		$table2_name = strtolower($_POST['whatTable']);
		$preparedstatement = "SELECT " . $columns . " FROM " . $table_name ." " . $_POST['whatJoin'] . " ". $table2_name ." ON " . $table_name ."." . $_POST["compareWhat"] . " = " . $table2_name . "." . $_POST['compareWhat'] . " " . $_POST['whereQuery'];

		$preparedstatement .= " AND " . $table_name . "." . $whatToSearch;
		// $stmt = $db->prepare("SELECT " . $columns . " FROM " . $table_name ." " . $_POST['whatJoin'] . " ". $table2_name ." ON " . $table_name ."." . $_POST["compareWhat"] . " = " . $table2_name . "." . $_POST['compareWhat'] . " " . $_POST['whereQuery']);
	}
	else{
		foreach($columnIDS as $key => $value){
			$columns .= $value . ",";
		}
		$columns = substr($columns, 0, strlen($columns)- 1);
		$preparedstatement = "SELECT " . $columns . " from " . $table_name . " WHERE ". $whatToSearch;
	}

	if(is_numeric($_POST['value'])){
		$stmt = $db->prepare($preparedstatement . "Num LIKE ? LIMIT 20");
	}
	else{
		$stmt = $db->prepare($preparedstatement . "Name LIKE ? LIMIT 20");	
	}
	$stmt->bindValue(1, $_POST['value'] . "%");
	$stmt->execute();

	$row = $stmt->fetchAll();

	echo json_encode($row);
?>