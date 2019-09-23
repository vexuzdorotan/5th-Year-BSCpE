var btn_close = document.querySelector("#modal #close");
var modal_title = document.querySelector("#modal-title");
var modal = document.querySelector("#modal");

btn_close.addEventListener("click", closeModal);

function closeModal(modalContent){
	modal.style.display = "none";
	parent_id = saved_id;
	RemoveChildNodes(modalContent);
	// console.log(parent_id);
}

function openModal(string, dbname){
	saved_id = parent_id;
	modal_title.innerHTML = "Available " + string.substr(4, string.length-4) +"s";
	parent_id = dbname;
	modal.style.display = "block";
	// console.log(parent_id);
}

