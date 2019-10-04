function GetID(node, offset){
	var content = {};
	for(var i = 0; i < node.length - offset; i++){
		content[i] = node[i].id;
	}
	// console.log(content);
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

function CreateTable(table_id, thead_id, thead_innerHTML, seperator, parentNode, offset){ //

	var table = document.createElement("table");
	var id;
	var thead = document.createElement("thead");
	var tbody = document.createElement("tbody");
	var tr = document.createElement("tr");
	var td;
	var td_id;

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