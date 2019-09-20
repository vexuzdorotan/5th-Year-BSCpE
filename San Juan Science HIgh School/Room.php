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
	<div class="width100">
	<div class="width50" style="float: left;" id="Room">
	<h1>ROOM</h1>
	<p><label for="RoomNum">Room Number: <input type="text" name="RoomNum" id="RoomNum" required/></label></p>
	<p><label for="RoomName">Room Name: <input type="text" name="RoomName" id="RoomName" required/></label></p>
	<p><label for="Floor">Floor: <input type="number" name="Floor" id="Floor" min = "1" required/></label></p>
	<p><label for="Capacity">Capacity: <input type="number" name="Capacity" id="Capacity" min="30" max="50" required/></label></p>
	<p><label for="RoomType">Room Type: <select id="RoomType" name="RoomType">
		<option selected="selected">Classroom</option>
		<option>Laboratory</option>
		<option>Office</option>
	</select></label></p>
	<button id="CreateRoom">Create Room</button>
	<!-- <button id="EditRoom">Edit Room</button> -->
	<!-- <p><label for="SubName">Subject Name: <input type="text" name="SubName" id="SubName"/></label></p> -->
	</div>
	<div class="width50" style="float: right;">
	<p><label for="SearchRoom"><input type="search" id="SearchRoom"></label></p>
		<table id="SearchRoomTable">
			<thead>
				<td>Room Number</td>
				<td>Room Name</td>
				<td>Floor</td>
				<td>Capacity</td>
				<td>Type</td>
				<td></td>
			</thead>
			<tbody>
				<!-- <td></td> -->
			</tbody>
		</table>
	</div>
	</div>
	<div class="width100" id="Section">
	<div class="width50">
	<h1>SECTION</h1>
	<p><label for="SecName">Section Name: <input type="text" name="SecName" id="SecName" required/></label></p>
	<p><label for="GradeLevel">For Grade: <select id="GradeLevel" name="GradeLevel">
		<option selected="selected">Grade 7</option>
		<option>Grade 8</option>
		<option>Grade 9</option>
		<option>Grade 10</option>
	</select></label></p>
	<p><label for="Room">Room: <input type="text" name="SecName" id="SecName" required/></label></p>
	<button id="CreateSection">Create Section</button>
	</div>
	<div class="width50">
		
	</div>
	</div>
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/cms.js"></script>
	<script type="text/javascript" src="js/Room.js"></script>
</body>
</html>  