<?php
    include '../php/ConnectToDB.php';

    if($_SESSION['access'] != 'student') {
        $stmt = $db->prepare(
            // 'SELECT IF(MiddleName IS NULL, CONCAT(FirstName, " " , LastName), CONCAT(FirstName, " " , LEFT(MiddleName, 1), ". ", LastName)) , Gender
            'SELECT FirstName, MiddleName, LastName, Gender
            FROM employee
            WHERE EmployeeNum = ?'
        );
    } else {
        $stmt = $db->prepare(
            // 'SELECT IF(MiddleName IS NULL, CONCAT(FirstName, " " , LastName), CONCAT(FirstName, " " , LEFT(MiddleName, 1), ". ", LastName)) , Gender
            'SELECT FirstName, MiddleName, LastName, Gender
            FROM student
            WHERE LRNNum = ?'
        );
    }
	$stmt->bindValue(1, $_SESSION['id']);
	$stmt->execute();
	$row = $stmt->fetch();
    $stmt->closeCursor();


    // supported also with double-barrelled MiddleName --- ex: Dela Cruz = "D.C." (not "D." only)
    $middleInitial = '';

    if ($row[1] != '') { // if MiddleName IS NOT NULL
        $middleName = explode(' ', $row[1]);

        foreach ($middleName as $MI) {
            $middleInitial .= $MI[0] . '.';
        }
    }

    $fullname = $row[0] . ' ' . $middleInitial . ' ' . $row[2];


    $honorific = '';
    if($_SESSION['access'] != 'student'){
        $honorific = ($row[3] == 'Male') ? 'Sir ' : 'Ma\'am ';
    }
?>