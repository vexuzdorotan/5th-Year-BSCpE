var txt_search; //saves content of input type = search 
var columnIDS; //saves the name of table headers
var results = []; //saves content for pagination

var eachpage = 10;
var currentpage = 1;
//NOTE:
//columnIDS can be neglected
//txt_search can be updated and removed however
//It is used to make this code complicated
//txt_search = searcbox (can be changed it is used by default by CreateTBody)

//Use function SimplifiedQuery => If you want to direct the sql query, please initialized first the query. There is no binding
//	you must concat ("+") the values you want

//function Delete, Create, Edit, and ResetInput uses "parent_id". Please initialize this first
//function Create => If your <input> and <select> tag is under the parent_id
//	It can also Update however make sure that the btn_Create is html tag whose innerHTML is Create for Inserting
//	or Update for Updating
//
//	Autoincrement = 0 (you must insert the id of the said table)
//	Autoincrement = 1 (it is autoincremented)
//	table2, FK, fieldToUpdate can be null
// 	In using these, initialize the table name(table2), FK (same field of both table1(PK) and table2), and the fieldToUpdate 
// 	(a field of table2) where we will update the value of FK of table2
//	updatecallback => directs to that function if it is updated (you can set it or default it to CheckIfUpdated)
//	createcallback => directs to this function if it is created (you can set it or default it to CheckIfCreated)


//function CreateWithPreset => Same with function Create with no table2, FK, fieldToUpdate
//	It just inserts data to database however you must have an object(having keys and their values)

//function CheckIfCreated and CheckIfUpdated 
//	both return the conditon if the query is successful or not
//	must initialize Search and ResetInput(initialValue)


//function ResetInput(inititalValue)
//It resets all <input> and <select>. function initialValue must be set if you want to have inputs with that value or leave it null

//function SearchWithoutQuery
//initialize table1, the searchbox, columnIDS, and callback
//table1 => table Name
//searchbox => gets the value of it (Can have a search of A = B where A is a field name and B is the data)
//columnIDS => the field to View
//callback => function to call after ajax

//function SearchWithQuery
// function SearchWithQuery(table1, table2, columnNames, correction, whatJoin, compare, searchbox, otherQuery, callback)
//set table1 and table2
//the columnNames
//correction, corrects only one field to its equivalent db fieldname
//whatJoin => can be left right or inner
//otherQuery => the statement after "WHERE"
//If both table has a common field just add "tableName." to it

//function CreateTBody(xhttp)
//If you want to have table same with database, just name the columns of the table same with db fieldname
//Just creates a table with Edit and Delete Feature if the table columns has one column with no id

//Edit just edits the record then changes the create button to Update
//Delete deletes the record 
//Both features require id of the record

//DeleteRecord is same with Delete however it uses "WHERE" clause
//if callback is a function then directs to callback however if not, CheckIfDeleted is used by default

//parent_id is the table name (sql)
// elem.childElementCount - counts child elements 
function SimplifiedQuery(crud,query,searchbox,callback){
	txt_search = searchbox;	
	var data = "crud=" + crud;
	data += "&query=" + query;

	AJAX(data, true, "post", "../php/Query.php", true, callback);
}

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
			AJAX(data, true, "post", "../php/Create.php", true, createCallback);
		}
		else if(btn_Create.innerHTML == "Update"){
			AJAX(data, true, "post", "../php/Update.php", true, updateCallback);	
		}
		// Search(txt_search, columnIDS);
	}
	// console.log(content);
}

// function Update(){

// }


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
	// console.log(callback);
	if(callback === null){
		AJAX(data, false, "post", "../php/Create.php", true, callback);
	}
	else if(typeof callback == "function"){
		AJAX(data, true, "post", "../php/Create.php", true, callback);
	}
	else{

	}
}

function CheckIfCreated(xhttp){ //Can be used however Please initialized Search and ResetInput function and var inititalValue
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
		Search();
		ResetInput(initialValue);
	}
}

