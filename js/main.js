$(function() {
	$(".preview-container").hover(function() {
	    $(this).children(".preview-text").fadeIn(150);
	}, function() {
	    $(this).children(".preview-text").fadeOut(150);
	});
});