<?php
	require "ConnectToDB.php";
	$whatToCreate = $_POST['whatToCreate'];
	// $toBind = "";
	$colVal = array(); //Column Value array() => Setting up null array
	$colNum = 0; //Iterator
	// $columns = "";
	$colKey = array();
	$onDuplicate = "";
	$table_name = strtolower($whatToCreate);//Table name is just lower case of $whatToCreate 
	$content = json_decode($_POST['content'], true);

	foreach($content as $key => $value){  //Loops for every key-value of $content
		$colVal[$colNum] = $value;
		$colKey[$colNum] = $key;
		$colNum++;
	}
	try{
		for($i=1; $i < $colNum; $i++){ 
			$onDuplicate .= $colKey[$i] . "=?,";
		}
		$onDuplicate = substr($onDuplicate, 0, strlen($onDuplicate)- 1);
		$stmt = $db->prepare("UPDATE " . $table_name . " SET " . $onDuplicate . " WHERE " . $colKey[0] ."=?");
		// for($i = 1; $i < $colNum; $i++){
		// 	$stmt->bindValue($i, $colVal[$i]);
		// }
		for($i = 1; $i < $colNum; $i++){
			$stmt->bindValue($i, $colVal[$i]);
		}
		$stmt->bindValue($colNum, $colVal[0]);
		$stmt->execute();
		$stmt->closeCursor();
		
		echo "Successful";
	}
	catch(Exception $e){
		echo $e;
	}
	//Commented codes are for INSERT ON KEY DUPLICATE UPDATE, just comment out the uncommented prepared statement
?>
