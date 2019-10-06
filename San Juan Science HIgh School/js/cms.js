var txt_search; //saves content of input type = search 
var columnIDS; //saves the name of table headers

// elem.childElementCount - counts child elements 

function Create(btn_Create, table2, autoincrement, FK, fieldToUpdate, createCallback, updateCallback){
	//Inserts to Database depends on the id of the button inside this argument
	//Content is matched with inputs and selects only
	var data = "";
	var content = {};
	var error = 0;

	data += "whatToCreate=" + parent_id;
	data += "&table2=" + table2;
	data += "&autoincrement=" + autoincrement;
	data += "&foreignKey=" + FK;
	data += "&fieldToUpdate=" + fieldToUpdate;
	var input = document.querySelectorAll("#" + parent_id + " input");

	for(var i = 0; i < input.length; i++){
		// console.log(input[i].type);
		if(input[i].checkValidity()){	//CHECKS HTML 5 form Validation
			if(input[i].type == "number" && input[i].value == ""){
				input[i].value = 0;
			}
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
		console.log(data);
		if(btn_Create.innerHTML == "Create"){
			// if(btn_Create.innerHTML == "Create " + parent_id){
			AJAX(data, true, "post", "php/Create.php", true, createCallback);
		}
		else if(btn_Create.innerHTML == "Update"){
			// else if(btn_Create.innerHTML == "Update " + parent_id){
			AJAX(data, true, "post", "php/Update.php", true, updateCallback);	
		}
		// Search(txt_search, columnIDS);
	}

}

function CreateWithPreset(table1 , content, autoincrement, callback){
	var data;
	data = "whatToCreate=" + table1;
	data += "&table2=" + null;
	data += "&autoincrement=" + autoincrement;
	data += "&foreignKey=" + null;
	data += "&fieldToUpdate=" + null;
	console.log(content);
	content = JSON.stringify(content)
	data += "&content=" + content;

	AJAX(data, true, "post", "php/Create.php", true, callback);
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
		// Search(txt_search, columnIDS);
		Search();
		// ResetInput("create"+parent_id);
		ResetInput(initialValue);
	}
}

function CheckIfUpdated(xhttp){
	if(xhttp.responseText != "Successful"){
  		console.log(xhttp.responseText); //Other error 
	} 	
	else{
		alert("UPDATED");
		// Search(txt_search, columnIDS);
		Search();
		// ResetInput("create"+parent_id);
		ResetInput(initialValue);
	}
}

function ResetInput(initialValue){//whatToReset - resets the button
	var disabled;
	// var parent_id = whatToReset.id.substr(6, whatToReset.id.length-6); //gets the id of parent IDS are set manually in html 
	var input = document.querySelectorAll("#" + parent_id + " input");
	var select = document.querySelectorAll("#" + parent_id + " select");
	var btn = document.querySelectorAll("#" + parent_id + " button");
	for(var i = 0; i < input.length; i++){
		if(i == 0){
			try{
				disabled = input[i].getAttributeNode("disabled");
				input[i].removeAttributeNode(disabled); //disabled input
			}
			catch(err){
				// console.log(err);
			}
		}
		// if(!(input[i].value === "" || input[i].value === null)){
		// 	if(Number.isNaN(input[i].value *1)){
		// 		input[i].value = "";
		// 	}
		// 	else{
		// 		input[i].value = 0;
		// 	}
		// }
		input[i].value = "";
		input[i].style.backgroundColor = '';
	}
	for(var i = 0; i < select.length; i++){
		select[i].selectedIndex = 0;
	}
	// console.log(typeof callback);
	// callback();
	if(initialValue !== null){
		initialValue();
	}

	for(i = 0; i < btn.length; i++){
		if(btn[i].innerHTML == "Update"){
			btn[i].innerHTML = "Create";		
			// if(btn[i].innerHTML == "Create " + parent_id){
			// btn[i].innerHTML = "Update " + parent_id;		
			break;
		}
	}
}

