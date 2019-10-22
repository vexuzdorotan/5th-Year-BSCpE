<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
        header('Location: ../Portal.php');
    }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Scheduling for Teachers</title>
	<link rel="stylesheet" type="text/css" href="../css/modal.css"/>
	<link rel="stylesheet" type="text/css" href="../css/all.css" />
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css"/>
	<link rel="stylesheet" type="text/css" href="../css/merged-styles.css"/>
	<link rel="icon" href="../pictures/logo.png" />
	<style type="text/css">
		#firstCol{
			float: left;
			width: 30%;
			height: 100%;
		}
		#secondCol{
			float: right;
			width: 69%;
			height: 100%;
		}
		#secondCol table{
			margin: 10% 0% 0% 20%;
		}
		#secondCol button{
			margin: 0% 0% 0% 20%;
		}
	</style>
</head>
<body>
	<img src="../pictures/logodesign.jpg" class="w-100">
	<div class="header mb-3">
      <legend class="h4 pl-2 pt-3 mb-0">SCHEDULING FOR TEACHERS</legend>
      <div class="menu">
         <a href="#">Administrator</a>|<a href="../dashboards/Scheduling.html">Menu</a>|<a href="Portal.html">Logout</a>
      </div>
   </div>
   <div class="room-container">
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
	<div>
	<p>
		<label for="">Teacher: <input type="search" id="txt_TeacherEmployeeNum" style="display: none;" />
		<input type="search" id="txt_TeacherName" disabled/></label>
		<button class="modal-button"><i class="far fa-window-restore"></i></button>
	</p>
	<p>
		<label for="">Add Subject:</label>
		<button class="modal-button"><i class="far fa-window-restore"></i></button>
	</p><br/>
	</div>
	<div class="s-table">
	<table>
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
	<button class="rounded-pill">RESET</button>
	</div>
	<!-- <button>SUBMIT</button> -->
<script type="text/javascript" src="../js/ajax.js"></script>
<script type="text/javascript" src="../js/cms.js"></script>
<script type="text/javascript" src="../js/utility.js"></script>
<script type="text/javascript" src="../js/modal.js"></script>
<script type="text/javascript" src="../js/TeacherScheduling.js"></script>
</body>
</html>