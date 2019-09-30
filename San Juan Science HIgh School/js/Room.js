var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var resetRoom = document.getElementById("ResetRoom");
var createSection = document.getElementById("CreateSection");

var parent_id = "Room";
var Search = function(){
	SearchWithoutQuery(
		searchRoom, 
		GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1)
	);
}
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
resetRoom.addEventListener("click", ResetInput.bind(null, createRoom));




// createSection.addEventListener("click", Create.bind(null, createSection.id));