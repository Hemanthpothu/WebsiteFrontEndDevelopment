(function(){
	
	let menuButton = document.getElementById ("mainmenu");
	let navMenu = document.getElementById ("nav-menu");
	
	menuButton.addEventListener("click", togglemenu);
	
	
	let toggle = false; //hidden at first
	function togglemenu() {
		if (toggle) { //if menu is visible
		navMenu.classList.remove("displaymenu"), //hide the menu
		toggle = false
		}
		else { // false: it's hidden
		navMenu.classList.add("displaymenu"), // show the menu
		toggle = true
		}
	}

}) ();
	
	