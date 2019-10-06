<?php

$dsn = 'mysql:dbname=sjshs;host=localhost;port=3306';
$username = 'tgold';
$password = 'payaman';
try { //UNBUFFERED
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // also allows an extra parameter of configuration
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    //$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    // echo '"Connection Successful"';
    
    //BUFFERED
} 
catch(PDOException $e) {
    die('Could not connect to the database:<br/>' . $e);
}
?>
