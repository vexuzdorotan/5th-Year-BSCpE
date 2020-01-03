// console.log(JSON.parse(sessionStorage.getItem('StudentInfo')));
var studentInfo;

studentInfo = JSON.parse(sessionStorage.getItem('StudentInfo'));
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
	// console.log(input_std_picture.files[0]);
	std_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

if(studentInfo != null){
	console.log(studentInfo);
	for(var i = 0; i < input.length-1; i++){
		input[i].value = studentInfo[i];
	}
	for(var i = 0; i < select.length; i++){			//Selected option is matched
		for(var j = 0; j < select[i].options.length; j++){
			if(select[i].options[j].text == studentInfo[i + input.length]){
				select[i].selectedIndex = j;
				break;
			}
		}
	}
	// input_std_picture.files[0]['name'] = "..\\pictures\\student\\" + studentInfo[input.length-1];
	// console.log(studentInfo[input.length]);
	std_picture.src = "..\\pictures\\student\\" + studentInfo[input.length-1];
	disabled = document.createAttribute("disabled");
	input_std_picture.setAttributeNode(disabled);
	
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
		if(imageToUpload.files[0] == undefined && studentInfo == null){
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
			if(studentInfo == null){
				content["URL_Picture"] = imageToUpload.files[0]['name'];
			}
			else{
				content["URL_Picture"] = studentInfo[input.length-1];
			}
		}
		else{
			content[input[i].id] = input[i].value;
		}
	}

	for(var i=0; i < select.length; i++){
		content[select[i].id] = select[i].options[select[i].selectedIndex].text;
	}
	console.log(content);
	
	if(studentInfo != null){
		// console.log("aa")
		UpdateWithPreset(
			parent_id, 
			content, 
			0, 
			CheckIfUpdated
		);
	}
	else{
		UploadPhoto(imageToUpload);
		CreateWithPreset(
			parent_id, 
			content, 
			0, 
			CheckIfRegistered
		);
	}
	// else{
	// 	alert("PHOTO NOT UPLOADED");
	// }
	// console.log(UploadPhoto(imageToUpload));
}

function CheckIfUpdated(xhttp){
	console.log(xhttp.responseText);
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
	AJAX_FILES(formData, false, "post", "../php/Upload.php", true, null);
}