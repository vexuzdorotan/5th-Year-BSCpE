var buttons = document.querySelectorAll("button");
var modal_body = document.getElementById("modal-body");
var txt_TeacherName = document.getElementById("txt_TeacherName");
var txt_TeacherEmployeeNum = document.getElementById("txt_TeacherEmployeeNum");
var tr = document.querySelectorAll("tbody tr"); //
var table = document.querySelector("table"); //

var parent_id;
var saved_id;
var theadID;
var theadHTML; 
var SubjectID;
var Search;


var searchSubject;

buttons[2].addEventListener("click", function(){
	if(txt_TeacherEmployeeNum.value != ""){
		var query = "";
		var crud = "UPDATE";
		query += "UPDATE subject SET EmployeeNum = NULL WHERE EmployeeNum = " + txt_TeacherEmployeeNum.value;

		var r = confirm("Do you want to reset schedule?"); //confirm alert of js
		var data;
	  	if(r == true){
  			SimplifiedQuery(crud, query, null, RetrieveTeacherSchedule);
  		} 
  		else{
    	// alert("Deletion Cancelled!");
    		console.log("Deletion Cancelled!");
 	 	}
	}
	else{
		alert("Please select a teacher first");
		buttons[0].style.backgroundColor = 'pink';
	}
});


buttons[0].addEventListener("click", function(){
	buttons[0].style.backgroundColor = '';
	theadID = "EmployeeNum@Name";
	theadHTML = "EmployeeNum@Name";
	CreateInput("SearchTeacher", "search", modal_body);
	CreateTable("SearchTeacherTable", theadID, theadHTML, "@", modal_body, 0, "EmployeeNum");
	openModal("List of Teachers", "Teacher");
	var searchTeacher = document.getElementById('SearchTeacher'); 
	// console.log(GetID(document.querySelectorAll("#SearchTeacherTable thead td"), 0));
	Search = function(){
		SearchWithoutQuery(
			"Teacher",
			searchTeacher,
			GetID(document.querySelectorAll("#SearchTeacherTable thead td"), 0),
			PickTeacher
		);
	}
	Search();

	searchTeacher.addEventListener('change', Search);
});

function PickTeacher(xhttp){
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchTeacherTable tbody tr");

	for(var i=0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = 'cyan';
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = '';
		});
		tbody_tr[i].addEventListener("click", function(){
			txt_TeacherEmployeeNum.value = this.children[0].innerHTML;
			txt_TeacherName.value = this.children[1].innerHTML;
			closeModal(modal_body);
			RetrieveTeacherSchedule();
		});
	}

}


buttons[1].addEventListener("click", function(){
	if(txt_TeacherEmployeeNum.value != ''){
		// theadID = "SubjectID@SubjectCode@SectionNum@SectionName";
		theadID = "SubjectID@SubjectCode";
		theadHTML = "Subject ID@Subject Code";
		// theadHTML = "Subject Id@Subject Code@Section Number@Section Name";
		CreateInput("SearchSubject", "search", modal_body);
		CreateTable("SearchSubjectTable", theadID, theadHTML, "@", modal_body, 0, null);
		openModal("List of Subjects", "Subject");
		var crud = "SELECT";
		var query = "";

		searchSubject = document.getElementById('SearchSubject'); 
		Search = function(){
			// <<<<<<<<<<<<<<<<<<<<<<<PROBLEM
			query += "SELECT DISTINCT subject.SubjectID, subject.SubjectCode ";
			query += "FROM sched RIGHT JOIN subject ON subject.SubjectID = sched.SubjectID ";
			query += "WHERE subject.EmployeeNum IS NULL AND NOT(SubjectTime IN (SELECT SubjectTime FROM subject ";
			query += "INNER JOIN sched ON subject.SubjectID = sched.SubjectID " 
			query += "WHERE subject.EmployeeNum = '"+txt_TeacherEmployeeNum.value+"') "; 
			query += "AND SubjectDay IN (SELECT SubjectDay FROM subject INNER JOIN sched "; 
			query += "ON subject.SubjectID = sched.SubjectID WHERE subject.EmployeeNum = '"+txt_TeacherEmployeeNum.value+"')) ";

			SimplifiedQuery(crud, query, searchSubject, PickSubject);

			// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
		}
		Search();
		searchSubject.addEventListener('change', function(){
			var basequery = query;
			var nospaces;
			var content;
			nospaces = (searchSubject.value).trim();
			content = nospaces.split("=");
			if(content.length > 1){
				content[0] = content[0].replace(/ /g, "");
				content[1] = content[1].trim();
				query += "AND " + "subject." +content[0] + " LIKE '" + content[1]+ "%'";
			}
			else if(content.length == 1){
				query += "AND " + "subject.SubjectID LIKE '" + content[0]+ "%'";	
			}

			SimplifiedQuery(crud, query, searchSubject, PickSubject);
			query = basequery;
		});
	}
	else{
		alert("Please select a teacher first");
		buttons[0].style.backgroundColor = 'pink';
	}
});

