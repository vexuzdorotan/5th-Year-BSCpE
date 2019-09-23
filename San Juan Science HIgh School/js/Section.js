var searchSection = document.getElementById("SearchSection");
var createSection = document.getElementById("CreateSection");
var resetSection = document.getElementById("ResetSection");
var searchRoom = document.getElementById("SearchRoom");
var parent_id = "Section";
var saved_id;

var theadID;
var theadHTML;

theadID = "RoomNum@RoomName@Capacity";
theadHTML = "Room Number@Room Name@Capacity";
CreateTable("SearchRoomTable", theadID, theadHTML, "@", document.getElementById("modal-body"), 0);

//node = document.querySelectorAll("#SearchSectionTable thead td");Search.bind(null, searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1))

searchSection.addEventListener("change", Search.bind(null, searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1)));
createSection.addEventListener("click", Create.bind(null, createSection));
resetSection.addEventListener("click", ResetInput.bind(null, createSection));

// searchRoom.addEventListener("change", SearchWithJoin.bind(null, searchRoom, GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0)));
searchRoom.addEventListener("change", function(){
	txt_search = searchRoom;
	columnIDS = GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0);
	data = "whatToSearch=" + parent_id + "&value=" + searchRoom.value;
	data += "&columnIDS=" + JSON.stringify(columnIDS); 
	data += "&whatTable=" + saved_id;
	data += "&whatJoin=" + "LEFT JOIN"; 
	data += "&compareWhat=" + "RoomNum";
	data += "&whereQuery=" + "WHERE section.SectionName IS NULL AND RoomType = 'Classroom'";
	AJAX(data, true, "post", "php/Search.php", true, PickRoom); 
});

function PickRoom(xhttp){
	// console.log(xhttp);
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchRoomTable tbody tr");
	var tbody = document.querySelector("#SearchRoomTable tbody");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			document.getElementById("RoomNum").value = this.childNodes[0].innerHTML;
			// RemoveChildNodes(document.querySelector("#SearchRoomTable tbody"));
			// console.log(tbody.childNodes.length);
			RemoveChildNodes(tbody);
			searchRoom.value = "";
			closeModal();
		});
		tbody_tr[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = "cyan";
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = "";
		});
	}
	txt_search = searchSection;
	columnIDS = GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1);
}

// function SectionTable(callback){
// 	Search(searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1));
// 	callback();
// }