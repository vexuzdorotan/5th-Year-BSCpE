<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
        header('Location: ../Portal.php');
    }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Student</title>
	<link rel="stylesheet" type="text/css" href="../css/modal.css">
	<link rel="stylesheet" type="text/css" href="../css/Entire.css">
</head>
<body>
	<div id="modal">
		<div id="modal-content">
			<span id="close" onclick="closeModal(document.getElementById('modal-body'));">&times;</span>
			<div id="modal-header" >
				<h2 id="modal-title"></h2>
			</div>
			<div id= "modal-body">
			</div>
			<div id="modal-footer">	
			</div>
		</div>
	</div>
	<div id="firstCol">
		<h1>Student Assignment</h1>
		<button>Add Section</button>
		<button>Change Section</button>
		<p><label for="">LRN Number:	<input type="search" id="txt_LRNNum" disabled/></label><button>&check;</button></p>
		<p><label for="">Student Name: <input type="search" id="txt_StudentName" disabled/></label></p>
		<p><label for="">Grade Level: <input type="search" id="txt_GradeLevel" disabled/></label></p>
		<!-- <p><label for="">Pick Section:</label><button>&check;</button></p> -->
		<p>
			<label for="">Section:	
				<input type="search" id="txt_SectionNum" style = "display: none;" disabled/>
				<input type="search" id="txt_SectionName" disabled/>
			</label>
			<button>&check;</button>
		</p>
	</div>
	<script type="text/javascript" src="../js/ajax.js"></script>
	<script type="text/javascript" src="../js/modal.js"></script>
	<script type="text/javascript" src="../js/utility.js"></script>
	<script type="text/javascript" src="../js/cms.js"></script>
	<script type="text/javascript" src="../js/StudentDrafting.js"></script>
</body>
</html>
