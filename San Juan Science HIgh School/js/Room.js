var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var resetRoom = document.getElementById("ResetRoom");
var createSection = document.getElementById("CreateSection");

searchRoom.addEventListener("change", SearchID.bind(null, searchRoom));
createRoom.addEventListener("click", Create.bind(null, createRoom));
resetRoom.addEventListener("click", ResetInput.bind(null, createRoom));




// createSection.addEventListener("click", Create.bind(null, createSection.id));