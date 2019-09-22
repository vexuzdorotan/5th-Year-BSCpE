var searchSection = document.getElementById("SearchSection");
var createSection = document.getElementById("CreateSection");
var resetSection = document.getElementById("ResetSection");
var searchRoom = document.getElementById("SearchRoom");
var parent_id = "Section";
var saved_id;
// function(){
// 	parent_id = "Room";
// }

//node = document.querySelectorAll("#SearchSectionTable thead td");Search.bind(null, searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1))

searchSection.addEventListener("change", Search.bind(null, searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1)));
searchRoom.addEventListener("change", SearchWithJoin.bind(null, searchRoom, GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0)));
createSection.addEventListener("click", Create.bind(null, createSection));
resetSection.addEventListener("click", ResetInput.bind(null, createSection));

checkRoom = document.getElementById("CheckRoom");

function SearchWithJoin(whatToSearch, columnIDS){
	txt_search = whatToSearch;
	data = "whatToSearch=" + parent_id + "&value=" + whatToSearch.value;
	// if(columnIDS != null){
	data += "&columnIDS=" + JSON.stringify(columnIDS); 
	data += "&whatTable=" + saved_id;
	data += "&whatJoin=" + "LEFT JOIN"; 
	data += "&compareWhat=" + "RoomNum";
	data += "&whereQuery=" + "WHERE section.SectionName IS NULL AND RoomType = 'Classroom'";
	console.log(data);
	AJAX(data, true, "post", "php/Search.php", true, PickRoom); 	
}

function PickRoom(xhttp){
	// console.log("HEY");
	CreateTable(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchRoomTable tbody tr");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			document.getElementById("RoomNum").value = this.childNodes[0].innerHTML;
			closeModal();
		});
		tbody_tr[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = "cyan";
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = "";
		});
	}
}

// function SectionTable(callback){
// 	Search(searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1));
// 	callback();
// }