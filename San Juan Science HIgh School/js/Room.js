var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var resetRoom = document.getElementById("ResetRoom");
// var createSection = document.getElementById("CreateSection");

var parent_id = "Room";
var Search = function(){
	SearchWithoutQuery(
		parent_id,
		searchRoom, 
		GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1),
		null
	);
}

var initialValue = null;
Search();
searchRoom.addEventListener("change", Search);
createRoom.addEventListener("click", function(){
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