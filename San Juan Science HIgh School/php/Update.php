<?php
//ALL PHP FILES MUST BE SIMPLIFIED
	require "ConnectToDB.php";
	$whatToCreate = $_POST['whatToCreate'];
	//
	$table1 = strtolower($whatToCreate);

	if(isset($_POST['autoincrement'])){
		$autoincrement = $_POST['autoincrement'];
	}
	$foreignKey = $_POST['foreignKey'];
	$fieldToUpdate = $_POST['fieldToUpdate'];
	$fieldToUpdateVal = null;

	// echo $fieldToUpdate;
	$table2 = strtolower($_POST['table2']);
	// $toBind = "";
	$colVal = array(); //Column Value array() => Setting up null array
	$j = 0; //Iterator
	// $columns = "";
	$colKey = array();
	$onDuplicate = "";
	$table_name = strtolower($whatToCreate);//Table name is just lower case of $whatToCreate 
	$content = json_decode($_POST['content'], true);

	foreach($content as $key => $value){  //Loops for every key-value of $content
		if($value === ""){
			$value = NULL;
		}
		$key = str_replace("Number", "Num", $key);
		if(strpos($key, $_POST['table2']) !== false){
			if(strpos($key, $fieldToUpdate) !== false){
 				$fieldToUpdateVal = $value;
				// echo $fieldToUpdateVal;
			}
		}
		else{
			$key = str_replace("txt_", "", $key);
			$colVal[$j] = $value;
			$colKey[$j] = $key;
			$j++;
		}
	}
	try{
		for($i=1; $i < $j; $i++){ 
			$onDuplicate .= $colKey[$i] . "=?,";
		}
		//$colKey is the primary key of the table
		$onDuplicate = substr($onDuplicate, 0, strlen($onDuplicate)- 1);
		$preparedStatement = "UPDATE " . $table_name . " SET " . $onDuplicate . " WHERE " . $colKey[0] ."=?";
		$stmt = $db->prepare($preparedStatement);

		for($i = 1; $i < $j; $i++){
			$stmt->bindValue($i, $colVal[$i]);
		}
		$stmt->bindValue($j, $colVal[0]);
		$stmt->execute();
		// "UPDATE " . $table2 . " SET " . $table2 . ".".$foreignKey." = (SELECT ".$table1.".".$foreignKey." FROM ".$table1." ORDER BY ".$table1.".".$foreignKey." DESC LIMIT 1) WHERE ".$table2.".".$fieldToUpdate." = ".$fieldToUpdateVal;
		
		if(!is_null($fieldToUpdateVal)){ //Checks if $fieldToUpdateVal is null
			$preparedStatement = "UPDATE " . $table2 . " SET " . $table2 . ".".$foreignKey." = NULL WHERE ".$table2.".".$foreignKey." = ".$colVal[0];
			// echo $preparedStatement;
			$stmt = $db->prepare($preparedStatement);
			$stmt->execute();
			$preparedStatement = "UPDATE " . $table2 . " SET " . $table2 . ".".$foreignKey." = ". $colVal[0] ." WHERE ".$table2.".".$fieldToUpdate." = ".$fieldToUpdateVal;
			$stmt = $db->prepare($preparedStatement);
			$stmt->execute();
		}
		$stmt->closeCursor();
		echo "Successful";
	}
	catch(Exception $e){
		echo $e;
	}
	//Commented codes are for INSERT ON KEY DUPLICATE UPDATE, just comment out the uncommented prepared statement
?>
