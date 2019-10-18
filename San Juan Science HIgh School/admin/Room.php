<!DOCTYPE html>
<html>
<head>
	<title>Room</title>
	<link rel="stylesheet" type="text/css" href="../css/Entire.css"/>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="../css/merged-styles.css" />
    <link rel="icon" href="../pictures/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
	<img src="../pictures/logodesign.jpg" class="logodesign">
	<div class="header mb-3">
      <legend class="h4 pl-2 pt-3 mb-0">MANAGE ROOMS</legend>
      <div class="menu">
         <a href="#">Administrator</a>|<a href="Dashboard.html">Menu</a>|<a href="../Portal.html">Logout</a>
      </div>
   	</div>
   	<div class="room-container row">
		<div class="col-12 col-xl-4" id="Room">
			<p class="h5 mb-2">Room Details</p>
			<p class="p-0 mt-4"><label for="txt_RoomNum">Room Number: <input class="small" type="text" name="txt_RoomNum" id="txt_RoomNum" required/></label></p>
			<p><label for="txt_RoomName">Room Name: <input class="float-left mb-2" type="text" name="txt_RoomName" id="txt_RoomName" required/></label></p>
			<p"><label for="txt_Floor">Floor: <input class="ml-2" type="number" name="txt_Floor" id="txt_Floor" min = "1" required/></label>
			<!-- <label class="pl-3" for="txt_Capacity">Capacity: <input class="ml-2 mb-2" type="number" name="txt_Capacity" id="txt_Capacity" min="5" max="50" required/></label></p> -->
			<p><label for="txt_Type">Room Type: <select id="txt_Type" name="txt_Type">
				<option selected="selected">Classroom</option>
				<option>Laboratory</option>
				<option>Office</option>
			</select></label></p>
		
			<!-- <button class="rounded-pill create-button" id="CreateRoom">Create Room</button> -->
			<button class="rounded-pill create-button" id="CreateRoom">Create</button>
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
					<!-- <td scope="col" id="Capacity">Capacity</td> -->
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
	</div>
	<script type="text/javascript" src="../js/ajax.js"></script>
	<script type="text/javascript" src="../js/utility.js"></script>
	<script type="text/javascript" src="../js/cms.js"></script>
	<script type="text/javascript" src="../js/Room.js"></script>
</body>
</html>  