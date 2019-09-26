"use strict";
// document ready event listener
$(document).ready(function() {
	var ID = localStorage.getItem('ID');
	if (ID != null) {
		$("#logoutLink").css("display", "inline-block");
		$("#sectionDashLink").css("display", "inline-block");
		$("#profileLink").css("display", "inline-block");
		$("#sectionDashLink").css("display", "inline-block");
		$("#loginLink").css("display", "none");
		$("#regLink").css("display", "none");
	} else {
		$("#logoutLink").css("display", "none");
		$("#sectionDashLink").css("display", "none");
		$("#profileLink").css("display", "none");
		$("#loginLink").css("display", "inline-block");
		$("#regLink").css("display", "inline-block");
    }
    $("#logoutLink").click(() => {
        localStorage.clear();
	});
});
