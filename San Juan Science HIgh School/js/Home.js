//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  currentYOffset = self.pageYOffset;
  initYOffset = currentYOffset;

  var intervalId = setInterval(function(){
  currentYOffset -= initYOffset*0.05; 
  document.body.scrollTop = currentYOffset ;
  document.documentElement.scrollTop = currentYOffset;

    if(self.pageYOffset == 0){
      clearInterval(intervalId);
    }
  }, 20);

} 
var hidden = true;
$("#button-addon1").on("click", function () {
	if(!hidden){
	    $("#search").animate({width: "0px"}, 400)
	    $("#search").fadeOut();
	   hidden=true;
	}
	else{
		$("#search").fadeIn();
		$("#search").animate({width: "188px"}, 400)
		hidden=false;
	}
});
