// function isFileImage(file) {
//     return file && file['type'].split('/')[0] === 'image';
// }

var std_picture = document.querySelector("#SecondCol img");
var input_std_picture = document.querySelector("#SecondCol input");
input_std_picture.addEventListener("change", SeePicture);


function SeePicture(){
	std_picture.src = window.URL.createObjectURL(this.files[0]); 
}

var submitForm = document.getElementById("sub_StdReg");

function ValidateForm(body){
	var input = document.querySelectorAll("#"+body + " input");
	var ifblank = 0;
	console.log(input);
	for(var i = 0; i < 11; i++){
		if(i === 5){ continue;}
		if(i === 9){ continue;}
		if(i === 10){ continue;}
		if(input[i].value == ""){
			ifblank++;
		}
	}

	if(ifblank != 0){
		alert("PLEASE FILL UP");
	}
}

submitForm.addEventListener("click", ValidateForm.bind(null, "body_StdReg"));