function CheckIfUpdated(xhttp){ //Can be used however Please initialized Search and ResetInput function and var inititalValue
	if(xhttp.responseText != "Successful"){
  		console.log(xhttp.responseText); //Other error 
	} 	
	else{
		alert("UPDATED");
		Search();
		ResetInput(initialValue);
	}
}

function ResetInput(initialValue){//whatToReset - resets the button
	var disabled;
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
		input[i].value = "";
		input[i].style.backgroundColor = '';
	}
	for(var i = 0; i < select.length; i++){
		select[i].selectedIndex = 0;
	}

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
	data = "table1=" + table1;
	if(typeof searchbox == "object"){
		txt_search = searchbox;
		data += "&value=" + searchbox.value;
	}
	else{
		data += "&value=" + searchbox;
	}
	data += "&columnIDS=" + JSON.stringify(columnIDS); 
	// console.log(data);
	if(typeof callback === "function"){
		AJAX(data, true, "post", "../php/Search.php", true, callback);	
	}
	else{
		AJAX(data, true, "post", "../php/Search.php", true, CreateTBody); 
	}
}

function SearchWithQuery(table1, table2, columnNames, correction, whatJoin, compare, searchbox, otherQuery, callback){
	var data;
	txt_search = searchbox;
	// columnIDS = GetID(document.querySelectorAll("#SearchRoomTable thead td"), 0);
	// console.log(typeof searchbox);
	data = "table1=" + table1;
	if(typeof searchbox == "object"){
		data += "&value=" + searchbox.value;
	}
	else{
		data += "&value=" + searchbox;
	}
	data += "&columnIDS=" + JSON.stringify(columnNames); 
	data += "&table2=" + table2;
	data += "&whatJoin=" + whatJoin; 
	data += "&compareWhat=" + compare;
	data += "&whereQuery=" + otherQuery;
	data += "&correction=" + correction;
	// console.log(data);
	AJAX(data, true, "post", "../php/Search.php", true, callback); 
}

