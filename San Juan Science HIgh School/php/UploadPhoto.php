<?php

$target_dir = "../pictures/student/";

//What does PHP receive?
// if(empty(($_POST['sjajsaj']))){
// 	echo "HI";
// }
//Move files to a directory
foreach ($_FILES['files']['tmp_name'] as $key => $value) {
    # code...
    $targetpath = $target_dir . basename($_FILES['files']['name'][$key]);
    if(move_uploaded_file($value, $targetpath)){
        echo true;
    }
}

//SIZE IS NOT YET CONSIDERED
?>