<?php

//SELECT * FROM room LEFT JOIN section ON room.RoomNum = section.RoomNum WHERE section.SectionName IS NULL AND RoomType = "Classroom" query for available class rooms
	require 'ConnectToDB.php';
	$colName = "";
	$colNum = "";

	$table1 = strtolower($_POST['table1']);
	// $whatToSearch = $_POST['whatToSearch'];
	$columns = "";
	// if(isset($_POST['columnIDS'])){
	$columnIDS = json_decode($_POST['columnIDS'], null);
	$preparedstatement = "";
	// }
	if(isset($_POST['table2']) || isset($_POST['whereQuery'])){
		foreach($columnIDS as $key => $value){
			$columns .= $_POST['table1'].".".$value . ",";
			if(strpos($value, 'Name') !== false){ //GETS ONLY THE FIRST COLUMN with "Name"
				if($colName == ""){
					$colName = $value;
				}
			}
			if(strpos($value, 'Num') !== false){ //GETS ONLY THE FIRST COLUMN with "Name"
				
				if($colNum == ""){
					$colNum = $value;
				}
			}
		}

		$columns = substr($columns, 0, strlen($columns)- 1);

		$table2 = strtolower($_POST['table2']);
		$preparedstatement = "SELECT " . $columns . " FROM " . $table1 ." " . $_POST['whatJoin'] . " ". $table2 ." ON " .$_POST['compareWhat'] . " " . $_POST['whereQuery'];

		// $preparedstatement .= " AND " . $table1 . "." . $whatToSearch;
		$preparedstatement .= " AND " . $table1 . ".";
		// $stmt = $db->prepare("SELECT " . $columns . " FROM " . $table1 ." " . $_POST['whatJoin'] . " ". $table2 ." ON " . $table1 ."." . $_POST["compareWhat"] . " = " . $table2 . "." . $_POST['compareWhat'] . " " . $_POST['whereQuery']);
	}
	else{
		foreach($columnIDS as $key => $value){
			$columns .= $value . ",";
			if(strpos($value, 'Name') !== false){ //GETS ONLY THE FIRST COLUMN with "Name"
				if($colName == ""){
					$colName = $value;
				}
			}
			if(strpos($value, 'Num') !== false){ //GETS ONLY THE FIRST COLUMN with "Name"
				// $value = str_replace("Number", "Num", $value);
				if($colNum == ""){
					$colNum = $value;
				}
			}
		}
		$columns = substr($columns, 0, strlen($columns)- 1);
		// $preparedstatement = "SELECT " . $columns . " from " . $table1 . " WHERE ". $whatToSearch;
		$preparedstatement = "SELECT " . $columns . " from " . $table1 . " WHERE ";
	}

	$txt_searchbox = $_POST['value'];
	$txt_searchbox = preg_replace('/\s+/', '', $txt_searchbox); //Renoves all whitespaces;

	$arr_txt_searchbox = explode("=", $txt_searchbox);

	if(count($arr_txt_searchbox) == 1){
		if(is_numeric($_POST['value'])){
			$preparedstatement .= $colNum . " LIKE ? LIMIT 20";
		}
		else{
			$preparedstatement .= $colName . " LIKE ? LIMIT 20";
		}
		$stmt = $db->prepare($preparedstatement);
		$stmt->bindValue(1, $_POST['value'] . "%");
	}	
	else{
		$preparedstatement .= str_replace("Number", "Num", $arr_txt_searchbox[0]) . " LIKE ? LIMIT 20";  
		$stmt = $db->prepare($preparedstatement);
		$stmt->bindValue(1, $arr_txt_searchbox[1] . "%");
	}

	$stmt->execute();

	$row = $stmt->fetchAll();

	echo json_encode($row);
	
	// echo $preparedstatement;
?>