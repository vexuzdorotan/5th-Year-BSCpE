<?php

	require 'ConnectToDB.php';
	$colName = "";
	$colNum = "";

	$table1 = strtolower($_POST['table1']);
	$columns = "";
	$columnIDS = json_decode($_POST['columnIDS'], true);
	$preparedstatement = "";
	$correction = "";
	$temp = ""; //temporary container
	$txt_searchbox = $_POST['value'];
	$txt_searchbox = preg_replace('/\s+/', '', $txt_searchbox); //Renoves all whitespaces;
	$arr_txt_searchbox = explode("=", $txt_searchbox);

	if(isset($_POST['correction'])){
		if($_POST['correction'] != "null"){ //changes input to its id
			$correction = $_POST['correction'];
			$correction = explode("=", $correction);

			if(strtolower($arr_txt_searchbox[0]) == strtolower($correction[0])){
				$arr_txt_searchbox[0] = $correction[1];
			}
		}
	}

	$arr_txt_searchbox[0] = str_replace("Number", "Num", $arr_txt_searchbox[0]); //Changes Number to Num
	if(isset($_POST['table2'])){
		$table2 = strtolower($_POST['table2']);
		$otherQuery = $_POST['whereQuery'];
		if($otherQuery == "null"){
			$otherQuery = " ";
		}
		else{
			$otherQuery .= " AND ";
		}
		foreach($columnIDS as $key => $value){
			if($value !== ""){
				if(strpos($value, $_POST['table2']) !== false && strpos($_POST['table1'], $_POST['table2']) === false){
				// if(strpos($value, $_POST['table2']) !== false){
					$temp = str_replace($_POST['table2'], "", $value);
					if(strtolower($arr_txt_searchbox[0]) == strtolower($value)){//compares two strings case insensitive
						$arr_txt_searchbox[0] = $table2 . "." . $temp;
					}
					$columns .= $table2.".".$temp . ",";
				}
				else{
					if(strtolower($arr_txt_searchbox[0]) == strtolower($value)){
						$arr_txt_searchbox[0] = $table1 . "." . $arr_txt_searchbox[0];
					}
					$columns .= $table1.".".$value . ",";

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
			}
		}
		// echo $arr_txt_searchbox[0];
		$columns = substr($columns, 0, strlen($columns)- 1);
		if($table2 == "null"){
			$preparedstatement = "SELECT " . $columns . " FROM " . $table1 . " WHERE " . $otherQuery;
		}	
		else{
			$preparedstatement = "SELECT " . $columns . " FROM " . $table1 ." " . $_POST['whatJoin'] . " ". $table2 ." ON " .$_POST['compareWhat'] . " WHERE " . $otherQuery;
		}
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
				if($colNum == ""){
					$colNum = $value;
				}
			}
		}
		$columns = substr($columns, 0, strlen($columns)- 1);
		$preparedstatement = "SELECT " . $columns . " from " . $table1 . " WHERE ";
	}
	// echo json_encode($columnIDS);
	if(count($arr_txt_searchbox) == 1){
		if($colNum == "" && $colName == ""){
			// $preparedstatement .= $table1 . "." . $columnIDS[0]. " LIKE ? LIMIT 20";
			$preparedstatement .= $table1 . "." . $columnIDS[0]. " LIKE ?";
		}
		else{
			if(is_numeric($_POST['value'])){
				// $preparedstatement .= $table1 . "." . $colNum . " LIKE ? LIMIT 20";//Preset to Table1
				$preparedstatement .= $table1 . "." . $colNum . " LIKE ?";//Preset to Table1
			}
			else{
				// $preparedstatement .= $table1 . "." . $colName . " LIKE ? LIMIT 20";
				$preparedstatement .= $table1 . "." . $colName . " LIKE ?";
			}
		}
		try{	
			$stmt = $db->prepare($preparedstatement);
			$stmt->bindValue(1, $_POST['value'] . "%");
		}
		catch(Exception $e){
			echo $preparedstatement;
		}
		// echo $preparedstatement;
		//try-catch can be removed if debugging is done
	}	
	else{
		// $preparedstatement .= $arr_txt_searchbox[0] . " LIKE ? LIMIT 20";  
		$preparedstatement .= $arr_txt_searchbox[0] . " LIKE ?";  
		$stmt = $db->prepare($preparedstatement);
		$stmt->bindValue(1, $arr_txt_searchbox[1] . "%");
	}

	$stmt->execute();

	$row = $stmt->fetchAll();

	echo json_encode($row);
	
	// echo $preparedstatement;
?>