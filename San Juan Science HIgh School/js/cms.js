var txt_search; //saves content of input type = search 
var columnIDS; //saves the name of table headers

// elem.childElementCount - counts child elements 
function Create(btn_Create){
	//whatToCreate = whatToCreate.id;
	var data = "";
	var content = {};
	var error = 0;

	data += "whatToCreate=" + parent_id;
	var input = document.querySelectorAll("#" + parent_id + " input");

	for(var i = 0; i < input.length; i++){
		if(input[i].checkValidity()){	//CHECKS HTML 5 form Validation
			content[input[i].id] = input[i].value;
			input[i].style.backgroundColor = '';
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

		if(btn_Create.innerHTML == "Create " + parent_id){
			AJAX(data, true, "post", "php/Create.php", true, CheckIfCreated);
		}
		else if(btn_Create.innerHTML == "Update " + parent_id){
			AJAX(data, true, "post", "php/Update.php", true, CheckIfUpdated);	
		}
		Search(txt_search, columnIDS);
	}

}

function CheckIfCreated(xhttp){
	if(xhttp.responseText != "Successful"){
		var patt = new RegExp("duplicate", "i");
		if(patt.test(xhttp.responseText)){
			alert("ALREADY EXISTED");
		}
		else{
  			console.log(xhttp.responseText); //Other error 
  		}
	} 	
	else{
		alert("CREATED");
	}
}

function CheckIfUpdated(xhttp){
	if(xhttp.responseText != "Successful"){
  		console.log(xhttp.responseText); //Other error 
	} 	
	else{
		alert("UPDATED");
		Search(txt_search, columnIDS);
	}
}

function ResetInput(whatToReset){
	var disabled;
	// var parent_id = whatToReset.id.substr(6, whatToReset.id.length-6); //gets the id of parent IDS are set manually in html 
	var input = document.querySelectorAll("#" + parent_id + " input");
	var select = document.querySelectorAll("#" + parent_id + " select")
	for(var i = 0; i < input.length; i++){
		if(i == 0){
			try{
				disabled = input[i].getAttributeNode("disabled");
				input[i].removeAttributeNode(disabled); //disabled input
			}
			catch(err){}
		}
		input[i].value = "";
		input[i].style.backgroundColor = '';
	}
	for(var i = 0; i < select.length; i++){
		select[i].selectedIndex = 0;
	}
	
	whatToReset.innerHTML = "Create " + parent_id;
}

function Search(whatToSearch, columnIDS){
	this.columnIDS = columnIDS;
	txt_search = whatToSearch;
	data = "whatToSearch=" + parent_id + "&value=" + whatToSearch.value;
	// if(columnIDS != null){
	data += "&columnIDS=" + JSON.stringify(columnIDS); 
	console.log(columnIDS); 
	// }
	console.log(data);
	AJAX(data, true, "post", "php/Search.php", true, CreateTable); 
}

//Function to Create Table 
function CreateTable(xhttp){

	var json;
	var td;
	var tr;
	var btn_Edit;
	var btn_Delete;
	var class_btn1;
	var class_btn2;
	// console.log(xhttp.responseText);	
	json = JSON.parse(xhttp.responseText);
	var thead_td = document.querySelectorAll("#" + txt_search.id + "Table thead tr td");
	var colNum = document.querySelector("#" + txt_search.id + "Table thead tr").childElementCount;
	var tbody = document.querySelector("#" + txt_search.id + "Table tbody");
	RemoveChildNodes(tbody);
	console.log(json);
	
	for(var i=0; i < json.length; i++){
		tr = document.createElement('tr');
		for(var j = 0; j < colNum; j++){
			td = document.createElement('td');
			if(j == colNum-1 && thead_td[colNum-1].innerHTML == ""){
				btn_Delete = document.createElement('button');
				btn_Edit = document.createElement('button');
				btn_Edit.innerHTML = "EDIT";
				btn_Delete.innerHTML = "DELETE";
				btn_Edit.addEventListener("click", Edit.bind(null, json[i]));
				btn_Delete.addEventListener("click", Delete.bind(null, json[i])); //Selects ID make sure that first column is ID
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
	var disabled; 
	// console.log(parent_id);
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
	btn_submit.innerHTML = "Update " + parent_id;
	Search(txt_search, columnIDS);
	console.log(txt_search);
}

function Delete(whatToDelete){
	var r = confirm("Do you want to delete this?"); //confirm alert of js
	var data;
	//DELETE HAS PROBLEM
	data = "whatToDelete=" + parent_id + "&value=" + whatToDelete[0]; 
  	if(r == true){
    	AJAX(data, true, "post", "php/Delete.php", true, CheckIfDeleted);
  	} 
  	else{
    	txt = "Deletion Cancelled!";
  	}
	function CheckIfDeleted(xhttp){
		Search(txt_search, columnIDS);
		console.log("Deleted");
	}
	// console.log(whatToDelete);
}