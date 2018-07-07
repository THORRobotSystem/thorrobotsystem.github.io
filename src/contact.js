/*
Swerve senior design team contact JavaScript
Author: Frederick Wachter - wachterfreddy@gmail.com
Created: 2016-07-01
*/

windowResizeContact();

$(window).resize(
	function() {
		windowResizeContact();
	}
);

function windowResizeContact() {
	if ($(window).width() < 1425) {
		$("#contact_form_location").text("below");
	} else {
		$("#contact_form_location").text("on the right");
	}
}

/* -------------------- ----------------------- -------------------- */
/* -------------------- Contact Form Submission -------------------- */
/* -------------------- ----------------------- -------------------- */
$("#contact").submit(function(e) {
/* PROGRAMMER: Frederick Wachter - wachterfreddy@gmail.com
   DATE CREATED: 2016-06-19
   PURPOSE: Run function to clear form
*/
	e.preventDefault();
	$.ajax({
	    url: '//formspree.io/' + 'SwerveRoboticSystems' + '@' + 'gmail' + '.' + 'com', 
	    method: "POST",
	    data: {name: $("#user_name").val(), _replyto: $("#user_email").val(), message: $("#user_message").val()},
	    dataType: "json"
	});

	setTimeout(function() {
		clearForm();
	}, 1000);
});

function clearForm() {
/* PROGRAMMER: Frederick Wachter
   DATE CREATED: 2016-05-02
   PURPOSE: Clear the form
*/
	var inputs = document.getElementsByTagName("input");
	var l = inputs.length - 1;
	for (var i = 0; i < l; ++i) {
		inputs[i].value = "";
	}
	var textareas = document.getElementsByTagName("textarea");
	textareas[0].value = "";
}


