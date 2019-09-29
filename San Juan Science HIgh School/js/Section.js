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

SearchWithQuery(
	"Section",
	"Teacher", 
	GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0),
	"Adviser=TeacherName",
	"LEFT JOIN",
	"teacher.SectionNum = section.SectionNum",
	searchSection,
	null,
	CreateTBody
)
createSection.addEventListener("click", function(){
	Create(
		createSection, 
		"Teacher", 
		1, //If autoincrement
		"SectionNum", //Foreign Key
		"EmployeeNum", //fieldToUpdate
		null
	)
	SearchSection();
});

resetSection.addEventListener("click", function(){
	ResetInput(createSection);
	document.getElementById("Population").value = 0;
});

searchSection.addEventListener("change", SearchSection);


// function CreateInput(input_id, type, parentNode){	//Creates input tag with id 
function CreateModal(header, title){ //Shows modal in html that is hidden then creates content
	if(title == 'Room'){
		theadID = "RoomNum@RoomName@Capacity";
		theadHTML = "Room Number@Room Name@Capacity";
		CreateInput("SearchRoom", "search", modal_body);
		CreateTable("SearchRoomTable", theadID, theadHTML, "@", modal_body, 0);
		searchRoom = document.getElementById("SearchRoom");
		SearchRoomSection();
		// function SearchWithQuery(table1, table2, table2Column, columnNames, whatJoin, searchbox, otherQuery, callback){

		searchRoom.addEventListener("change", SearchRoomSection);
		function SearchRoomSection(){
			SearchWithQuery(
				"Room",
				"Section",
				GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0),
				null,
				"LEFT JOIN",
				"room.RoomNum = section.RoomNum",
				searchRoom,
				"section.SectionName IS NULL AND Type = 'Classroom'",
				PickRoom
			);
		}
	}

	else if(title == 'Teacher'){
		theadID = "EmployeeNum@Name";
		theadHTML = "Employee Number@Name";
		CreateInput("SearchTeacher", "search", modal_body);
		CreateTable("SearchTeacherTable", theadID, theadHTML, "@", modal_body, 0);
		columnIDS = GetID(document.querySelectorAll("#SearchTeacherTable thead td"), 0);
		searchTeacher = document.getElementById("SearchTeacher");
		SearchTeacherSection();
		searchTeacher.addEventListener("change", SearchTeacherSection);
		function SearchTeacherSection(){
			SearchWithQuery(
				"Teacher",
				"Section",
				GetID(document.querySelectorAll("#SearchTeacherTable thead td"), 0),
				null,
				"LEFT JOIN",
				"teacher.SectionNum = section.SectionNum",
				searchTeacher,
				"teacher.SectionNum IS NULL",
				PickAdviser
			);
		}
	}

	openModal(header, title);
}

function PickRoom(xhttp){
	// console.log(xhttp.responseText);
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchRoomTable tbody tr");
	// var tbody = document.querySelector("#SearchRoomTable tbody");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			document.getElementById("txt_RoomNum").value = this.childNodes[0].innerHTML;
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
			document.getElementById("txt_TeacherName").value = this.childNodes[1].innerHTML;
			document.getElementById("txt_TeacherEmployeeNum").value = this.childNodes[0].innerHTML;
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

function SearchSection(){
	SearchWithQuery(
		"Section",
		"Teacher", 
		GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0),
		"Adviser=TeacherName",
		"LEFT JOIN",
		"teacher.SectionNum = section.SectionNum",
		searchSection,
		null,
		CreateTBody
	);
}