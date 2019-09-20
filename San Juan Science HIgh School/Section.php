<!DOCTYPE html>
<html>
<head>
	<title>Section</title>
	<link rel="stylesheet" type="text/css" href="css/Entire.css"/>
</head>
<body>
	<div style="width: 50%; float: left;" id="Section">
	<h1>SECTION</h1>
	<p><label for="SecName">Section Name: <input type="text" name="SectionName" id="SectionName" required/></label></p>
	<p><label for="GradeLevel">For Grade: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">Grade 7</option>
		<option>Grade 8</option>
		<option>Grade 9</option>
		<option>Grade 10</option>
	</select></label></p>
	<p><label for="">Room: <input type="text" name="SecName" id="RoomNum" required/></label></p>
	<button id="CreateSection">Create Section</button>
	<button id="ResetSection">Reset</button>
	</div>
	<div style="width: 50%; float: right;">
		<p><label for="SearchSection"><input type="search" id="SearchSection"></label></p>
		<table id="SearchSectionTable">
			<thead>
				<!-- <td>Section Number</td> -->
				<td>Section Name</td>
				<td>GradeLevel</td>
				<td>RoomNum</td>
				<!-- <td>Type</td> -->
				<td></td>
			</thead>
			<tbody>
				<!-- <td></td> -->
			</tbody>
		</table>
	</div>
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/cms.js"></script>
	<script type="text/javascript" src="js/Section.js"></script>
</body>
</html>