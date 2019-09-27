<?php
	require "ConnectToDB.php";
	$whatToCreate = $_POST['whatToCreate'];
	$autoincrement = $_POST['autoincrement'];
	$foreignKey = $_POST['foreignKey'];
	$fieldToUpdate = $_POST['fieldToUpdate'];


	$toBind = "";
	$colVal = array(); //Column Value array() => Setting up null array
	$j = 0; //Iterator
	$k = 0; //Iterator
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
			// echo $key;
		}
		else{
			// if(str)
			if($autoincrement == 1 && strpos($key, $whatToCreate) !== false && strpos($key, "Num") !== false){
				
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
		// $stmt = $db->prepare($preparedStatement);
		for($i = 1; $i < $j+1; $i++){
			// $stmt->bindValue($i, $colVal[$i-1]);
		}
		echo $preparedStatement;
		// $stmt->execute();

		$preparedStatement = "UPDATE " . $table2 . " SET " . $table2 . ".".$foreignKey." = (SELECT ".$table1.".".$foreignKey." FROM ".$foreignKey." ORDER BY ".$table1.".".$foreignKey." DESC LIMIT 1) WHERE ".$table2.".".$fieldToUpdate." = ?;";
		// $stmt->bindValue(1, $colVal[$i-1]);
		// $stmt->closeCursor();


		echo "Successful";
		echo $preparedStatement;

		// $preparedStatement = "UPDATE   "
	}
	catch(Exception $e){
		echo $e;
	}
?>
