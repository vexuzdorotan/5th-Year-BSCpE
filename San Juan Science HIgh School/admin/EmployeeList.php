<?php
    session_start();
    if($_SESSION['id'] === null || $_SESSION['access'] != "admin"){
        header('Location: ../Portal.php');
    }
?>
<!DOCTYPE html>
<html>
<head>
	<title>Section</title>
	<link rel="stylesheet" type="text/css" href="../css/modal.css"/>
	<link rel="stylesheet" type="text/css" href="../css/merged-styles.css"/>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css"/>
	<!-- <link rel="stylesheet" type="text/css" href="..css/all.css" /> -->
	<link rel="icon" href="../pictures\logo.png" />
</head>
<body>
	<img src="../pictures/logodesign.jpg" class="w-100">
	<div class="header mb-3">
      <legend class="h4 pl-2 pt-3 mb-0">LIST OF Employee</legend>
      <div class="menu">
         <a href="#">Administrator</a>|<a href="Dashboard.php">Menu</a>|<a href="../Portal.php">Logout</a>
      </div>
   </div>
   <div class="sec-container row">
	<!-- <div class="col-xl-4" id="Section">
		<p class="h5 pb-2">Section Details</p>
		<p><input type="text" id="txt_SectionNum" style="display: none;"/>
		<label for="">Section Name: <br/><input type="text" id="txt_SectionName" required/></label></p>
	<p>
		<label for="">Room: <input class="mt-2 small" type="search" id="txt_RoomNum" disabled/></label>
		<button onclick="CreateModal('Available Rooms', 'Room')">&check;</button>
	</p>
	<p>
		<label for="">Adviser: <br/><input type="search" id="txt_TeacherEmployeeNum" style="display: none;" />
		<input type="search" id="txt_TeacherName" disabled/></label>
		<button onclick="CreateModal('Available Teachers', 'Teacher')">&check;</button>
	</p>
	
	<label class="ml-2" for="GradeLevel">Grade Level: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">7</option>
		<option>8</option>
		<option>9</option>
		<option>10</option>
	</select></label></p>
	<button class="mt-3 rounded-pill create-button" id="CreateSection">Create</button>
	<button class="mt-3 rounded-pill" id="ResetSection">Reset</button>
	</div> -->

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
	<div class="secondCol col-xl-12">
		<p class="h5 pb-2">
			<label class="float-right" for="SearchEmployee">
				<input placeholder="Search for Employees.." type="search" class="mt-1 form-control rounded-0 bg-light" id="SearchEmployee">
			</label></p>
		<table id="SearchEmployeeTable">
			<thead class="dark">
				<tr>
				<!-- <td>Section Number</td> -->
				<td id="EmployeeNum">Employee Number</td>
				<td id="LastName">Last Name</td>
				<td id="FirstName">First Name</td>
				<td id="MiddleName">Middle Name</td>
				<td id="Birthday" style="display: none;"></td>
				<td id="Street_Address1" style="display: none;"></td>
				<td id="Street_Address2" style="display: none;"></td>
				<td id="City" style="display: none;"></td>
				<td id="Province" style="display: none;"></td>
				<td id="URL_Picture" style="display: none;"></td>
				<td id="Country" style="display: none;"></td>
				<!-- <td id="Address">Address</td> -->
				<td id="Gender" style="display: none;">Gender</td>
				<td id="Position">Account Type</td>
				<!-- <td id="GradeLevel">Grade Level</td> -->
				<!-- <td id="Type" style="display: none;"></td> -->

				
				<!-- <td id="Population">Population</td> -->
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
	<script type="text/javascript">
		var user = "<?php echo($_SESSION['access']);?>";
		// console.log(user);
	</script>
	<script type="text/javascript" src="../js/ajax.js"></script>
	<script type="text/javascript" src="../js/utility.js"></script>
	<script type="text/javascript" src="../js/cms.js"></script>
	<script type="text/javascript" src="../js/EmployeeList.js"></script>
	<script type="text/javascript" src="../js/modal.js"></script>
</body>
</html>