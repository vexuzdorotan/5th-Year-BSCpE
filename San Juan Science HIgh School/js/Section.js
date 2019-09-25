var searchSection = document.getElementById("SearchSection");
var createSection = document.getElementById("CreateSection");
var resetSection = document.getElementById("ResetSection");
var modal_body = document.getElementById("modal-body");

var searchTeacher;
var searchRoom;


var parent_id = "Section"; //
var saved_id;

var theadID;
var theadHTML;


var table1, table2;

createSection.addEventListener("click", Create.bind(null, createSection));
resetSection.addEventListener("click", ResetInput.bind(null, createSection));

searchSection.addEventListener("change", Search.bind(
	null, 
	searchSection, 
	GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1)
));

// searchSection.addEventListener("change", SearchWithQuery.bind(
// 	null,
// 	"Section",
// 	"Teacher",
// 	null,
// 	GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0),
// 	"INNER JOIN",
// 	"section.Adviser = teacher.Name",
// 	searchSection,
// 	"WHERE section.SectionName IS NULL AND Type = 'Classroom'",
// 	PickRoom
// ));


// function CreateInput(input_id, type, parentNode){	//Creates input tag with id 
function CreateModal(btn_id, title){ //Shows modal in html that is hidden then creates content
	if(title == 'Room'){
		theadID = "RoomNum@RoomName@Capacity";
		theadHTML = "Room Number@Room Name@Capacity";
		CreateInput("SearchRoom", "search", modal_body);
		CreateTable("SearchRoomTable", theadID, theadHTML, "@", modal_body, 0);
		searchRoom = document.getElementById("SearchRoom");
		// function SearchWithQuery(table1, table2, table2Column, columnNames, whatJoin, searchbox, otherQuery, callback){

		searchRoom.addEventListener("change", SearchWithQuery.bind(
			null,
			"Room",
			"Section",
			null,
			null,
			GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0),
			"LEFT JOIN",
			"room.RoomNum = section.RoomNum",
			searchRoom,
			"WHERE section.SectionName IS NULL AND Type = 'Classroom'",
			PickRoom
		));
	}

	else if(title == 'Teacher'){
		theadID = "EmployeeNum@Name";
		theadHTML = "Employee Number@Name";
		CreateInput("SearchTeacher", "search", modal_body);
		CreateTable("SearchTeacherTable", theadID, theadHTML, "@", modal_body, 0);
		columnIDS = GetID(document.querySelectorAll("#SearchTeacherTable thead td"), 0);
		searchTeacher = document.getElementById("SearchTeacher");

		searchTeacher.addEventListener("change", SearchWithQuery.bind(
			null,
			"Teacher",
			"Section",
			null,
			null,
			GetID(document.querySelectorAll("#SearchTeacherTable thead td"), 0),
			"LEFT JOIN",
			"teacher.SectionNum = section.SectionNum",
			searchTeacher,
			"WHERE teacher.SectionNum = 0",
			PickAdviser
		));
	}

	openModal(btn_id, title);
}

function PickRoom(xhttp){
	// console.log(xhttp.responseText);
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

function PickAdviser(xhttp){
	// console.log(xhttp.responseText);
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchTeacherTable tbody tr");
	// var tbody = document.querySelector("#SearchRoomTable tbody");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			document.getElementById("Adviser").value = this.childNodes[1].innerHTML;
			// RemoveChildNodes(tbody); //Deletes whole table after click of a row

			searchTeacher.value = "";
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
	// console.log(columnIDS);
	columnIDS = GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1);
	// console.log(columnIDS);
}

// function Pick(xhttp){
// 	console.log("HEY");
// }



function SearchWithQuery(table1, table2, table1Column, table2Column, columnNames, whatJoin, compare, searchbox, otherQuery, callback){
	// console.log(whatToSearch);
	txt_search = searchbox;
	// columnIDS = GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0);
	data = "table1=" + table1 + "&value=" + searchbox.value;
	data += "&columnIDS=" + JSON.stringify(columnNames); 
	data += "&table2=" + table2;
	data += "&whatJoin=" + whatJoin; 
	data += "&compareWhat=" + compare;
	data += "&table2Column=" + table2Column;
	data += "&whereQuery=" + otherQuery;
	console.log(data);
	AJAX(data, true, "post", "php/Search.php", true, callback); 
}