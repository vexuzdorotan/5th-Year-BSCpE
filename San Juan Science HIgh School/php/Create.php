<?php
//REVISIONS WILL BE MADE
	require "ConnectToDB.php";
	$whatToCreate = $_POST['whatToCreate'];
	$autoincrement = $_POST['autoincrement'];
	$foreignKey = $_POST['foreignKey'];
	$fieldToUpdate = $_POST['fieldToUpdate'];
	$fieldToUpdateVal = null;
	$toBind = "";
	$colVal = array(); //Column Value array() => Setting up null array
	$j = 0; //Iterator
	// $k = 0; //Iterator
	$columns = "";
	$table1 = strtolower($whatToCreate);//Table name is just lower case of $whatToCreate 
	$content = json_decode($_POST['content'], true);
	$preparedStatement = "";

	$table2 = strtolower($_POST['table2']);

	foreach($content as $key => $value){  //Loops for every key-value of $content
		if($value === ""){
			$value = NULL;
		}
		$key = str_replace("txt_", "", $key);
		$key = str_replace("Number", "Num", $key);
		if(strpos($key, $_POST['table2']) !== false){
			if(strpos($key, $fieldToUpdate) !== false){
				$fieldToUpdateVal = $value;
					// echo "SAME";
			}
		}
		else{
			// if(str)
			if($autoincrement == 1 && strpos($key, $whatToCreate) !== false && strpos($key, "Num") !== false){
				//strpos($key, "Num") !== false can be omitted later on
				//strpos($key, $whatToCreate) !== false can be omitted later on
			}
			else{
				$columns .= $key . ",";
				$toBind .= "?,";	
				$colVal[$j] = $value;
				$j++;
			}
		}
	}
	try{
		$toBind = substr($toBind, 0, strlen($toBind)- 1);
		$columns = substr($columns, 0, strlen($columns)- 1);
		$preparedStatement = "INSERT INTO " . $table1 . "(" . $columns . ") VALUES(" . $toBind . ")";
		// try{
			$stmt = $db->prepare($preparedStatement);
			for($i = 1; $i < $j+1; $i++){
				$stmt->bindValue($i, $colVal[$i-1]);
			}
			$stmt->execute();
			$stmt->closeCursor();
		// }
		// catch(Exception $e){
		// 	echo $columns;
		// 	echo $preparedStatement;
		// 	for($i = 1; $i < $j+1; $i++){
		// 		echo ($colVal[$i-1]);
		// 	}
		// 	echo $e;
		// }
		if(!is_null($fieldToUpdateVal)){ //Checks if $fieldToUpdateVal is null
			$preparedStatement = "UPDATE " . $table2 . " SET " . $table2 . ".".$foreignKey." = (SELECT ".$table1.".".$foreignKey." FROM ".$table1." ORDER BY ".$table1.".".$foreignKey." DESC LIMIT 1) WHERE ".$table2.".".$fieldToUpdate." = ".$fieldToUpdateVal;
			$stmt = $db->prepare($preparedStatement);
			$stmt->execute();
			$stmt->closeCursor();
		}

		echo "Successful";
		// echo $preparedStatement;
	}
	catch(Exception $e){
		echo $e;
	}
?>
