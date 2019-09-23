var searchSection = document.getElementById("SearchSection");
var createSection = document.getElementById("CreateSection");
var resetSection = document.getElementById("ResetSection");
var modal_body = document.getElementById("modal-body");
var searchEmployee;
var searchRoom;


var parent_id = "Section";
var saved_id;

var theadID;
var theadHTML;

searchSection.addEventListener("change", Search.bind(null, searchSection, GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1)));
createSection.addEventListener("click", Create.bind(null, createSection));
resetSection.addEventListener("click", ResetInput.bind(null, createSection));

// function CreateInput(input_id, type, parentNode){	//Creates input tag with id 
function CreateModal(btn_id, title){ //Shows modal in html that is hidden then creates content

	if(title == 'Room'){
		theadID = "RoomNum@RoomName@Capacity";
		theadHTML = "Room Number@Room Name@Capacity";
		CreateInput("SearchRoom", "search", modal_body);
		CreateTable("SearchRoomTable", theadID, theadHTML, "@", modal_body, 0);
		// console.log(document.getElementById("SearchRoom"));
		searchRoom = document.getElementById("SearchRoom");
		searchRoom.addEventListener("change", SearchRoom);

	}
	else if(title == 'Employee'){
		theadID = "EmployeeNum@EmployeeName";
		theadHTML = "Employee Number@Name@Capacity";
		CreateInput("SearchEmployee", "search", modal_body);
		CreateTable("SearchRoomTable", theadID, theadHTML, "@", modal_body, 0);
		// console.log(document.getElementById("SearchEmployee"));
		searchEmployee = document.getElementById("SearchEmployee");
		searchEmployee.addEventListener("change", SearchEmployee);
	}
	openModal(btn_id, title);
}

var searchRoom = document.getElementById("SearchRoom");

function SearchRoom(){
	txt_search = searchRoom;
	columnIDS = GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0);
	data = "whatToSearch=" + parent_id + "&value=" + searchRoom.value;
	data += "&columnIDS=" + JSON.stringify(columnIDS); 
	data += "&whatTable=" + saved_id;
	data += "&whatJoin=" + "LEFT JOIN"; 
	data += "&compareWhat=" + "RoomNum";
	data += "&whereQuery=" + "WHERE section.SectionName IS NULL AND RoomType = 'Classroom'";
	AJAX(data, true, "post", "php/Search.php", true, PickRoom); 
}


function PickRoom(xhttp){
	// console.log(xhttp);
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchRoomTable tbody tr");
	// var tbody = document.querySelector("#SearchRoomTable tbody");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			document.getElementById("RoomNum").value = this.childNodes[0].innerHTML;
			// RemoveChildNodes(tbody); //Deletes whole table after click of a row

			searchRoom.value = "";
			closeModal(modal_body);
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

function SearchEmployee(){

}

function PickEmployee(){

}
// searchRoom.addEventListener("change", function(){
// 	txt_search = searchRoom;
// 	columnIDS = GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0);
// 	data = "whatToSearch=" + parent_id + "&value=" + searchRoom.value;
// 	data += "&columnIDS=" + JSON.stringify(columnIDS); 
// 	data += "&whatTable=" + saved_id;
// 	data += "&whatJoin=" + "LEFT JOIN"; 
// 	data += "&compareWhat=" + "RoomNum";
// 	data += "&whereQuery=" + "WHERE section.SectionName IS NULL AND RoomType = 'Classroom'";
// 	AJAX(data, true, "post", "php/Search.php", true, PickRoom); 
// });