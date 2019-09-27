<?php
	require "ConnectToDB.php";
	$whatToCreate = $_POST['whatToCreate'];
	$toBind = "";
	$colVal = array(); //Column Value array() => Setting up null array
	$j = 0; //Iterator
	$columns = "";
	// $colKey = array();
	// $onDuplicate = "";
	$table_name = strtolower($whatToCreate);//Table name is just lower case of $whatToCreate 
	$content = json_decode($_POST['content'], true);
	$preparedStatement = "";
	// echo $content;
	foreach($content as $key => $value){  //Loops for every key-value of $content
		if($value === ""){
			$value = NULL;
		}
  		// echo $key . " : " . $value . "<br>";
  		//$ctr++;
  		$columns .= $key . ",";
		$toBind .= "?,";	
		$colVal[$j] = $value;
		// $colKey[$j] = $key;
		$j++;
	}
	try{
		// for($i=1; $i < $j; $i++){ 
		// 	$onDuplicate .= $colKey[$i] . "=?,";
		// }
		$toBind = substr($toBind, 0, strlen($toBind)- 1);
		$columns = substr($columns, 0, strlen($columns)- 1);
		// $onDuplicate = substr($onDuplicate, 0, strlen($onDuplicate)- 1);

		// $stmt = $db->prepare("INSERT INTO " . $table_name . "(" . $columns . ") VALUES(" . $toBind . ") ON DUPLICATE KEY UPDATE " . $onDuplicate);
		$preparedStatement = "INSERT INTO " . $table_name . "(" . $columns . ") VALUES(" . $toBind . ")";
		$stmt = $db->prepare($preparedStatement);
		for($i = 1; $i < $j+1; $i++){
			$stmt->bindValue($i, $colVal[$i-1]);
		}
		
		$stmt->execute();
		$stmt->closeCursor();
		
		echo "Successful";
		// echo $preparedStatement;
	}
	catch(Exception $e){
		echo $e;
	}
	//Commented codes are for INSERT ON KEY DUPLICATE UPDATE, just comment out the uncommented prepared statement
?>
