var searchRoom = document.getElementById("SearchRoom");
var pointer;
searchRoom.addEventListener("change", Search.bind(null, searchRoom.id));

// AJAX(data, out, method, url, async, cfunction)
function Search(whatToSearch){
	// console.log(searchRoom.value);
	pointer = whatToSearch;
	data = "whatToSearch=" + whatToSearch + "&value=" + searchRoom.value;
	AJAX(data, true, "post", "php/Search.php", true, CreateTable); 
}
// elem.childElementCount - counts child elements 
function CreateTable(xhttp){

	var json;
	var td;
	var tr;
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
			td.innerHTML = json[i][j];
			tr.appendChild(td);
			console.log(json[i][j]);
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