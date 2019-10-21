let button = document.querySelectorAll('button');
let input = document.querySelectorAll('input');
let select = document.querySelector('select');
//LOGIN

button[0].addEventListener("click", function(){
	let data = 'username=' + input[0].value;
	data += '&pass=' + input[1].value;
	data += '&access=' + select.options[select.selectedIndex].text;
	console.log(data);
	AJAX(data, true, "post", "php/Authenticate.php", true, test);
	// console.log("LOGIN");
});

function test(xhttp){
	// console.log("ok");
	if(xhttp.responseText != "failed"){
		window.location.href = xhttp.responseText + "/Dashboard.php";
	}
	else{
		alert("Wrong username or password");
	}
}

//RESET
button[1].addEventListener("click", function(){
	input.forEach((input)=>{
		input.value = "";
		console.log(this);
	});
	console.log("RESET");
});
// [1,2,3].map(AA);

// function AA(){
// 	console.log("HEY")
// }