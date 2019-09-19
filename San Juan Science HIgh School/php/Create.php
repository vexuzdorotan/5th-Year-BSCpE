<?php
	require "ConnectToDB.php";
	$whatToCreate = $_POST['whatToCreate'];
	$toBind = "";
	$colVal = array(); //Column Value array() => Setting up null array
	$colNum = 0; //Iterator
	$columns = "";
	$table_name = strtolower($whatToCreate);//Table name is just lower case of $whatToCreate 
	$content = json_decode($_POST['content'], true);

	foreach($content as $key => $value){  //Loops for every key-value of $content

  		// echo $key . " : " . $value . "<br>";
  		//$ctr++;
  		$columns .= $key . ",";
		$toBind .= "?,";	
		$colVal[$colNum] = $value;
		$colNum++;
	}
	try{
		$toBind = substr($toBind, 0, strlen($toBind)- 1);
		$columns = substr($columns, 0, strlen($columns)- 1);

		$stmt = $db->prepare("INSERT INTO " . $table_name . "(" . $columns . ") VALUES(" . $toBind . ")");	
		for($i = 1; $i < $colNum+1; $i++){
			$stmt->bindValue($i, $colVal[$i-1]);
		}
		$stmt->execute();
		$stmt->closeCursor();
	}
	catch(Exception $e){
		echo $e;
	}
	// $stmt = $db->prepare("SELECT * from " . $whatToCreate . " WHERE ". $whatToSearch . "Num LIKE ?");
	// $stmt->bindValue(1, "%". $_POST['value'] . "%");
	// $stmt->execute();
?>