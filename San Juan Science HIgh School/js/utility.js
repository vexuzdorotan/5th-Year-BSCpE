function GetID(node, offset){
	var content = {};
	for(var i = 0; i < node.length - offset; i++){
		content[i] = node[i].id;
	}
	// console.log(content);
	return content;
}

function GetIDinString(node){
	var content = "";
	for(var i = 0; i < node.length; i++){
		content += node[i].id + " "; 
	}
	return content;
}

function RemoveChildNodes(parent_node){ //Remove childNodes
	try{
		while(Boolean(parent_node.firstChild)){
			parent_node.removeChild(parent_node.firstChild);
		}
	}
	catch(err){
		console.log(err);	
	}
}

function CreateTable(table_id, thead_id, thead_innerHTML, seperator, parentNode, offset, hiddenCol){ //

	var table = document.createElement("table");
	var id;
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var tr = document.createElement("tr");
	var td;
	var td_id;
	if(hiddenCol !== null){
		hiddenCol = hiddenCol.split(seperator);
	}
	thead_id = thead_id.split(seperator);
	thead_innerHTML = thead_innerHTML.split(seperator);
	// console.log(thead_id);
	// console.log(thead_innerHTML);
	// console.log(thead_id.length);
	for(var i = 0; i < thead_id.length+offset; i++){
		td = document.createElement("td");
		if(i < thead_id.length){
			td_id = document.createAttribute("id");
			td_id.value = thead_id[i];
			td.setAttributeNode(td_id);
			td.innerHTML = thead_innerHTML[i];
			if(hiddenCol !== null){
				for(var j = 0; j < hiddenCol.length; j++){
					if(thead_id[i] == hiddenCol[j]){
						// console.log("EQUAL");
						td.style.display = "none";			
						break;
					}
				}
			}
			// console.log(td);
		}
		else{
			td.innerHTML = "";
		}
		tr.appendChild(td);
	}
	thead.appendChild(tr);
	id = document.createAttribute("id");
	id.value = table_id;
	table.setAttributeNode(id);
	table.appendChild(thead);
	table.appendChild(tbody);
	table.style.width = "100%";
	parentNode.appendChild(table);
	// console.log(parentNode);
}


function CreateInput(input_id, type, parentNode){	//Creates input tag with id 
	var input = document.createElement("input");
	var p = document.createElement("p");
	var inputTYPE = document.createAttribute("type");
	var inputID = document.createAttribute("id");
	inputID.value = input_id;
	inputTYPE.value = type;
	input.setAttributeNode(inputID);
	p.appendChild(input);
	parentNode.appendChild(p);
}

function EmptyNode(node){
	for(var i = 0; i < node.length; i++){
		node[i].innerHTML = "";
		node[i].value = "";
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
	else if(child == "9:00-9:20"){
		return 4;
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
	else if(child == "12:20-1:00"){
		return 8;
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