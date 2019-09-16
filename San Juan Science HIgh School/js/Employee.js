var emp_picture = document.querySelector("#SecondCol img");
var input_emp_picture = document.querySelector("#SecondCol input");
input_emp_picture.addEventListener("change", SeePicture);

var imageToUpload = document.getElementById("file"); //input type = "file"


function SeePicture(){
	emp_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

var submitForm = document.getElementById("submitForm");
submitForm.addEventListener("click", ValidateForm);

function ValidateForm(){ //Validate if Form is not Blank
	var input = document.querySelectorAll("body input");
	var ifblank = 0;

	//file = image_StdReg.files[0];
	console.log(input);

	for(var i = 0; i < 11; i++){
		if(i === 5){ continue;} //5,9,10 are optional
		if(i === 9){ continue;}
		if(i === 10){ continue;}
		if(i === 11){ continue;}
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
			UploadPhoto(imageToUpload);
		}
	}
}

function CheckIfUploaded(xhttp){
	var json;
	json = JSON.parse(xhttp.responseText);

	if(json != null){
		alert("REGISTRATION SUCCESSFUL");
	}
	else{	
		alert("PHOTO NOT UPLOADED");
	}
	console.log(xhttp.responseText);

}


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
	AJAX_FILES(formData, true, "post", "php/Employee.php", true, CheckIfUploaded);
}