function PickSubject(xhttp){
	// console.log(xhttp);
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchSubjectTable tbody tr");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = 'cyan';
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = '';
		});
		tbody_tr[i].addEventListener("click", function(){
			// txt_TeacherEmployeeNum.value = this.children[0].innerHTML;
			// txt_TeacherName.value = this.children[1].innerHTML;
			SubjectID = this.children[0].innerHTML;
			//RetrieveTeacherSchedule(); //SET EmployeeNum BEFORE THIS
			var crud = "UPDATE";
			var query;
			query = "UPDATE subject SET EmployeeNum =" + txt_TeacherEmployeeNum.value + " WHERE SubjectID = '" + SubjectID + "'";
			console.log(query);
			SimplifiedQuery(crud, query, searchSubject, SubjectAssigned);
			closeModal(modal_body);
		});
	}
}

function SubjectAssigned(xhttp){
	if(xhttp.responseText == "Successful"){
		alert(SubjectID + " is assigned to " + txt_TeacherName.value);
		RetrieveTeacherSchedule();
	}
	else{
		alert("Failed");
		console.log(xhttp.responseText);
	}
}
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<CAN BE ROUTED
function RetrieveTeacherSchedule(){
	var columnNames = {};
	// columnNames[3] = "Subject.SubjectCode";
	columnNames[0] = "SubjectID"; 
	columnNames[1] = "SubjectTime"; 
	columnNames[2] = "SubjectDay";
	// columnNames[0] = "Subject.SectionNum";

	// SearchWithoutQuery(//Can be replaced by JOINING sched and subject
	// 	"Sched",
	// 	SubjectID,
	// 	columnNames,
	// 	Retrieved
	// );
	SearchWithQuery(
		"Sched",
		"Subject",
		columnNames,
		null,
		"LEFT JOIN",
		"subject.SubjectID = sched.SubjectID",
		'',
		"EmployeeNum = '"+txt_TeacherEmployeeNum.value+"'",
		Retrieved
	);
}

function Retrieved(xhttp){
	var json;	
	json = JSON.parse(xhttp.responseText);
	console.log(json);
	for(var i = 1; i < tr.length+1; i++){
		for(var j = 1; j < tr[0].childElementCount; j++){
			table.rows[i].cells[j].innerHTML = "";
		}	
	}
	try{
		for(var i = 0; i < json.length; i++){
			table.rows[GetParentRow(json[i][1])].cells[GetParentCol(json[i][2])].innerHTML = json[i][0];
		}
	}
	catch(err){
		console.log(err);
	}
}
function GetParentCol(child){ 
	if(child == "Monday"){
		return 1;
	}
	else if(child == "Tuesday"){
		return 2;
	}
	else if(child == "Wednesday"){
		return 3;
	}
	else if(child == "Thursday"){
		return 4;
	}
	else if(child == "Friday"){
		return 5;
	}
}

function GetParentRow(child){ //Can be edited to make time dynamic
	if(child == "6:00-7:00"){
		return 1;
	}
	else if(child == "7:00-8:00"){
		return 2;
	}
	else if(child == "8:00-9:00"){
		return 3;
	}
	else if(child == "9:00-9:20"){
		return 4;
	}
	else if(child == "9:20-10:20"){
		return 5;
	}
	else if(child == "10:20-11:20"){
		return 6;
	}
	else if(child == "11:20-12:20"){
		return 7;
	}
	else if(child == "12:20-1:00"){
		return 8;
	}
	else if(child == "1:00-2:00"){
		return 9;
	}
	else if(child == "2:00-3:00"){
		return 10;
	}
	else if(child == "3:00-4:00"){
		return 11;
	}
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>