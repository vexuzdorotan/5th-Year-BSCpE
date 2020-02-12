var list_styled = document.querySelector(".list-unstyled");
var buttons = document.querySelectorAll(".container button");
window.name = "Content Management System";
buttons[0].addEventListener("click", function(){
	// console.log("AAA");
	// window.open("cms.php", "Content Management System");
	window.open("news_template.php", "template");
});

RetrieveData();
function RetrieveData(){
	var columnNames = {};
	columnNames[0] = "ContentID";
	columnNames[1] = "Title";
	columnNames[2] = "Content";
	columnNames[3] = "URL_Picture";
	columnNames[4] = "DateCreated";
	columnNames[5] = "User";
	columnNames[6] = "Action";
	SearchWithoutQuery(
		"content",
		"",
		columnNames,
		Check
	);
}

function Check(xhttp){
	// console.log(xhttp.responseText);
	json = xhttp.responseText;
	// if(json == "[]"){
	// 	var li_media = document.createElement("li");
	// 	li_media.class = "media";
	// 	li_media.alt = "Generic placeholder image";
	// 	var img = document.createElement("img");
	// 	img.class = "news-img mt-1 mb-1 rounded mr-3";
	// 	// img.src = "../pictures/plus.png";
	// 	img.src = "";
	// 	li_media.appendChild(img);
	// 	list_styled.appendChild(li_media);

	// }
	// console.log((xhttp.responseText) == "[]");
	for(var i = 0; i < json.length; i++){
		var ContentID = json[i][0];
		var Title = json[i][1];
		var Content = json[i][2];
		var URL_Picture = json[i][3];
		var DateCreated = json[i][4];
		var User = json[i][5];
		var Action = json[i][6];

		var li_media = document.createElement("li");
		li_media.class = "media";
		li_media.alt = "Generic placeholder image";
		var img = document.createElement("img");
		img.class = "news-img mt-1 mb-1 rounded mr-3";
		img.src = "../pictures/" + URL_Picture;
		var media_body = document.createElement("div");
		media_body.class = "media-body";
		var h5 = document.createElement("h5");
		h5.class = "mt-0 mb-1";
		var span1 = document.createElement("span");
		var p = document.createElement("p");
		var show_button = document.createElement("button");
	}
}