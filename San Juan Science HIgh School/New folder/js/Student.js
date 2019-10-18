var std_picture = document.querySelector("#SecondCol img");
var input_std_picture = document.querySelector("#SecondCol input");
input_std_picture.addEventListener("change", SeePicture);

var imageToUpload = document.getElementById("file"); //input type = "file"

//INFO
var input = document.querySelectorAll("body input"); //Gets all input tags
var select = document.querySelectorAll("body select");
var output = document.querySelector("output");
var parent_id = "Student";


function SeePicture(){
	std_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

var submitForm = document.getElementById("submitForm");
// submitForm.addEventListener("click", ValidateForm.bind(null, "StdReg"));
submitForm.addEventListener("click", function(event){
	event.preventDefault();
	ValidateForm();
});


for(var i = 0; i < input.length; i++){
	// input[i].autocomplete = "";
	input[i].addEventListener("change", function(){
		if(!this.checkValidity()){
			document.querySelector("form").reportValidity();
		}
	});
	// console.log(input[i]);
}

function ValidateForm(){ //Validate if Form has no Blanks in every required fields
	var ifblank = 0;

	for(var i = 0; i < input.length; i++){
		if(!input[i].checkValidity()){
			ifblank++;
			document.querySelector("form").reportValidity();
		}
	}

	if(ifblank != 0){ //If some fields are still blank
		alert("PLEASE FILL UP");	
	}
	else{
		if(imageToUpload.files[0] == undefined){
			alert("STUDENT'S PICTURE IS NOT UPLOADED");
		}
		else{
			// UploadPhoto(imageToUpload);
			InsertInfo();
		}
	}
}

function InsertInfo(){
	var data = "";
	var content = {};
	
	for(var i = 0; i < input.length; i++){
		if(input[i].type == "file"){
			content["URL_Picture"] = imageToUpload.files[0]['name'];
		}
		else{
			content[input[i].id] = input[i].value;
		}
	}

	for(var i=0; i < select.length; i++){
		content[select[i].id] = select[i].options[select[i].selectedIndex].text;
	}
	console.log(content);
	// UploadPhoto(imageToUpload);
	
	CreateWithPreset(
		parent_id, 
		content, 
		0, 
		CheckIfRegistered
	);
	// else{
	// 	alert("PHOTO NOT UPLOADED");
	// }
	// console.log(UploadPhoto(imageToUpload));
}


function CheckIfRegistered(xhttp){
	if(xhttp.responseText != "Successful"){
		var patt = new RegExp("duplicate", "i");
		if(patt.test(xhttp.responseText)){
			alert("ALREADY REGISTERED");
		}
		else{
  			console.log(xhttp.responseText); //Other error 
  		}
	} 	
	else{
		alert("REGISTERED");
	}
}

// function CheckIfUploaded(xhttp){
// 	var json;
// 	json = JSON.parse(xhttp.responseText);

// 	if(json == 1){
// 		//alert("PHOTO UPLOADED");
// 		boolean = 1;
// 		console.log(boolean);
// 	}
// 	else{	
// 		//alert("PHOTO NOT UPLOADED");
// 		boolean = 0;
// 		console.log(boolean);
// 	}
// 	//console.log(xhttp.responseText);
// }


//IMAGE UPLOADING

function UploadPhoto(file){
	const formData = new FormData();
	//SIZE OF IMAGE IS NOT YET CONSIDERED

	for(const fileToUpload of file.files){
		formData.append("files[]", fileToUpload);
	}
	AJAX_FILES(formData, false, "post", "php/Upload.php", true, null);
}