<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
        header('Location: ../Portal.php');
    }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Scheduling</title>
	<style type="text/css">
		thead, td, table{
			border: 1px solid black;
		}
		table{
			border-collapse: collapse;
		}
		table *{
			text-align: center;
		}
	</style>
	<link rel="stylesheet" type="text/css" href="../css/modal.css"/>
	<link rel="stylesheet" type="text/css" href="../css/all.css" />
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="../css/merged-styles.css"/>
	<link rel="icon" href="../pictures/logo.png" />
</head>
<body>
	<img src="../pictures/logodesign.jpg" class="w-100">
	<div class="header mb-3">
      <legend class="h4 pl-2 pt-3 mb-0">SCHEDULING</legend>
      <div class="menu">
         <a href="#">Administrator</a>|<a href="Dashboard.php">Menu</a>|<a href="../Portal.php">Logout</a>
      </div>
   </div>
	<div class="room-container">
	<div id="modal">
		<div id="modal-content">
			<span id="close" onclick="closeModal(document.getElementById('modal-body'));">&times;</span>
			<div id="modal-header">
				<h2 id="modal-title"></h2>
			</div>
			<div id= "modal-body">
			</div>
			<!-- <div class="ml-3 mr-3 mt-0"> -->
        	<!-- <nav aria-label="Page navigation example"> -->
            	<!-- <ul class="pagination justify-content-end">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link maroon" href="#">1</a></li>
                    <li class="page-item"><a class="page-link maroon" href="#">2</a></li>
                    <li class="page-item"><a class="page-link maroon" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link maroon" href="#">Next</a>
                    </li>
                </ul> -->
            <!-- </nav> -->
			<!-- </div> -->
			<div id="modal-footer">	
			</div>
		</div>
	</div>
	<div class="float-right">
		<input type="text" id="txt_SectionNum" style="display: none;"/>
			<label for="">Section Name: <input class="ml-2 sec-name" type="text" id="txt_SectionName" required/></label>
			<button class="modal-button"><i class="far fa-window-restore"></i></button>
		
	</div>
	<br/>
	<p><b>Grade Level: </b><span id="txt_GradeLevel"></span></p>
	<p><b>Adviser: </b><span id="txt_Adviser"></span></p>
	<table class="mt-3 s-table">
		<thead class="dark">
			<tr>
				<td>TIME</td>
				<td>Monday</td>
				<td>Tuesday</td>
				<td>Wednesday</td>
				<td>Thursday</td>
				<td>Friday</td>
			</tr>
		</thead>
			<tr>
				<td>6:00-7:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>7:00-8:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>8:00-9:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>9:00-9:20</td>
				<!-- AM BREAK -->
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>9:20-10:20</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>10:20-11:20</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>11:20-12:20</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>12:20-1:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>1:00-2:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>2:00-3:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td>3:00-4:00</td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		<tbody>
			
		</tbody>
	</table>
	<!-- <button>SUBMIT</button> -->
	<button class="rounded-pill">RESET</button>
<script type="text/javascript" src="../js/ajax.js"></script>
<script type="text/javascript" src="../js/utility.js"></script>
<script type="text/javascript" src="../js/cms.js"></script>
<script type="text/javascript" src="../js/Scheduling.js"></script>
<script type="text/javascript" src="../js/modal.js"></script>
</body>
</html>