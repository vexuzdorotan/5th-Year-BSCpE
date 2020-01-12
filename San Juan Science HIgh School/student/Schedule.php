<?php
	session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "student"){
        header('Location: ../Portal.php');
	}
	
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
		function RetrieveSectionSchedule(){
			// var columnNames = {};
			// columnNames[3] = "Subject.SubjectCode";
			// columnNames[1] = "SubjectTime"; 
			// columnNames[2] = "SubjectDay";
			// columnNames[0] = "Subject.SectionNum";

			// SearchWithQuery(//Can be replaced by JOINING sched and subject
			// 	"Sched",
			// 	"Subject",
			// 	columnNames,
			// 	null,
			// 	"LEFT JOIN",
			// 	"subject.SubjectID = sched.SubjectID",
			// 	28, //Equivalent to first columnName or columnIDS
			// 	null,
			// 	Retrieved
			// );
			// function SimplifiedQuery(crud,query,searchbox,callback){
			console.log('<?php echo($_SESSION['id'])?>');
			var query;
			query = "SELECT subject.SubjectCode, sched.SubjectTime, sched.SubjectDay, subjectcode.SubjectDescription ";
			query += "FROM subject ";
			// query += "FROM subject LEFT JOIN student_section ";
			// query += "ON student_section.SectionNum = subject.SectionNum ";
			query += "LEFT JOIN sched ON sched.SubjectID = subject.SubjectID "; 
			query += "LEFT JOIN student_section ";
			query += "ON student_section.SectionNum = subject.SectionNum ";
			query += "LEFT JOIN subjectcode ON subject.SubjectCode = subjectcode.SubjectCode ";
			query += "WHERE student_section.LRNNum = <?php echo($_SESSION['id'])?>";
			SimplifiedQuery(
				"SELECT",
				query,
				null,
				Retrieved
			);
			// console.log(txt_SectionNum);
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
					if(table.rows[GetParentRow(json[i][1])].cells[GetParentCol(json[i][2])].innerHTML != ""){
						var title = document.createAttribute("title"); //SETTING TITLE
						title.value = json[i][3];
						table.rows[GetParentRow(json[i][1])].cells[GetParentCol(json[i][2])].setAttributeNode(title);
					}
				}
			}
			catch(err){
				console.log(err);
			}
		}
		RetrieveSectionSchedule();

	</script>
</body>
</html>