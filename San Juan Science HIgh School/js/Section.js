var searchSection = document.getElementById("SearchSection");
var createSection = document.getElementById("CreateSection");
var resetSection = document.getElementById("ResetSection");
// var createSection = document.getElementById("CreateSection");

searchSection.addEventListener("change", SearchID.bind(null, searchSection));
createSection.addEventListener("click", Create.bind(null, createSection));
resetSection.addEventListener("click", ResetInput.bind(null, resetSection));