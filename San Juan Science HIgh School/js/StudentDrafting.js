var parent_id;
var saved_id;

var buttons = document.querySelectorAll("button");
var inputs = document.querySelectorAll("input");
var modal_body = document.getElementById("modal-body");
var txt_StudentName = document.getElementById("txt_StudentName");
var txt_LRNNum = document.getElementById("txt_LRNNum");
var txt_GradeLevel = document.getElementById("txt_GradeLevel");
var tr = document.querySelectorAll("tbody tr");
var table = document.querySelector("table");

var parent_id;
var saved_id;
var theadID;
var theadHTML; 
var SubjectID;
var Search;

var state = "";

buttons[0].addEventListener("click", function(){
	state = "Add";
	this.style.backgroundColor = "cyan";
	buttons[1].style.backgroundColor = "";
	EmptyNode(inputs);
});

buttons[1].addEventListener("click", function(){
	state = "Change";
	this.style.backgroundColor = "cyan";
	buttons[0].style.backgroundColor = "";
	for(var i = 0; i < inputs.length; i++){
		inputs[i].value = "";
	}
});

buttons[2].addEventListener("click", function(){
	// console.log(typeof state);
	if(state !== ""){
		buttons[2].style.backgroundColor = '';

		if(state == "Add"){
			theadID = "LRNNum@LastName@FirstName@MiddleName@GradeLevel";
			theadHTML = "LRN Number@Last Name@First Name@Middle Name@Grade Level";
		}
		else if(state == "Change"){
			theadID = "LRNNum@LastName@FirstName@MiddleName@GradeLevel@section.SectionName@section.SectionNum";
			theadHTML = "LRN Number@Last Name@First Name@Middle Name@Grade Level@Section Name@SectionNum";
		}
		
		CreateInput("SearchStudent", "search", modal_body);
		CreateTable("SearchStudentTable", theadID, theadHTML, "@", modal_body, 0, "EmployeeNum@section.SectionNum");
		openModal("List of Students", "Student");
		var searchStudent = document.getElementById('SearchStudent'); 
		Search = function(){
			// SearchWithoutQuery(
			// 	"Student",
			// 	searchStudent,
			// 	GetID(document.querySelectorAll("#SearchStudentTable thead td"), 0),
			// 	PickStudent
			// );
			if(state == "Add"){
				SearchWithQuery(
					"Student", 
					"Student_Section", 
					GetID(document.querySelectorAll("#SearchStudentTable thead td"), 0), 
					null, 
					"LEFT JOIN", 
					"student.LRNNum = student_section.LRNNum AND student.GradeLevel = student_section.GradeLevel", 
					searchStudent, 
					"student_section.LRNNum IS NULL", 
					PickStudent
				);
			}
			else if(state == "Change"){
				SearchWithQuery(
					"Student", 
					"Student_Section", 
					GetID(document.querySelectorAll("#SearchStudentTable thead td"), 0), 
					"Section Name = section.SectionName", 
					"INNER JOIN", 
					"student.LRNNum = student_section.LRNNum AND student.GradeLevel = student_section.GradeLevel INNER JOIN section on student_section.SectionNum = section.SectionNum", 
					searchStudent, 
					null, 
					PickStudent
				);
			}
		}
		Search();

		searchStudent.addEventListener('change', Search);
	}
	else{
		alert("Select first: Add or Change Section");
		buttons[0].style.backgroundColor = "pink";
		buttons[1].style.backgroundColor = "pink";
	}
});

function PickStudent(xhttp){
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchStudentTable tbody tr");
	for(var i=0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = 'cyan';
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = '';
		});
		tbody_tr[i].addEventListener("click", function(){
			// txt_TeacherEmployeeNum.value = this.children[0].innerHTML;
			// txt_TeacherName.value = this.children[1].innerHTML;
			txt_StudentName.value = this.children[1].innerHTML + ", " + this.children[2].innerHTML + " " + (this.children[3].innerHTML).substr(0,1) + ".";
			txt_LRNNum.value = this.children[0].innerHTML;
			txt_GradeLevel.value =  this.children[4].innerHTML;
			if(state == "Change"){
				txt_SectionName.value =  this.children[5].innerHTML;
				txt_SectionNum.value =  this.children[6].innerHTML;
			}
			closeModal(modal_body);
			// RetrieveTeacherSchedule();
		});
	}
}

buttons[3].addEventListener("click", function(){
	if(state !== ""){
		if(txt_LRNNum.value == ""){
			buttons[2].style.backgroundColor = 'pink';
			alert("Choose a student first");
		}
		else{
			// button[0].style.backgroundColor = '';
			theadID = "SectionNum@SectionName@Teacher.Name@Population";
			theadHTML = "SectionNum@Section Name@Adviser@Population";
			CreateInput("SearchSection", "search", modal_body);
			CreateTable("SearchSectionTable", theadID, theadHTML, "@", modal_body, 0, "SectionNum");
			openModal("List of Sections", "Section");
			var searchSection = document.getElementById('SearchSection'); 
			// console.log(GetID(document.querySelectorAll("#SearchStudentTable thead td"), 0));
			Search = function(){ //set Search function inside cms.js
				// SearchWithQuery(
				// 	"Section",
				// 	"Teacher", 
				// 	GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0),
				// 	"Adviser=Teacher.Name", //Adviser is equivalent to TeacherName field 
				// 	"LEFT JOIN",
				// 	"teacher.SectionNum = section.SectionNum",
				// 	searchSection,
				// 	"GradeLevel = " + txt_GradeLevel.value,
				// 	PickSection
				// );
				var query = "";
				var crud = "";
				var basequery = query;
				var nospaces;
				var content;
				query += "SELECT section.SectionNum,section.SectionName, teacher.Name, ";
				query += "COUNT(LRNNum) AS Population ";
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
				SimplifiedQuery(crud, query, searchSection, PickSection);
			}
			Search();

			searchSection.addEventListener('change', Search);
		}
	}
	else{
		alert("Select first: Add or Change Section");
		buttons[0].style.backgroundColor = "pink";
		buttons[1].style.backgroundColor = "pink";
	}
});

function PickSection(xhttp){
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchSectionTable tbody tr");
	for(var i=0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = 'cyan';
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = '';
		});
		tbody_tr[i].addEventListener("click", function(){
			// txt_TeacherEmployeeNum.value = this.children[0].innerHTML;
			// txt_TeacherName.value = this.children[1].innerHTML;
			// RetrieveTeacherSchedule();
			// var content = {};
			// content["LRNNum"] = txt_LRNNum.value;
			// content["SectionNum"] = this.children[0].innerHTML;	
			// content["GradeLevel"] = txt_GradeLevel.value;
			// CreateWithPreset(
			// 	"Student_Section", 
			// 	content, 
			// 	0, 
			// 	CheckIfCreated
			// );
			var crud = "UPDATE";
			var query = "UPDATE student_section SET SectionNum = " + this.children[0].innerHTML + " WHERE ";
			query += "LRNNum = " + txt_LRNNum.value + " AND GradeLevel = " + txt_GradeLevel.value;

			SimplifiedQuery(crud, query, null, CheckIfUpdated);
			closeModal(modal_body); 
		});
	}
}

function CheckIfUpdated(xhttp){
	EmptyNode(inputs);
	alert(xhttp.responseText);
}

