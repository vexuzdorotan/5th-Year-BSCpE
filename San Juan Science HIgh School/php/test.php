<?php
	
	$string = 'JoseMariGabon';
	$array = explode('@', $string);

	$string = str_replace("Gab", "Bag", $string);

	echo $string;
?>