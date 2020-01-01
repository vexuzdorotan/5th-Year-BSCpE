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
var Search;
console.log(GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0));
var table1, table2;

// Search = function(){ //set Search function inside cms.js
// 	// SearchWithQuery(
// 	// 	"Section",
// 	// 	"Teacher", 
// 	// 	GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0),
// 	// 	// + "(SELECT COUNT(LRNNum) FROM student_section INNER JOIN section WHERE section.SectionNum = student_section.SectionNum)"
// 	// 	"Adviser=Teacher.Name", //Adviser is equivalent to TeacherName field 
// 	// 	"LEFT JOIN",
// 	// 	"teacher.SectionNum = section.SectionNum",
// 	// 	searchSection,
// 	// 	null,
// 	// 	CreateTBody
// 	// );
// }
Search = function(){ //set Search function inside cms.js
	var query = "";
	var crud = "";
	var basequery = query;
	var nospaces;
	var content;
	query += "SELECT section.SectionNum,section.SectionName, RoomNum, teacher.EmployeeNum, teacher.Name, ";
	query += "COUNT(LRNNum) AS Population, section.GradeLevel ";
	query += "FROM section LEFT JOIN teacher ON teacher.SectionNum = section.SectionNum ";
	query += "LEFT JOIN student_section ON student_section.SectionNum = section.SectionNum ";
	crud = "SELECT";
	basequery = query;
	nospaces;
	content;
	nospaces = (searchSection.value).trim();
	content = nospaces.split("=");
	if(content.length > 1){
		content[0] = content[0].replace(/ /g, "");
		content[0] = content[0].replace("Number" , "Num");
		content[1] = content[1].trim();
			// console.log(content[0].toLowerCase() == "adviser");
		if(content[0].toLowerCase() != "teacher" && content[0].toLowerCase() != "adviser"){
			query += " WHERE " + "section." +content[0] + " LIKE '" + content[1]+ "%'";
		}
		else{
			query += " WHERE " + "teacher.Name LIKE'" + content[1]+ "%'";
		}
	}
	else if(content.length == 1){
		// query += "AND " + "subject.SubjectID LIKE '" + content[0]+ "%'";	
		query += "";
	}
	query += "GROUP BY section.SectionNum";
	// query = basequery;
	// console.log(query);
	SimplifiedQuery(crud, query, searchSection, CreateTBody);
}


// searchSection.addEventListener('change', function(){
// 	var query = "";
// 	var crud = "";
// 	var basequery = query;
// 	var nospaces;
// 	var content;
// 	Search = function(){ //set Search function inside cms.js
// 		query += "SELECT section.SectionNum,section.SectionName, RoomNum, teacher.EmployeeNum, teacher.Name, ";
// 		query += "COUNT(LRNNum) AS Population, section.GradeLevel ";
// 		query += "FROM section LEFT JOIN teacher ON teacher.SectionNum = section.SectionNum ";
// 		query += "LEFT JOIN student_section ON student_section.SectionNum = section.SectionNum ";
// 		crud = "SELECT";
// 		basequery = query;
// 		nospaces;
// 		content;
// 		nospaces = (searchSection.value).trim();
// 		content = nospaces.split("=");
// 		if(content.length > 1){
// 			content[0] = content[0].replace(/ /g, "");
// 			content[0] = content[0].replace("Number" , "Num");
// 			content[1] = content[1].trim();
// 			// console.log(content[0].toLowerCase() == "adviser");
// 			if(content[0].toLowerCase() != "teacher" && content[0].toLowerCase() != "adviser"){
// 				query += " WHERE " + "section." +content[0] + " LIKE '" + content[1]+ "%'";
// 			}
// 			else{
// 				query += " WHERE " + "teacher.Name LIKE'" + content[1]+ "%'";
// 			}
// 		}
// 		else if(content.length == 1){
// 			// query += "AND " + "subject.SubjectID LIKE '" + content[0]+ "%'";	
// 			query += "";
// 		}
// 		query += "GROUP BY section.SectionNum";
// 		// query = basequery;
// 		// console.log(query);
// 		SimplifiedQuery(crud, query, searchSection, CreateTBody);
// 	}
// 	Search();
// 	// SimplifiedQuery(crud, query, this, CreateTBody);
// 	// console.log("HEY");
// 	console.log(query);
// });

var initialValue = function(){ //set initialValue of inputs
	document.getElementById("Population").value = 0;
}

Search();

createSection.addEventListener("click", function(){
	Create(
		createSection, 
		"Teacher", 
		1, //If autoincrement
		"SectionNum", //Foreign Key
		"EmployeeNum", //fieldToUpdate
		CheckIfCreated,
		CheckIfUpdated
	);
	// document.getElementById("Population").value = 0;
});

resetSection.addEventListener("click", function(){
	ResetInput(initialValue);
});

searchSection.addEventListener("change", Search);

// function CreateInput(input_id, type, parentNode){	//Creates input tag with id 
function CreateModal(header, title){ //Shows modal in html that is hidden then creates content
	if(title == 'Room'){
		theadID = "RoomNum@RoomName@Capacity";
		theadHTML = "Room Number@Room Name@Capacity";
		CreateInput("SearchRoom", "search", modal_body);
		CreateTable("SearchRoomTable", theadID, theadHTML, "@", modal_body, 0, null);
		searchRoom = document.getElementById("SearchRoom");
		SearchRoomSection();

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
		CreateTable("SearchTeacherTable", theadID, theadHTML, "@", modal_body, 0, null);
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
	CreateTBody(xhttp, PickRoom);
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
			this.style.backgroundColor = "maroon";
			this.style.color = "white";
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = "";
			this.style.color = "";
		});	
	}
	txt_search = searchSection;
	columnIDS = GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1);
}

function PickAdviser(xhttp){
	// console.log(xhttp.responseText);
	CreateTBody(xhttp, PickAdviser);
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
			this.style.backgroundColor = "maroon";
			this.style.color = "white";
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = "";
			this.style.color = "";
		});	
	}
	txt_search = searchSection;
	// console.log(columnIDS);
	columnIDS = GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1);
	// console.log(columnIDS);
}