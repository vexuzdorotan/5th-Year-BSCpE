

var std_picture = document.querySelector("#SecondCol img");
var input_std_picture = document.querySelector("#SecondCol input");
input_std_picture.addEventListener("change", SeePicture);

var imageToUpload = document.getElementById("file"); //input type = "file"


function SeePicture(){
	std_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

var sub_StdReg = document.getElementById("sub_StdReg");
var sub_EmpReg = document.getElementById("sub_EmpReg");
sub_StdReg.addEventListener("click", ValidateForm.bind(null, "StdReg"));
sub_EmpReg.addEventListener("click", ValidateForm.bind(null, "EmpReg"));




function ValidateForm(FormType){ //Validate if Form is not Blank
	var input = document.querySelectorAll("#body_"+FormType + " input");
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

	// if(ifblank != 0){ //If some fields are still blank
	// 	alert("PLEASE FILL UP");	
	// }
	// else{

		//console.log(imageToUpload.files[0]["name"]);
		
		if(imageToUpload.files[0] == undefined){
			alert("STUDENT'S PICTURE IS NOT UPLOADED");
		}
		else{
			UploadPhoto(imageToUpload, FormType);
		}
	// }
	// imageToUpload.files[0]["population"] = "student";
	// console.log(imageToUpload.files[0]["population"]);
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

function UploadPhoto(file, formType){
	//const xhr = new XMLHttpRequest();
	const formData = new FormData();
	var url;

	for(const fileToUpload of file.files){
		formData.append("files[]", fileToUpload);
	}

	if(formType = "StdReg"){
		url = "php/Student.php";
	}
	else if(formType = "EmpReg"){
		url = "php/Employee.php";
	}
	// var data = "formData=" + JSON.stringify(formData);
	//xhr.open("post", "php/UploadPhoto.php");
	//xhr.send(formData);
	AJAX_FILES(formData, true, "post", url, true, CheckIfUploaded);
}