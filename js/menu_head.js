var toggleStatus = 1;
function menu_open_and_close(x) {
	x.classList.toggle("change");
  if(toggleStatus == 1){
	  document.getElementById("menu_bar_id").style.display = "block";
	  document.getElementById("menu_bar_id").style.animationName = "menu_go";
	  document.getElementById("menu_close_id").style.display = "block";
	  toggleStatus = 0;
	  } else if (toggleStatus == 0) {
		  setTimeout(function(){ document.getElementById("menu_bar_id").style.display = "none"; }, 700);
		  document.getElementById("menu_bar_id").style.animationName = "menu_go_a";
		  document.getElementById("menu_close_id").style.display = "none";
		  toggleStatus = 1;
		  }
}

function menu_close() {
	var element = document.getElementById("menu_change");
	element.classList.toggle("change");
	document.getElementById("menu_close_id").style.display = "none";
	setTimeout(function(){ document.getElementById("menu_bar_id").style.display = "none"; }, 700);
    document.getElementById("menu_bar_id").style.animationName = "menu_go_a";
	toggleStatus = 1;
}