var std_picture = document.querySelector("#SecondCol img");
var input_std_picture = document.querySelector("#SecondCol input");
input_std_picture.addEventListener("change", SeePicture);

var imageToUpload = document.getElementById("file"); //input type = "file"

//INFO
var input = document.querySelectorAll("body input"); //Gets all input tags
var boolean;

function SeePicture(){
	std_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

var submitForm = document.getElementById("submitForm");
// submitForm.addEventListener("click", ValidateForm.bind(null, "StdReg"));
submitForm.addEventListener("click", ValidateForm);


function ValidateForm(){ //Validate if Form has no Blanks in every required fields
	var ifblank = 0;

	//file = image_StdReg.files[0];
	console.log(input);
	console.log(input[0].id);

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

	for(var i = 0; i < 3; i++){
		data += "&" + select[i].id + "=" + select[i].options[select[i].selectedIndex].text; //getting text of <select>
	}


	var gender = document.querySelectorAll("#gender");
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
	
	AJAX(data, true, "post", "php/Student.php", true, CheckIfRegistered);
	
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
	AJAX_FILES(formData, false, "post", "php/Student.php", true, null);
}