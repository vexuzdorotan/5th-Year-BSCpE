<?php
    include '../php/ConnectToDB.php';

    if($_SESSION['access'] != 'student') {
        $stmt = $db->prepare(
            'SELECT FirstName, MiddleName, LastName, Gender 
            FROM employee
            WHERE EmployeeNum = ?'
            );
    } else {
        $stmt = $db->prepare(
            'SELECT FirstName, MiddleName, LastName, Gender 
            FROM student
            WHERE LRNNum = ?'
            );
    }
	$stmt->bindValue(1, $logged_id);
	$stmt->execute();
	$row = $stmt->fetch();
    $stmt->closeCursor();
    
    $middleName = explode(' ', $row[1]);
    $middleInitial = '';
    foreach ($middleName as $MI)
      $middleInitial .= $MI[0] . '.';
    $fullname = $row[0] . ' ' . $middleInitial . ' ' . $row[2];

    $honorific = '';
    if($_SESSION['access'] != 'student'){
        $honorific = ($row[3] == 'Male') ? 'Sir ' : 'Ma\'am ';
    }
?>