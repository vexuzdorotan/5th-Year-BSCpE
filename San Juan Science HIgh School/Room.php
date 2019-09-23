<!DOCTYPE html>
<html>
<head>
	<title>Room</title>
	<link rel="stylesheet" type="text/css" href="css/Entire.css"/>
	<style type="text/css">
		.width100{
			width: 100%;
		}

		.width50{
			width: 50%;
		}
	</style>
</head>
<body>
	<div style="width: 100%; height: 100%;">
	<div style="width: 30%;float: left;" id="Room">
	<h1>ROOM</h1>
	<p><label for="RoomNum">Room Number: <input type="text" name="RoomNum" id="RoomNum" required/></label></p>
	<p><label for="RoomName">Room Name: <input type="text" name="RoomName" id="RoomName" required/></label></p>
	<p><label for="Floor">Floor: <input type="number" name="Floor" id="Floor" min = "1" required/></label></p>
	<p><label for="Capacity">Capacity: <input type="number" name="Capacity" id="Capacity" min="5" max="50" required/></label></p>
	<p><label for="RoomType">Room Type: <select id="RoomType" name="RoomType">
		<option selected="selected">Classroom</option>
		<option>Laboratory</option>
		<option>Office</option>
	</select></label></p>
	<button id="CreateRoom">Create Room</button>
	<button id="ResetRoom">Reset</button>
	<!-- <button id="EditRoom">Edit Room</button> -->
	<!-- <p><label for="SubName">Subject Name: <input type="text" name="SubName" id="SubName"/></label></p> -->
	</div>
	<div style="float: right; width: 70%;">
	<p><label for="SearchRoom"><input type="search" id="SearchRoom"></label></p>
		<table id="SearchRoomTable">
			<thead>
				<tr>
				<td id="RoomNum">Room Number</td>
				<td id="RoomName">Room Name</td>
				<td id="Floor">Floor</td>
				<td id="Capacity">Capacity</td>
				<td id="RoomType">Type</td>
				<td></td>
				</tr>
			</thead>
			<tbody>
				<!-- <td></td> -->
			</tbody>
		</table>
		<!-- <button id="First">Create Room</button>
		<button id="Las">Reset</button> -->
	</div>
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