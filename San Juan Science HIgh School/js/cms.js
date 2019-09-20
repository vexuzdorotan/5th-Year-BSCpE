var tag; //gets ID of selected tag

function Search(tag){
	this.tag = tag;
	data = "whatToSearch=" + tag.id + "&value=" + tag.value;
	AJAX(data, true, "post", "php/Search.php", true, CreateTable); 
}
// elem.childElementCount - counts child elements 

function Create(tag){
	var whatToCreate = tag.id;
	var data = "";
	var content = {};
	var error = 0;
	var parent_id = whatToCreate.substr(6, whatToCreate.length-6); //gets the id of parent IDS are set manually in html 
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

	var select = document.querySelectorAll("#" + parent_id + " select");

	for(var i = 0; i < select.length; i++){
		content[select[i].id] = select[i].options[select[i].selectedIndex].text; //getting text of <select> tag under parent_id
	}



	if(error == 0){
		content = JSON.stringify(content);
		data += "&content=" + content;
		AJAX(data, true, "post", "php/Create.php", true, CheckIfCreated);
		Search(document.getElementById("Search" + parent_id));
	}

}

function CheckIfCreated(xhttp){
	if(xhttp.responseText != "Successful"){
  		console.log(xhttp.responseText); //Other error 
	} 	
	else{
		alert("CREATED");
	}
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

	var colNum = document.querySelector("#" + tag.id + "Table thead tr").childElementCount;
	var tbody = document.querySelector("#" + tag.id + "Table tbody");
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
				btn_Edit.addEventListener("click", Edit.bind(null, json[i]));
				btn_Delete.addEventListener("click", Delete.bind(null, json[i][0], tag.id)); //Selects ID make sure that first column is ID
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
			}
			tr.appendChild(td);
		}
 		tbody.appendChild(tr);
	}
}

function RemoveChildNodes(parent_node){ //Remove childNodes
	while(Boolean(parent_node.firstChild.nextSibling)){
		parent_node.removeChild(parent_node.firstChild.nextSibling);
	}
}

function Edit(whatToEdit){ //whatToEdit is an array 
	var parent_id;
	parent_id = tag.id.substr(6, tag.id.length-6);
	var disabled; 
	console.log(parent_id);
	var input = document.querySelectorAll("#" + parent_id + " input");
	var btn_submit = document.querySelector("#" + parent_id + " button");

	for(var i = 0; i < input.length; i++){
		if(i == 0){
			disabled = document.createAttribute("disabled");
			input[i].setAttributeNode(disabled); //disabled input
		}
		input[i].value = whatToEdit[i];
	}

	var select = document.querySelectorAll("#" + parent_id + " select");

	for(var i = 0; i < select.length; i++){			//Selected option is matched
		for(var j = 0; j < select[i].options.length; j++){
			if(select[i].options[j].text == whatToEdit[i + input.length]){
				select[i].selectedIndex = j;
				break;
			}
		}
	}
	btn_submit.innerHTML = "Update Room";
}

function Delete(id, whatToDelete){
	var r = confirm("Do you want to delete this?"); //confirm alert of js
	var data;
	data = "whatToDelete=" + whatToDelete + "&id=" + id; 
  	if(r == true){
    	AJAX(data, true, "post", "php/Delete.php", true, CheckIfDeleted);
  	} 
  	else{
    	txt = "Deletion Cancelled!";
  	}
	function CheckIfDeleted(xhttp){
		Search(tag);
		console.log("Deleted");
	}
}