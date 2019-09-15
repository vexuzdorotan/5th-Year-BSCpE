<?php

$target_dir = "../pictures/student/";

//What does PHP receive?
// var_dump($_FILES);
//Move files to a directory
foreach ($_FILES['files']['tmp_name'] as $key => $value) {
    # code...
    $targetpath = $target_dir . basename($_FILES['files']['name'][$key]);
    move_uploaded_file($value, $targetpath);
}
?>