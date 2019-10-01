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
	<p><input type="text" id="txt_SectionNum" style="display: none;"/>
		<label for="">Section Name: <input type="text" id="txt_SectionName" required/></label></p>
	<p>
		<label for="">Room: <input type="search" id="txt_RoomNum" required/></label>
		<button onclick="CreateModal('Room', 'Room')">&check;</button>
	</p>
	<p>
		<label for="">Adviser: <input type="search" id="txt_TeacherEmployeeNum" style="display: none;" />
		<input type="search" id="txt_TeacherName" disabled/></label>
		<button onclick="CreateModal('Adviser', 'Teacher')">&check;</button>
	</p>
	<p><label for="">Population: <input type="number" id="Population" disabled value="0"/></label></p>
	<p><label for="GradeLevel">Grade Level: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">7</option>
		<option>8</option>
		<option>9</option>
		<option>10</option>
	</select></label></p>
	<button id="CreateSection">Create</button>
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
				<td id="SectionNum" style="display: none;">Section Name</td>
				<td id="SectionName">Section Name</td>
				<td id="RoomNum">Room Number</td>
				<td id="TeacherEmployeeNum" style="display: none"></td>
				<td id="TeacherName">Adviser</td>
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