//Function to Create Table 
function CreateTBody(xhttp){ //Create Table Body (Imitates result of sql)
	try{
	// var json;
	var td;
	var tr;
	var btn_Edit;
	var btn_Delete;
	var class_btn1;
	var class_btn2;

	results = JSON.parse(xhttp.responseText);
	// console.log(results);

	var thead_td = document.querySelectorAll("#" + txt_search.id + "Table thead tr td");
	var colNum = document.querySelector("#" + txt_search.id + "Table thead tr").childElementCount;//childElementCount counts child of parent
	var tbody = document.querySelector("#" + txt_search.id + "Table tbody");
	var main_body = tbody.parentNode.parentNode;
	let limit;
	// console.log(main_body.children.length);
	if(document.querySelector("#modal")){
		document.querySelector("#modal-footer").removeChild(document.querySelector("#modal-footer").firstChild);
	}
	if(main_body.children.length > 2){
		main_body.removeChild(main_body.children[2]);
	}
	if(eachpage*currentpage < results.length){
		limit = eachpage*currentpage;
	}
	else{
		limit = results.length;
	}
	RemoveChildNodes(tbody);
	// console.log(results.length/eachpage);
	for(var i=eachpage*(currentpage-1); i < limit; i++){//
	// for(var i=0; i < json.length; i++){
		tr = document.createElement('tr');
		for(var j = 0; j < colNum; j++){
			td = document.createElement('td');
			if(j == colNum-1 && thead_td[colNum-1].innerHTML == ""){
				btn_Delete = document.createElement('button');
				btn_Edit = document.createElement('button');
				btn_Edit.innerHTML = "EDIT";
				btn_Delete.innerHTML = "DELETE";
				btn_Edit.addEventListener("click", Edit.bind(null, results[i]));
				btn_Delete.addEventListener("click", Delete.bind(null, results[i])); //Selects ID make sure that first column is ID
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
				td.innerHTML = results[i][j];
			}
			if(thead_td[j].style.display == "none"){
				td.style.display = "none";
			}	
			tr.appendChild(td);
		}
 		tbody.appendChild(tr);
	}
	//PAGINATION
	var pagination = document.createElement('ul');
	// var btn_First = document.createElement('button');
	// var btn_Last = document.createElement('button');
	var btn_Next = document.createElement('button');
	var btn_Previous = document.createElement('button');
	pagination.classList.add("pgn");
	// btn_First.classList.add("pgn-first");
	btn_Next.classList.add("pgn-next");
	btn_Previous.classList.add("pgn-prev")
	// btn_Last.classList.add("pgn-last");	

	// pagination.appendChild(btn_First);
	pagination.appendChild(btn_Previous);
	pagination.appendChild(btn_Next);
	// pagination.appendChild(btn_Last);

	// btn_First.class = "page-item";
	// btn_Previous.class = "page-item";
	// btn_Next.class = "page-item";
	// btn_Last.class = "page-item";
	if(document.querySelector("#modal")){
		document.querySelector("#modal-footer").appendChild(pagination);
	}
	else{
		main_body.appendChild(pagination);
	}
	// main_body.appendChild(pagination);
	// pagination.class = "pagination justify-content-end";

	pagination.style.textAlign = "center";
	// console.log(pagination);
	// btn_First.innerHTML = "First";
	btn_Previous.innerHTML = "<i class='fas fa-caret-left'></i>";
	btn_Next.innerHTML = "<i class='fas fa-caret-right'></i>";
	// btn_Last.innerHTML = "Last";
	// console.log(main_body.children.length);
	// console.log(main_body.children[main_body.children.length]);
	// btn_First.addEventListener("click", function(){
	// 	// main_body.removeChild(pagination);
	// 	console.log("first");
	// 	currentpage = 1;
	// 	CreateTBody(xhttp);
	// });

	btn_Previous.addEventListener("click", function(){
		// main_body.removeChild(pagination);
		console.log("prev");
		if(currentpage > 1){
			currentpage--;
			CreateTBody(xhttp);
		}
	});

	btn_Next.addEventListener("click", function(){
		// main_body.removeChild(pagination);
		console.log("next");
		if(currentpage < Math.ceil(results.length/eachpage)){
			currentpage++;
			CreateTBody(xhttp);
		}
	});

	// btn_Last.addEventListener("click", function(){
	// 	// main_body.removeChild(pagination);
	// 	console.log("last");
	// 	currentpage = Math.ceil(results.length/eachpage);
	// 	CreateTBody(xhttp);
	// });
	// console.log(thead_td[2].style.display);
	}
	catch(err){
		alert("CANNOT FIND");
		console.log(xhttp.responseText);
		console.log(err);
	}

	function newFunction() {
		return "dark";
	}
	// console.log(xhttp.responseText);
}
//EDIT AND DELETE IS FUNCTION OF BUTTONS INSIDE TBODY ONLY
function Edit(whatToEdit){ //whatToEdit is an array 
	//JUST copies the table depending on their order
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
    	AJAX(data, true, "post", "../php/Delete.php", true, CheckIfDeleted);
  	} 
  	else{
    	txt = "Deletion Cancelled!";
  	}
	// console.log(whatToDelete);
}

function DeleteRecord(table1, query, callback){ //DELETES depending on the query
	var r = confirm("Do you want to delete this?"); //confirm alert of js
	var data;
	//DELETE HAS PROBLEM
	data = "whatToDelete=" + table1;
	data += "&query=" + query;
  	if(r == true){
  		if(typeof callback == "function"){
  			AJAX(data, true, "post", "../php/Delete.php", true, callback);
  		}
  		else{
  			AJAX(data, true, "post", "../php/Delete.php", true, CheckIfDeleted);
  		}
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