var tr = document.querySelectorAll("tbody tr");
var table = document.querySelector("table");
var modal_body = document.getElementById("modal-body");

var saved_id;
var parent_id;
var day;
var time;
var theadID;
var theadHTML;
var parentCol; //gets the content of the column of that cell
var parentRow; //gets the content of the row of that cell

for(var i = 1; i < tr.length+1; i++){
	for(var j = 1; j < tr[0].childElementCount; j++){
		table.rows[i].cells[j].addEventListener("click", Get1stRowCell.bind(null, i, j));
	}
}
function Get1stRowCell(i, j){
	parentCol = j;
	parentRow = i;
	time = table.rows[i].cells[0].innerHTML;
	day = table.rows[0].cells[j].innerHTML;
	table.rows[parentRow].cells[parentCol].innerHTML = "";

	theadID = "SubjectCode@SubjectDescription@GradeLevel";
	theadHTML = "Subject Code@Description@Grade Level";
	CreateInput("SearchSubjectCode", "search", modal_body);
	CreateTable("SearchSubjectCodeTable", theadID, theadHTML, "@", modal_body, 0);
	var searchSubjectCode = document.getElementById("SearchSubjectCode");
	openModal("Subject Code", "SubjectCode");
	var Search = function(){
		SearchWithoutQuery(
			searchSubjectCode, 
			GetID(document.querySelectorAll("#SearchSubjectCodeTable thead td"), 0),
			PickSubjectCode
		);
	}
	Search();
	searchSubjectCode.addEventListener('change', function(){
		Search();
	});
}

function PickSubjectCode(xhttp){
	CreateTBody(xhttp);
	var tbody_tr = document.querySelectorAll("#SearchSubjectCodeTable tbody tr");
	for(var i = 0; i < tbody_tr.length; i++){
		tbody_tr[i].addEventListener("click", function(){
			table.rows[parentRow].cells[parentCol].innerHTML = this.childNodes[0].innerHTML;
			document.querySelector("#SearchSubjectCode").value = "";
			closeModal(modal_body);
		});
		tbody_tr[i].addEventListener("mouseover", function(){
			this.style.backgroundColor = "cyan";
		});
		tbody_tr[i].addEventListener("mouseout", function(){
			this.style.backgroundColor = "";
		});	
	}
	// txt_search = searchSection;
	// columnIDS = GetID(document.querySelectorAll("#SearchSectionTable thead td"), 1);
}

//tr.length => # of rows
//tr[0].childElementCount => # of columns