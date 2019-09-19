var searchRoom = document.getElementById("SearchRoom");
var createRoom = document.getElementById("CreateRoom");
var createSection = document.getElementById("CreateSection");
var pointer;

searchRoom.addEventListener("change", Search.bind(null, searchRoom.id));
createRoom.addEventListener("click", Create.bind(null, createRoom.id));

createSection.addEventListener("click", Create.bind(null, createSection.id));

// AJAX(data, out, method, url, async, cfunction)
function Search(whatToSearch){
	// console.log(searchRoom.value);
	pointer = whatToSearch;
	data = "whatToSearch=" + whatToSearch + "&value=" + searchRoom.value;
	AJAX(data, true, "post", "php/Search.php", true, CreateTable); 
}
// elem.childElementCount - counts child elements 

function Create(whatToCreate){
	var whatToCreate;
	var data = "";
	var content = {};
	var error = 0;
	var parent_id = whatToCreate.substr(6, whatToCreate.length-6);
	console.log(parent_id);
	data += "whatToCreate=" + parent_id;
	var input = document.querySelectorAll("#" + parent_id + " input");

	for(var i = 0; i < input.length; i++){
		if(input[i].checkValidity()){	//CHECKS HTML 5 form Validation
			content[input[i].id] = input[i].value;
		}	
		else{
			error++;
			input[i].style.backgroundColor = 'pink';
		}
	}
	if(error == 0){
		// console.log(content);

		content = JSON.stringify(content);
		data += "&content=" + content;
		AJAX(data, true, "post", "php/Create.php", true, CheckIfCreated);

		// console.log(data);
	}

}

function CheckIfCreated(xhttp){
	//console.log(JSON.parse(xhttp.responseText));
	//console.log("HI");
	console.log(xhttp.responseText);
}



function CreateTable(xhttp){

	var json;
	var td;
	var tr;
	var btn_Edit;
	var btn_Delete;
	var class_btn1;
	var class_btn2;
	json = JSON.parse(xhttp.responseText);

	var colNum = document.querySelector("#" + pointer + "Table thead tr").childElementCount;
	var tbody = document.querySelector("#" + pointer + "Table tbody");
	RemoveChildNodes(tbody);
	//console.log(colNum);
	//console.log(json[0][colNum-1]);
	


	// tbody.style.border = "2em pink solid";
	for(var i=0; i < json.length; i++){
		tr = document.createElement('tr');
		for(var j = 0; j < colNum; j++){
			td = document.createElement('td');
			if(j == colNum-1){
				btn_Delete = document.createElement('button');
				btn_Edit = document.createElement('button');
				btn_Edit.innerHTML = "EDIT";
				btn_Delete.innerHTML = "DELETE";
				btn_Edit.addEventListener("click", EditRoom);
				btn_Delete.addEventListener("click", DeleteRoom);
				td.appendChild(btn_Edit);
				td.appendChild(btn_Delete);
				class_btn1 = document.createAttribute("class");
				class_btn2 = document.createAttribute("class");
				class_btn1.value = "btn_Table"; //
				class_btn2.value = "btn_Table";
				btn_Delete.setAttributeNode(class_btn1);
				btn_Edit.setAttributeNode(class_btn2); 
			}
			else{
				td.innerHTML = json[i][j];
				
				//console.log(json[i][j]);
			}
			tr.appendChild(td);
		}
 		tbody.appendChild(tr);
		// console.log(json.length);
	}

	// for()
}

function RemoveChildNodes(parent_node){ //Remove childNodes
	while(Boolean(parent_node.firstChild.nextSibling)){
		parent_node.removeChild(parent_node.firstChild.nextSibling);
	}
}

function EditRoom(){
	alert("EDIT");
}

function DeleteRoom(){
	alert("DELETE");
}