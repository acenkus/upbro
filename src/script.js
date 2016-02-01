// functions
function create_cookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else {
		var expires = "";
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function read_cookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function erase_cookie(name) {
	createCookie(name,"",-1);
}
//check feuture
function check_feature () {
//historyAPI, placeholder (from IE10)
//webGL (from IE11)
	if (!feature.historyAPI || !feature.placeholder) {
		$('.check_feature-container').fadeIn();
	}
}
//document
$(document).ready(function(){
	//check feature
	 check_feature();

	$('.check_feature-close').on('click', function(e) {
		e.preventDefault();

		create_cookie('check_feature', 1, 1);
		$('.check_feature-container').fadeOut();
	})
	// moblie menu
	$('.header-menu-hamburger').on('click', function() {
		$(this).toggleClass('open');
		$('.header-menu').toggleClass('open');
	});

});