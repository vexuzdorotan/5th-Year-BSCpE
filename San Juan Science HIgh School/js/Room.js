var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var createSection = document.getElementById("CreateSection");

searchRoom.addEventListener("change", Search.bind(null, searchRoom));
createRoom.addEventListener("click", Create.bind(null, createRoom));

createSection.addEventListener("click", Create.bind(null, createSection.id));