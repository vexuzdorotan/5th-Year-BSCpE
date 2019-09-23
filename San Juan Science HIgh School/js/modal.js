var btn_close = document.querySelector("#modal #close");
var modal_title = document.querySelector("#modal-title");
var modal = document.querySelector("#modal");

btn_close.addEventListener("click", closeModal);

function closeModal(){
	modal.style.display = "none";
	parent_id = saved_id;

	// console.log(parent_id);
}

function openModal(id){
	saved_id = parent_id;
	modal_title.innerHTML = "Available " + id.substr(4, id.length-4) +"s";
	parent_id = id.substr(4, id.length-4);
	modal.style.display = "block";
	// console.log(parent_id);
}

