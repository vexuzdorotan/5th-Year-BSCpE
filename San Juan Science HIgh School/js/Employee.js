var emp_picture = document.querySelector("#SecondCol img");
var input_emp_picture = document.querySelector("#SecondCol input");
input_emp_picture.addEventListener("change", SeePicture);

var imageToUpload = document.getElementById("file"); //input type = "file"
var input = document.querySelectorAll("body input"); //Gets all input tags

function SeePicture(){
	emp_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

var submitForm = document.getElementById("submitForm");
submitForm.addEventListener("click", ValidateForm);

function ValidateForm(){ //Validate if Form is not Blank
	var ifblank = 0;

	//file = image_StdReg.files[0];
	console.log(input);

	for(var i = 0; i < 11; i++){
		if(i === 5){ continue;} //5,9,10 are optional
		if(i === 8){ continue;}
		// if(i === 10){ continue;}
		// if(i === 11){ continue;}
		if(input[i].value == ""){
			ifblank++; //Increments if the <input tag> is not filled
		}
	}

	if(ifblank != 0){ //If some fields are still blank
		alert("PLEASE FILL UP");	
	}
	else{

		//console.log(imageToUpload.files[0]["name"]);
		// console.log(imageToUpload);
		if(imageToUpload.files[0] == undefined){
			alert("EMPLOYEE'S PICTURE IS NOT UPLOADED");
		}
		else{
			InsertInfo();
		}
	}
}

function InsertInfo(){
	var data = "";
	for(var i = 0; i < 9; i++){ //getting values of <input>
		if(i === 0){
			data += input[i].id + "=" + input[i].value;
		}
		else{
			data += "&" + input[i].id + "=" + input[i].value;
		}
	}

	data += "&URL_Picture=" + imageToUpload.files[0]["name"];
	var select = document.querySelectorAll("select");

	for(var i = 0; i < 2; i++){
		data += "&" + select[i].id + "=" + select[i].options[select[i].selectedIndex].text; //getting text of <select>
	}


	var gender = document.querySelectorAll("#Gender");
	for (var i = 0, length = gender.length; i < length; i++){
 		if (gender[i].checked){
  			// do whatever you want with the checked radio
  			data += "&Gender=" + gender[i].value;
  			// only one radio can be logically checked, don't check the rest
  		break;
 		}
	}
	console.log(data);
	UploadPhoto(imageToUpload);
	
	AJAX(data, true, "post", "php/Employee.php", true, CheckIfRegistered);
	
	// else{
	// 	alert("PHOTO NOT UPLOADED");
	// }
	// console.log(UploadPhoto(imageToUpload));
}

function CheckIfRegistered(xhttp){
	//var json;
	//json = JSON.parse(xhttp.responseText);

	console.log(xhttp.responseText);
}


// function CheckIfUploaded(xhttp){
// 	var json;
// 	json = JSON.parse(xhttp.responseText);

// 	if(json != null){
// 		alert("REGISTRATION SUCCESSFUL");
// 	}
// 	else{	
// 		alert("PHOTO NOT UPLOADED");
// 	}
// 	console.log(xhttp.responseText);

// }


//IMAGE UPLOADING

function UploadPhoto(file){
	//const xhr = new XMLHttpRequest();
	const formData = new FormData();
	var url;

	for(const fileToUpload of file.files){
		formData.append("files[]", fileToUpload);
	}

	//xhr.open("post", "php/UploadPhoto.php");
	//xhr.send(formData);
	AJAX_FILES(formData, false, "post", "php/Employee.php", true, null);
}