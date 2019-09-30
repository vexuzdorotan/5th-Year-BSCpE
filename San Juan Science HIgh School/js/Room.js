var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var resetRoom = document.getElementById("ResetRoom");
var createSection = document.getElementById("CreateSection");

var parent_id = "Room";
Search(searchRoom, GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1));
searchRoom.addEventListener("change", Search.bind(null, searchRoom, GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1)));
createRoom.addEventListener("click", function(){
	Create( 
		createRoom, 
		null, 
		0, //If autoincrement
		null, //FK
		null //ToUpdate
	);
	Search(searchRoom, GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1));
});
resetRoom.addEventListener("click", ResetInput.bind(null, createRoom));




// createSection.addEventListener("click", Create.bind(null, createSection.id));