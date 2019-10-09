var tr = document.querySelectorAll("tbody tr");
var table = document.querySelector("table");
var modal_body = document.getElementById("modal-body");

var txt_GradeLevel = document.getElementById("txt_GradeLevel");
var txt_SectionName = document.getElementById("txt_SectionName");
var txt_SectionNum = document.getElementById("txt_SectionNum");
var txt_Adviser = document.getElementById("txt_Adviser");

var saved_id;
var parent_id = "Subject";
var day;
var time;
var theadID;
var theadHTML; 
var parentCol; //gets the content of the column of that cell
var parentRow; //gets the content of the row of that cell
var subjectcode; //gets the selected SubjectCode
var frequency; //gets the frequency of the selected SubjectCode
var searchSubjectCode;
var Search;
var button = document.querySelectorAll("button");
openSectionModal = button[0];

// button[1].addEventListener("click", function(){ //SUBMIT BUTTON
// 	alert("SUBMITTED");
// });

button[1].addEventListener("click", function(){ //RESET BUTTON
	if(txt_SectionNum.value != ''){
		var query;
		Search = function(){
			RetrieveSectionSchedule();
		}
		query = "SectionNum = " + txt_SectionNum.value;
		DeleteRecord("Subject", query);
	}
	else{
		alert("Select section first");
		openSectionModal.style.backgroundColor = "pink";
	}	
});

for(var i = 1; i < tr.length+1; i++){
	for(var j = 1; j < tr[0].childElementCount; j++){
		table.rows[i].cells[j].addEventListener("click", Get1stRowCell.bind(null, i, j));
	}
}

openSectionModal.addEventListener("click", function(){
	this.style.backgroundColor = "";
	theadID = "SectionNum@SectionName@GradeLevel@TeacherName";
	theadHTML = "Section Number@Section Name@Grade Level@Adviser";
	CreateInput("SearchSection", "search", modal_body);
	document.querySelector("#SearchSection").className = "modal-search";
	CreateTable("SearchSectionTable", theadID, theadHTML, "@", modal_body, 0, "SectionNum");
	document.querySelector("thead").className = "dark";
	openModal("Section", "Section");
	// function SearchWithQuery(table1, table2, columnNames, correction, whatJoin, compare, searchbox, otherQuery, callback){
	Search = function(){
		SearchWithQuery(
			"Section",
			"Teacher", 
			GetID(document.querySelectorAll("#SearchSectionTable thead td"), 0),
			null, //Adviser is equivalent to TeacherName field 
			"LEFT JOIN",
			"teacher.SectionNum = section.SectionNum",
			document.getElementById("SearchSection"),
			null,
			PickSection
		);
	}
	Search();
});

function PickSection(xhttp){
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchSectionTable tbody tr");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			document.querySelector("#SearchSection").value = "";
			closeModal(modal_body);
			txt_SectionNum.value = this.childNodes[0].innerHTML;
			txt_SectionName.value = this.childNodes[1].innerHTML;
			txt_GradeLevel.innerHTML = this.childNodes[2].innerHTML;
			txt_Adviser.innerHTML = this.childNodes[3].innerHTML;

			RetrieveSectionSchedule();
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
}

function RetrieveSectionSchedule(){
	var columnNames = {};
	columnNames[0] = "SubjectCode";
	columnNames[1] = "SubjectTime"; 
	columnNames[2] = "SubjectDay";
	columnNames[3] = "SectionNum";

	// console.log(txt_search);
	SearchWithoutQuery(
		"Subject",
		txt_SectionNum,
		columnNames,
		Retrieved
	);
	console.log(txt_SectionNum);
}

function Retrieved(xhttp){
	var json;
	// console.log(xhttp.responseText);
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
		// json[0] => SubjectCode
		// json[1] => Time //parentRow
		// json[2] => Day //parentCol
		// json[3] => SectionNum
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
	else if(child == "9:20-10:20"){
		return 5;
	}
	else if(child == "10:20-11:20"){
		return 6;
	}
	else if(child == "11:20-12:20"){
		return 7;
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

function Get1stRowCell(i, j){
	if(document.getElementById("txt_SectionName").value == ""){
		alert("Select Section");
		openSectionModal.style.backgroundColor = "pink";
	}
	else{
		parentCol = j;
		parentRow = i;
		// console.log(parentCol);
		// console.log(parentRow);
		time = table.rows[i].cells[0].innerHTML;
		day = table.rows[0].cells[j].innerHTML;

		if(table.rows[parentRow].cells[parentCol].innerHTML != ""){ //If field is not null, you can DELETE
			DeleteSched();
		}
		else{ //If null, you can INSERT; MODAL IS DISPLAYED
			theadID = "SubjectCode@SubjectDescription@GradeLevel@Frequency";
			theadHTML = "Subject Code@Description@Grade Level@Units";
			CreateInput("SearchSubjectCode", "search", modal_body);
			CreateTable("SearchSubjectCodeTable", theadID, theadHTML, "@", modal_body, 0, null);

			searchSubjectCode = document.getElementById("SearchSubjectCode");
			openModal("Subject Code", "SubjectCode");
			// function SearchWithQuery(table1, table2, columnNames, correction, whatJoin, compare, searchbox, otherQuery, callback){
			Search = function(){
				SearchWithQuery(
					"SubjectCode",
					null,
					GetID(document.querySelectorAll("#SearchSubjectCodeTable thead td"), 0),
					"Units=Frequency",
					null,
					null,
					searchSubjectCode,
					"subjectcode.GradeLevel =" + txt_GradeLevel.innerHTML,
					PickSubjectCode
				);
			}
			Search();
			searchSubjectCode.addEventListener('change', function(){
				Search();
			});
		}
	}
}

function PickSubjectCode(xhttp){
	// console.log(xhttp.responseText);
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchSubjectCodeTable tbody tr");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			// table.rows[parentRow].cells[parentCol].innerHTML = this.childNodes[0].innerHTML;
			// document.querySelector("#SearchSubjectCode").value = "";
			// closeModal(modal_body);
			subjectcode = this.childNodes[0].innerHTML;
			frequency = this.childNodes[3].innerHTML;
			var content = {};
			content['SubjectDay'] = day;
			content['SubjectTime'] = time;
			content['SubjectCode'] = this.childNodes[0].innerHTML;
			content['SectionNum'] = txt_SectionNum.value;
 			CreateWithPreset(
				"subject", 
				content,
				1, 
				SubjectCreated
			);
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
	// txt_search = searchSection;
	// columnIDS = GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1);
}

function SubjectCreated(xhttp){
	var patt = new RegExp("Exceeds occurence", "i");
	if(patt.test(xhttp.responseText)){
		alert(subjectcode + " is only " +  frequency + "x a week");
	}
	else{
		table.rows[parentRow].cells[parentCol].innerHTML = subjectcode;
		searchSubjectCode.value = "";
		closeModal(modal_body);
	}
}

function DeleteSched(){
	var query;
	Search = function(){
		RetrieveSectionSchedule();
	}
	query = "SubjectCode = '" + table.rows[parentRow].cells[parentCol].innerHTML;
	query += "' AND SubjectDay = '" + day;
	query += "' AND SubjectTime = '" + time;
	query += "' AND SectionNum = " + txt_SectionNum.value;
		// console.log(query);
	DeleteRecord("Subject", query);
}
//tr.length => # of rows
//tr[0].childElementCount => # of columns