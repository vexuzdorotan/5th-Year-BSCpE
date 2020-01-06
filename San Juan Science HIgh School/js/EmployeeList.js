var searchEmployee = document.getElementById("SearchEmployee");

var modal_body = document.getElementById("modal-body");

var parent_id = "Employee";
var saved_id;

var Search = function(){
	SearchWithoutQuery(
		parent_id,
		searchEmployee, 
		GetID(document.querySelectorAll("#SearchEmployeeTable thead td"), 1),
		null
	);
	// console.log("SEARCHING")
}

Search();
function Edit(whatToEdit){
	console.log(whatToEdit[0]);
	sessionStorage.setItem('EmployeeInfo', JSON.stringify(whatToEdit));
	window.open("Employee_Registration.php");
}
searchEmployee.addEventListener("change", Search);