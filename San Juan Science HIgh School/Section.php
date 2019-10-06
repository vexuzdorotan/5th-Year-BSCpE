<!DOCTYPE html>
<html>
<head>
	<title>Section</title>
	<link rel="stylesheet" type="text/css" href="css/Entire.css"/>
	<link rel="stylesheet" type="text/css" href="css/modal.css"/>
	<link rel="stylesheet" type="text/css" href="css/Section.css"/>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
	<link rel="icon" href="pictures\logo.png" />
</head>
<body>
	<img src="pictures/logodesign.jpg" class="w-100">
	<div class="header mb-3">
      <legend class="h4 pl-2 pt-3 mb-0">MANAGE SECTIONS</legend>
      <div class="menu">
         <a href="#">Administrator</a>|<a href="Dashboard.html">Menu</a>|<a href="Portal.html">Logout</a>
      </div>
   </div>
   <div class="my-container row">
	<div class="col-xl-4" id="Section">
		<p class="h5 pb-2">Section Details</p>
		<p><input type="text" id="txt_SectionNum" style="display: none;"/>
		<label for="">Section Name: <br/><input type="text" id="txt_SectionName" required/></label></p>
	<p>
		<label for="">Room: <input type="search" id="txt_RoomNum" disabled/></label>
		<button onclick="CreateModal('Available Rooms', 'Room')">&check;</button>
	</p>
	<p>
		<label for="">Adviser: <br/><input type="search" id="txt_TeacherEmployeeNum" style="display: none;" />
		<input type="search" id="txt_TeacherName" disabled/></label>
		<button onclick="CreateModal('Available Teachers', 'Teacher')">&check;</button>
	</p>
	<p><label for="">Population: <input type="number" id="Population" disabled value="0"/></label></p>
	<p><label for="GradeLevel">Grade Level: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">7</option>
		<option>8</option>
		<option>9</option>
		<option>10</option>
	</select></label></p>
	<button class="rounded-pill create-button" id="CreateSection">Create</button>
	<button class="rounded-pill" id="ResetSection">Reset</button>
	</div>

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
	<div class="secondCol col-xl-8">
		<p class="h5 pb-2">List of Sections
			<label class="float-right" for="SearchRoom">
				<input placeholder="Search for sections.." type="search" class="mt-1 form-control rounded-0 bg-light" id="SearchSection">
			</label></p>
		<table id="SearchSectionTable">
			<thead class="dark">
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
	<div class="footer">
     		<p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved<a style="color: black; hover{color:black; text-decoration: none;}" href=#>.</a></p>
   		</div>
</div>
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/utility.js"></script>
	<script type="text/javascript" src="js/cms.js"></script>
	<script type="text/javascript" src="js/Section.js"></script>
	<script type="text/javascript" src="js/modal.js"></script>
</body>
</html>