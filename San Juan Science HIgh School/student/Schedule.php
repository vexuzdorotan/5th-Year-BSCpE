<?php
	session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "student"){
        header('Location: ../Portal.php');
    }
    $logged_id = $_SESSION['id'];
    include '../php/Header_User.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>Schedule</title>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Subject Grades</title>

    <link rel="stylesheet" type="text/css" href="../css/modal.css" />
    <link rel="stylesheet" type="text/css" href="../css/all.css" />
    <link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
    <link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
    <link rel="icon" href="../pictures/logo.png" />
</head>
<body>
	<img src="../pictures/logodesign.jpg" class="logodesign">

    <div class="header mb-3">
        <legend class="h4 pl-0 pt-3 mb-0">SCHEDULE</legend>
        <div class="menu">
        <a href="#"><?php echo 'Welcome, ' . $honorific . $fullname?></a>|<a href="Dashboard.php">Menu</a>|<a href="../Portal.php">Logout</a>
        </div>
    </div>
    <div class="room-container">
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
	</div>
	</div>
	<script type="text/javascript" src="../js/ajax.js"></script>
	<script type="text/javascript" src="../js/cms.js"></script>
	<script type="text/javascript" src="../js/utility.js"></script>
	<!-- <script type="text/javascript" src="../js/modal.js"></script> -->
	<!-- <script type="text/javascript" src="../js/TeacherScheduling.js"></script> -->
	<script type="text/javascript">
		var table = document.querySelector("table"); //
		var tr = document.querySelectorAll("tbody tr"); //
		function RetrieveTeacherSchedule(){
			var columnNames = {};
			// columnNames[3] = "Subject.SubjectCode";
			columnNames[0] = "SubjectID"; 
			columnNames[1] = "SubjectTime"; 
			columnNames[2] = "SubjectDay";

			SearchWithQuery(
				"Sched",
				"Subject",
				columnNames,
				null,
				"LEFT JOIN",
				"subject.SubjectID = sched.SubjectID",
				'',
				"EmployeeNum = '"+"<?php echo($_SESSION['id']);?>"+"'",
				Retrieved
			);
		}
		function Retrieved(xhttp){
			var json;	
			json = JSON.parse(xhttp.responseText);
			console.log(json);
			for(var i = 1; i < tr.length+1; i++){
				for(var j = 1; j < tr[0].childElementCount; j++){
					table.rows[i].cells[j].innerHTML = "";
				}	
			}
			try{
				for(var i = 0; i < json.length; i++){
					table.rows[GetParentRow(json[i][1])].cells[GetParentCol(json[i][2])].innerHTML = json[i][0];
				}
			}
			catch(err){
				console.log(err);
			}
		}
		RetrieveTeacherSchedule();
	</script>
</body>
</html>