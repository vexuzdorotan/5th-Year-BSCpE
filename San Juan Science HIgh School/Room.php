<!DOCTYPE html>
<html>
<head>
	<title>Room</title>
	<link rel="stylesheet" type="text/css" href="css/Entire.css"/>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="css/Room.css" />
    <link rel="icon" href="pictures\logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 66e46b2... Merge
	<div style="width: 100%; height: 100%;">
	<div style="width: 30%;float: left;" id="Room">
	<h1>ROOM</h1>
	<p><label for="txt_RoomNum">Room Number: <input type="text" name="txt_RoomNum" id="txt_RoomNum" required/></label></p>
	<p><label for="txt_RoomName">Room Name: <input type="text" name="txt_RoomName" id="txt_RoomName" required/></label></p>
	<p><label for="txt_Floor">Floor: <input type="number" name="txt_Floor" id="txt_Floor" min = "1" required/></label></p>
	<p><label for="txt_Capacity">Capacity: <input type="number" name="txt_Capacity" id="txt_Capacity" min="5" max="50" required/></label></p>
	<p><label for="txt_Type">Room Type: <select id="txt_Type" name="txt_Type">
		<option selected="selected">Classroom</option>
		<option>Laboratory</option>
		<option>Office</option>
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 5eb2f3c... Section is now finished
	<img src="pictures/logodesign.jpg" class="logodesign">
	<div class="header mb-3">
      <legend class="h4 pl-2 pt-3 mb-0">MANAGE ROOMS</legend>
      <div class="menu">
<<<<<<< HEAD
         <a href="#">Administrator</a>|<a href="Dashboard.html">Menu</a>|<a href="Portal.html">Logout</a>
=======
         <a href="#">Administrator</a>|<a href="#">Menu</a>|<a href="#">Logout</a>
>>>>>>> parent of 5eb2f3c... Section is now finished
      </div>
   	</div>
   	<div class="my-container row">
		<div class="col-12 col-xl-4" id="Room">
			<p class="h5 pb-2">Create Room</p>
			<p class="p-0 m-0"><label for="RoomNum">Room Number: <input type="text" name="RoomNum" id="RoomNum" required/></label></p>
			<p><label for="RoomName">Room Name: <input type="text" name="RoomName" id="RoomName" required/></label></p>
			<p"><label for="Floor">Floor: <input class="ml-2" type="number" name="Floor" id="Floor" min = "1" required/></label>
			<label class="pl-3" for="Capacity">Capacity: <input class="ml-2" type="number" name="Capacity" id="Capacity" min="5" max="50" required/></label></p>
			<p><label for="Type">Room Type: <select id="Type" name="Type">
				<option selected="selected">Classroom</option>
				<option>Laboratory</option>
				<option>Office</option>
			</select></label></p>
		
			<button class="rounded-pill create-button" id="CreateRoom">Create Room</button>
			<button class="rounded-pill reset-button" id="ResetRoom">Reset</button>
			<!-- <button id="EditRoom">Edit Room</button> -->
			<!-- <p><label for="SubName">Subject Name: <input type="text" name="SubName" id="SubName"/></label></p> -->
		</div>
		<div class="secondCol col col-xl-8">
			<p class="h5 pb-2">List of Rooms
			<label class="float-right" for="SearchRoom">
				<input placeholder="Search for rooms.." class="mt-1 form-control rounded-0 bg-light" type="search" id="SearchRoom">
			</label></p>
			<table id="SearchRoomTable">
				<thead class="dark">
					<tr>
					<td scope="col" id="RoomNum">Room Number</td>
					<td scope="col" id="RoomName">Room Name</td>
					<td scope="col" id="Floor">Floor</td>
					<td scope="col" id="Capacity">Capacity</td>
					<td scope="col" id="Type">Type</td>
					<td scope="col"></td>
					</tr>
				</thead>
				<tbody>
					<!-- <td></td> -->
				</tbody>
			</table>
			<!-- <button id="First">Create Room</button>
			<button id="Las">Reset</button> -->
		</div>
		<div class="footer">
      <p class="footer-text">© 2019 - San Juan Science High School. All Rights Reserved</p>
   </div>
<<<<<<< HEAD
	</div>
	<!-- <div class="width100" id="Section" style="height: 50%;">
	<div class="width50">
	<h1>SECTION</h1>
	<p><label for="SectionName">Section Name: <input type="text" name="SecName" id="SecName" required/></label></p>
	<p><label for="GradeLevel">For Grade: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">Grade 7</option>
		<option>Grade 8</option>
		<option>Grade 9</option>
		<option>Grade 10</option>
>>>>>>> a65db69cdcbdd15f42972c9484a0f58500bf1b29
=======
>>>>>>> parent of 66e46b2... Merge
	</select></label></p>
	<button id="CreateRoom">Create Room</button>
	<button id="ResetRoom">Reset</button>
	<!-- <button id="EditRoom">Edit Room</button> -->
	<!-- <p><label for="SubName">Subject Name: <input type="text" name="SubName" id="SubName"/></label></p> -->
=======
>>>>>>> parent of 5eb2f3c... Section is now finished
	</div>
	<!-- <div class="width100" id="Section" style="height: 50%;">
	<div class="width50">
	<h1>SECTION</h1>
	<p><label for="SectionName">Section Name: <input type="text" name="SecName" id="SecName" required/></label></p>
	<p><label for="GradeLevel">For Grade: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">Grade 7</option>
		<option>Grade 8</option>
		<option>Grade 9</option>
		<option>Grade 10</option>
	</select></label></p>
	<p><label for="SectionRoom">Room: <input type="text" name="SecName" id="SecName" required disabled/></label></p>
	<button id="CreateSection">Create Section</button>
	<button id="ResetSection">Reset</button>
	</div>
	<div class="width50">
		
	</div>
	</div> -->
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/utility.js"></script>
	<script type="text/javascript" src="js/cms.js"></script>
	<script type="text/javascript" src="js/Room.js"></script>
</body>
</html>  