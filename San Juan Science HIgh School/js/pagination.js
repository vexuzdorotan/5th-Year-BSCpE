var pagination = document.createElement('ul');
	// var btn_First = document.createElement('button');
	// var btn_Last = document.createElement('button');
	var btn_Next = document.createElement('button');
	var btn_Previous = document.createElement('button');
	pagination.classList.add("pgn");
	// btn_First.classList.add("pgn-first");
	btn_Next.classList.add("pgn-next");
	btn_Previous.classList.add("pgn-prev")
	// btn_Last.classList.add("pgn-last");	

	// pagination.appendChild(btn_First);
	pagination.appendChild(btn_Previous);
	pagination.appendChild(btn_Next);
	// pagination.appendChild(btn_Last);

	// btn_First.class = "page-item";
	// btn_Previous.class = "page-item";
	// btn_Next.class = "page-item";
	// btn_Last.class = "page-item";
	if(document.querySelector("#modal")){
		document.querySelector("#modal-footer").appendChild(pagination);
	}
	else{
		main_body.appendChild(pagination);
	}
	// main_body.appendChild(pagination);
	// pagination.class = "pagination justify-content-end";

	pagination.style.textAlign = "center";
	// console.log(pagination);
	// btn_First.innerHTML = "First";
	btn_Previous.innerHTML = "<i class='fas fa-caret-left'></i>";
	btn_Next.innerHTML = "<i class='fas fa-caret-right'></i>";
	// btn_Last.innerHTML = "Last";
	// console.log(main_body.children.length);
	// console.log(main_body.children[main_body.children.length]);
	// btn_First.addEventListener("click", function(){
	// 	// main_body.removeChild(pagination);
	// 	console.log("first");
	// 	currentpage = 1;
	// 	CreateTBody(xhttp);
	// });

	btn_Previous.addEventListener("click", function(){
		// main_body.removeChild(pagination);
		console.log("prev");
		if(currentpage > 1){
			currentpage--;
			CreateTBody(xhttp);
		}
	});

	btn_Next.addEventListener("click", function(){
		// main_body.removeChild(pagination);
		console.log("next");
		if(currentpage < Math.ceil(results.length/eachpage)){
			currentpage++;
			CreateTBody(xhttp);
		}
	});

	// btn_Last.addEventListener("click", function(){
	// 	// main_body.removeChild(pagination);
	// 	console.log("last");
	// 	currentpage = Math.ceil(results.length/eachpage);
	// 	CreateTBody(xhttp);
	// });
	// console.log(thead_td[2].style.display);
	}
	catch(err){
		alert("CANNOT FIND");
		console.log(xhttp.responseText);
		console.log(err);
	}

	function newFunction() {
		return "dark";
	}