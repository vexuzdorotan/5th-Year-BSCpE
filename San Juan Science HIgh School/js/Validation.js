// function isFileImage(file) {
//     return file && file['type'].split('/')[0] === 'image';
// }

var std_picture = document.querySelector("#SecondCol img");
var input_std_picture = document.querySelector("#SecondCol input");
input_std_picture.addEventListener("change", SeePicture);

var image_StdReg = document.getElementById("file"); //input type = "file"


function SeePicture(){
	std_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

var sub_StdReg = document.getElementById("sub_StdReg");

function ValidateForm(body){ //Validate if Form is not Blank
	var input = document.querySelectorAll("#"+body + " input");
	var ifblank = 0;

	file = image_StdReg.files[0];
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
		if(file == undefined){
			alert("STUDENT'S PICTURE IS NOT UPLOADED");
		}
		else{
			UploadPhoto(image_StdReg);
		}
	}
}

function CheckIfUploaded(xhttp){
	var json;
	//json = JSON.parse(xhttp.responseText);

	if(json != null){
		alert("PHOTO UPLOADED");
	}
	else{
		alert("PHOTO NOT UPLOADED");
	}
	// console.log(xhttp.responseText);

}

sub_StdReg.addEventListener("click", ValidateForm.bind(null, "body_StdReg"));


//IMAGE UPLOADING

function UploadPhoto(file){
	//const xhr = new XMLHttpRequest();
	const formData = new FormData();

	for(const fileToUpload of file.files){
		formData.append("files[]", fileToUpload);
	}

	//xhr.open("post", "php/UploadPhoto.php");
	//xhr.send(formData);
	AJAX(formData, true, "post", "php/UploadPhoto.php", true, CheckIfUploaded);
}