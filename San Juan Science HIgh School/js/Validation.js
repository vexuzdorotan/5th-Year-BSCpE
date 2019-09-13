// function isFileImage(file) {
//     return file && file['type'].split('/')[0] === 'image';
// }

var std_picture = document.querySelector("#SecondCol img");
var input_std_picture = document.querySelector("#SecondCol input");
input_std_picture.addEventListener("change", SeePicture);


function SeePicture(){
	std_picture.src = window.URL.createObjectURL(this.files[0]); //Previews the picture 
}

var submitForm = document.getElementById("sub_StdReg");

function ValidateForm(body){ //Validate if Form is not Blank
	var input = document.querySelectorAll("#"+body + " input");
	var ifblank = 0;
	console.log(input);
	for(var i = 0; i < 11; i++){
		if(i === 5){ continue;} //5,9,10 are optional
		if(i === 9){ continue;}
		if(i === 10){ continue;}
		if(input[i].value == ""){
			ifblank++; //Increments if the <input tag> is not filled
		}
	}

	if(ifblank != 0){
		alert("PLEASE FILL UP");
	}
}

submitForm.addEventListener("click", ValidateForm.bind(null, "body_StdReg"));
