/*
Swerve senior design team animation JavaScript
Author: Frederick Wachter - wachterfreddy@gmail.com
Created: 2016-06-25
*/

$(window).on('beforeunload', function() {
    $(window).scrollTop(0); 
});

$(document).ready(function(){
	animation(); // start animation
});

$("#animation_background").css({
	"height": $(window).height() + 1000 + "px"
});

var transition_type = "all 0.5s ease 0s";
var animation_no_wait = 0;
var animation_smooth  = 500;
var animation_wait    = 1000;

function animation() {
	animationStart();
	setTimeout(function() {
		animationPart1();
		setTimeout(function() {
			animationPart2();
			setTimeout(function() {
				animationPart3();
			}, animation_wait);
		}, animation_smooth);
	}, animation_no_wait);
}

function animationStart() {
	var window_width  = $(window).width();
	var window_height = $(window).height();
	var leave_window_adjust = 100;

	$(".logo").addClass("animation");
	$("#logo_bracket_left").css({
		"margin-left": -(window_width/2 + leave_window_adjust) + "px"
	});
	$("#logo_bracket_right").css({
		"margin-left": (window_width/2 + leave_window_adjust) + "px"
	});
	$("#logo_hammer").css({
		"margin-left": "-17.5px",
		"margin-top": -(window_height/2 + leave_window_adjust) + "px"
	});
	$("#logo_words").css({
		"margin-left": "40px",
		"width": "0px"
	});
}

function animationPart1() {
	$("#logo_bracket_left").css({
		"margin-left": "-38px"
	});
	$("#logo_bracket_right").css({
		"margin-left": "40px"
	});
	$("#logo_hammer").css({
		"margin-top": ""
	});
	$(".logo").css({
		"transition": transition_type
	});
}

function animationPart2() {
	$("#logo_bracket_left").css({
		"margin-left": "-110px"
	});
	$("#logo_bracket_right").css({
		"margin-left": "118px"
	});
	$("#logo_hammer").css({
		"margin-left": "-88px"
	});
	$("#logo_words").css({
		"margin-left": "-20px",
		"width": ""
	});
}

function animationPart3() {
	$("#logo").removeClass("center");
	$("#animation_background").css({
		"height": "0px",
		"transition": transition_type
	});
	$("#title").css({
		"opacity": "1",
		"transition":"opacity 0.5s ease 0.25s"
	});
	$("#animation").css({
		"height": "70px",
	});
	$(".logo").css({
		"height": "50px"
	});
	$(".logo_bracket").css({
		"width": "10px"
	});
	$("#logo_bracket_left").css({
		"top": "60px",
		"margin-left": "-25px"
	});
	$("#logo_bracket_right").css({
		"top": "60px",
		"margin-left": "20px"
	});
	$("#logo_hammer").css({
		"top": "60px",
		"width": "35px",
		"margin-left": "-13px"
	});
	$("#logo_words").css({
		"margin-left": "10px",
		"top": "60px",
		"width": "0px",
	});
	$(window).scrollTop(0); 
}

function animationEnd() {

}


