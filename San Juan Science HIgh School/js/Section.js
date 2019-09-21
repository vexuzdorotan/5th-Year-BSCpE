var searchSection = document.getElementById("SearchSection");
var createSection = document.getElementById("CreateSection");
var resetSection = document.getElementById("ResetSection");
// var createSection = document.getElementById("CreateSection");
var parent_id = "Section";

//node = document.querySelectorAll("#SearchSectionTable thead td");

searchSection.addEventListener("change", Search.bind(null, searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1)));
createSection.addEventListener("click", Create.bind(null, createSection));
resetSection.addEventListener("click", ResetInput.bind(null, resetSection));