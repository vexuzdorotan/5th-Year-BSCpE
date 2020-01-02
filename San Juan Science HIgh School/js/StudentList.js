var searchStudent = document.getElementById("SearchStudent");

var modal_body = document.getElementById("modal-body");

var parent_id = "Student";
var saved_id;

var Search = function(){
	SearchWithoutQuery(
		parent_id,
		searchStudent, 
		GetID(document.querySelectorAll("#SearchStudentTable thead td"), 1),
		null
	);
	// console.log("SEARCHING")
}

Search();
function Edit(whatToEdit){
	console.log(whatToEdit[0]);
	sessionStorage.setItem('LRNNum', whatToEdit[0]);
	window.open("Student_Registration.php");
}
searchStudent.addEventListener("change", Search);