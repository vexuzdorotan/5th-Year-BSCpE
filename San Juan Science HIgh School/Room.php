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
	<p><label for="txt_RoomNum">Room Number: <input type="text" name="txt_RoomNum" id="txt_RoomNum" required/></label></p>
	<p><label for="txt_RoomName">Room Name: <input type="text" name="txt_RoomName" id="txt_RoomName" required/></label></p>
	<p><label for="txt_Floor">Floor: <input type="number" name="txt_Floor" id="txt_Floor" min = "1" required/></label></p>
	<p><label for="txt_Capacity">Capacity: <input type="number" name="txt_Capacity" id="txt_Capacity" min="5" max="50" required/></label></p>
	<p><label for="txt_Type">Room Type: <select id="txt_Type" name="txt_Type">
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
				<td id="Type">Type</td>
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
	<script type="text/javascript" src="js/ajax.js"></script>
	<script type="text/javascript" src="js/utility.js"></script>
	<script type="text/javascript" src="js/cms.js"></script>
	<script type="text/javascript" src="js/Room.js"></script>
</body>
</html>  