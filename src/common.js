/*
Swerve senior design team common JavaScript
Author: Frederick Wachter - wachterfreddy@gmail.com
Created: 2016-07-02
*/

var SCROLL_ARROW_SHOW = 300;

$("#up_arrow").css({
	"visibility": "hidden"
});

$("#up_arrow").click(function(){
  //$(window).scrollTop(0);
  $.smoothScroll(0);
});

setTimeout(function() {
  titleResize();
}, 1000);

$(window).resize(function() {
  titleResize();
});

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if (scroll > SCROLL_ARROW_SHOW) {
  	$("#up_arrow").css({
			"visibility": "visible"
		});
  } else {
  	$("#up_arrow").css({
			"visibility": "hidden"
		});
  }
});

function titleResize() {
  var video_width = $(window).width() + 20;
  $("#title_video").css({
    "width": video_width + "px"
  });
  $("#title").css({
    "height": $("#title_video").height() + 70 + "px"
  });
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-66023611-4', 'auto');
ga('send', 'pageview');


