// console.log(user);
var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var resetRoom = document.getElementById("ResetRoom");
// var createSection = document.getElementById("CreateSection");

var parent_id = "Room";
var tableName = 'room';
var Search = function(){
	SearchWithoutQuery(
		parent_id,
		searchRoom, 
		GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1),
		null
	);
	// console.log("SEARCHING")
}

var initialValue = null;
Search();
searchRoom.addEventListener("change", Search);
createRoom.addEventListener("click", function(){
	if(document.getElementById("txt_RoomName").value == ""){
		document.getElementById("txt_RoomName").value = document.getElementById("txt_RoomNum").value;
	}
	Create( 
		createRoom, 
		null, 
		0, //If autoincrement
		null, //FK
		null, //ToUpdate
		CheckIfCreated,
		CheckIfUpdated
	);
	// Search(searchRoom, GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1));
});
resetRoom.addEventListener("click", ResetInput.bind(null, initialValue));
// createSection.addEventListener("click", Create.bind(null, createSection.id));