function SearchWithoutQuery(table1, searchbox, columnIDS, callback){
	var data;
	// this.columnIDS = columnIDS;
	txt_search = searchbox;
	data = "table1=" + table1 + "&value=" + searchbox.value;
	data += "&columnIDS=" + JSON.stringify(columnIDS); 
	console.log(data);
	if(typeof callback === "function"){
		AJAX(data, true, "post", "php/Search.php", true, callback);	
	}
	else{
		AJAX(data, true, "post", "php/Search.php", true, CreateTBody); 
	}
}

function SearchWithQuery(table1, table2, columnNames, correction, whatJoin, compare, searchbox, otherQuery, callback){
	var data;
	txt_search = searchbox;
	// columnIDS = GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0);
	data = "table1=" + table1 + "&value=" + searchbox.value;
	data += "&columnIDS=" + JSON.stringify(columnNames); 
	data += "&table2=" + table2;
	data += "&whatJoin=" + whatJoin; 
	data += "&compareWhat=" + compare;
	data += "&whereQuery=" + otherQuery;
	data += "&correction=" + correction;
	// console.log(data);
	AJAX(data, true, "post", "php/Search.php", true, callback); 
}

//Function to Create Table 
function CreateTBody(xhttp){ //Create Table Body (Imitates result of sql)
	try{
	var json;
	var td;
	var tr;
	var btn_Edit;
	var btn_Delete;
	var class_btn1;
	var class_btn2;
	json = JSON.parse(xhttp.responseText);
	console.log(json);
	var thead_td = document.querySelectorAll("#" + txt_search.id + "Table thead tr td");
	var colNum = document.querySelector("#" + txt_search.id + "Table thead tr").childElementCount;//childElementCount counts child of parent
	var tbody = document.querySelector("#" + txt_search.id + "Table tbody");

	RemoveChildNodes(tbody);
	
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
			if(thead_td[j].style.display == "none"){
				td.style.display = "none";
			}	
			tr.appendChild(td);
		}
 		tbody.appendChild(tr);
	}
	// console.log(thead_td[2].style.display);
	}
	catch(err){
		alert("CANNOT FIND");
		console.log(xhttp.responseText);
		console.log(err);
	}
	// console.log(xhttp.responseText);
}
//EDIT AND DELETE IS FUNCTION OF BUTTONS INSIDE TBODY ONLY
function Edit(whatToEdit){ //whatToEdit is an array 
	console.log(whatToEdit);	
	var disabled; 
	var input = document.querySelectorAll("#" + parent_id + " input");
	var btn = document.querySelectorAll("#" + parent_id + " button");

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
	//THIS CAN BE CHANGED
	for(i = 0; i < btn.length; i++){
		if(btn[i].innerHTML == "Create"){
			btn[i].innerHTML = "Update";		
			// if(btn[i].innerHTML == "Create " + parent_id){
			// btn[i].innerHTML = "Update " + parent_id;		
			break;
		}
	}
	// Search(txt_search, columnIDS);	
	// console.log(txt_search);
}

function Delete(whatToDelete){ //DELETES if you have ID
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
	// console.log(whatToDelete);
}

function DeleteRecord(table1, query){ //DELETES depending on the query
	var r = confirm("Do you want to delete this?"); //confirm alert of js
	var data;
	//DELETE HAS PROBLEM
	data = "whatToDelete=" + table1;
	data += "&query=" + query;
  	if(r == true){
    	AJAX(data, true, "post", "php/Delete.php", true, CheckIfDeleted);
  	} 
  	else{
    	// alert("Deletion Cancelled!");
    	console.log("Deletion Cancelled!");
  	}
}

function CheckIfDeleted(xhttp){
		// Search(txt_search, columnIDS);
	if(xhttp.responseText == ""){
		Search();
		console.log("Deleted");
		alert("Deleted");
	}
	else{
		console.log(xhttp.responseText);
	}
}