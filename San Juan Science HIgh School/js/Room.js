var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var resetRoom = document.getElementById("ResetRoom");
var createSection = document.getElementById("CreateSection");

var parent_id = "Room";

searchRoom.addEventListener("change", Search.bind(null, searchRoom, GetID(document.querySelectorAll("#SearchRoomTable thead td"), 1)));
createRoom.addEventListener("click", Create.bind(null, createRoom));
resetRoom.addEventListener("click", ResetInput.bind(null, createRoom));




// createSection.addEventListener("click", Create.bind(null, createSection.id));