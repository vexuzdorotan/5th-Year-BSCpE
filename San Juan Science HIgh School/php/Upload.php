<?php
$target_dir = "../pictures/student/";

foreach ($_FILES['files']['tmp_name'] as $key => $value) {
  	# code...
   	// $target_dir = "../pictures/student/";
   	$targetpath = $target_dir . basename($_FILES['files']['name'][$key]);
    if(move_uploaded_file($value, $targetpath)){
        echo true;
    }
}

?>