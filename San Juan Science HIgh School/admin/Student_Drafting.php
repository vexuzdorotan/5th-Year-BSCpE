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
	<link rel="stylesheet" type="text/css" href="../css/all.css" />
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
	<link rel="icon" href="../pictures/logo.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<img src="../pictures/logodesign.jpg" class="logodesign">
		<div class="header mb-3">
			<legend class="h4 pl-2 pt-3 mb-0">STUDENT DRAFTING</legend>
			<div class="menu">
				<a href="#">Administrator</a>|<a href="Dashboard.php">Menu</a>|<a href="../Portal.php">Logout</a>
			</div>
		</div>
		<div class="room-container row">
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
	<div id="firstCol" class="m-auto">
		<p class="h5 m-3">Select an option:</p>
		<button class="btn-sm btn-light border-dark ml-4">Add to Section</button>
		<button class="btn-sm btn-light border-dark ml-4 mr-4">Change Section</button>
		<div class="border-top border-dark mt-3 p-4">
			<p><label for="">LRN Number:	<input class="form-control" type="search" id="txt_LRNNum" disabled/></label> <button class="modal-button"><i class="far fa-window-restore"></i></button></p>
			<p><label for="">Student Name: <input class="form-control" type="search" id="txt_StudentName" disabled/></label></p>
			<p><label for="">Grade Level: <input class="form-control" type="search" id="txt_GradeLevel" disabled/></label></p>
			<!-- <p><label for="">Pick Section:</label><button>&check;</button></p> -->
			<p>
				<label for="">Section:
					<input class="form-control" type="search" id="txt_SectionNum" style = "display: none;" disabled/>
					<input class="form-control" type="search" id="txt_SectionName" disabled/>
				</label>
				<button class="modal-button"><i class="far fa-window-restore"></i></button>
			</p>
		</div>
		
	</div>
	<div class="footer">
      <p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved</p>
   </div>
	<script type="text/javascript" src="../js/ajax.js"></script>
	<script type="text/javascript" src="../js/utility.js"></script>
	<script type="text/javascript" src="../js/cms.js"></script>
	<script type="text/javascript" src="../js/StudentDrafting.js"></script>
	<script type="text/javascript" src="../js/modal.js"></script>
</body>
</html>
