<!DOCTYPE html>
<html>
<head>
	<title>Section</title>
	<link rel="stylesheet" type="text/css" href="css/Entire.css"/>
	<link rel="stylesheet" type="text/css" href="css/modal.css"/>
</head>
<body>
	<div style="width: 50%; float: left;" id="Section">
	<h1>SECTION</h1>
	<p><label for="SecName">Section Name: <input type="text" id="SectionName" required/></label></p>
	<p>
		<label for="">Room: <input type="text" id="RoomNum" required/></label>
		<button onclick="CreateModal(this.id, 'Room')" id="applRoom">&check;</button>
	</p>
	<p>
		<label for="">Adviser: <input type="text" id="Adviser" disabled/></label>
		<button onclick="CreateModal(this.id, 'Teacher')" id="applAdviser">&check;</button>
	</p>
	<p><label for="">Population: <input type="text" id="Population" disabled/></label></p>
	<p><label for="GradeLevel">For Grade: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">Grade 7</option>
		<option>Grade 8</option>
		<option>Grade 9</option>
		<option>Grade 10</option>
	</select></label></p>
	<button id="CreateSection">Create Section</button>
	<button id="ResetSection">Reset</button>
	</div>

		<!-- ENTER QTY OF BOOK -->
	<div id="modal">
		<div id="modal-content">
			<span id="close" onclick="closeModal(document.getElementById('modal-body'));">&times;</span>
			<div id="modal-header">
				<h2 id="modal-title"></h2>
			</div>
			<div id= "modal-body">
			</div>
			<div id="modal-footer">	
			</div>
		</div>
	</div>
	<div style="width: 50%; float: right;">
		<p><label for="SearchSection"><input type="search" id="SearchSection"></label></p>
		<table id="SearchSectionTable">
			<thead>
				<tr>
				<!-- <td>Section Number</td> -->
				<td id="SectionName">Section Name</td>
				<td id="RoomNum">Room Number</td>
				<td id="Adviser">Adviser</td>
				<td id="Population">Population</td>
				<td id="GradeLevel">GradeLevel</td>
				<!-- <td>Type</td> -->
				<td></td>
				</tr>
			</thead>
			<tbody>
				<!-- <td></td> -->
			</tbody>
		</table>
	</div>
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/utility.js"></script>
	<script type="text/javascript" src="js/cms.js"></script>
	<script type="text/javascript" src="js/Section.js"></script>
	<script type="text/javascript" src="js/modal.js"></script>
</body>
</html>