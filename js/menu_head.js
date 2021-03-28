var toggleStatus = 1;
function menu_open_and_close(x) {
	x.classList.toggle("change");
  if(toggleStatus == 1){
	  document.getElementById("menu_bar").style.display = "block";
	  document.getElementById("menu_bar").style.animationName = "menu_go";
	  document.getElementById("menu_close_a").style.display = "block";
	  document.getElementById("body").style.overflow = "hidden";
	  toggleStatus = 0;
	  } else if (toggleStatus == 0) {
		  document.getElementById("menu_close_a").style.display = "none";
		  setTimeout(function(){ document.getElementById("menu_bar").style.display = "none"; }, 700);
		  document.getElementById("menu_bar").style.animationName = "menu_go_a";
		  document.getElementById("body").style.overflow = "initial";
		  toggleStatus = 1;
		  }
}

function menu_close() {
	var element = document.getElementById("menu_change");
	element.classList.toggle("change");
	document.getElementById("menu_close_a").style.display = "none";
	setTimeout(function(){ document.getElementById("menu_bar").style.display = "none"; }, 700);
    document.getElementById("menu_bar").style.animationName = "menu_go_a";
	document.getElementById("body").style.overflow = "initial";
	toggleStatus = 1;
}