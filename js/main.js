$(function() {
	$(".preview-container").hover(function() {
	    $(this).children(".preview-text").fadeIn();
	}, function() {
	    $(this).children(".preview-text").fadeOut();
	});
});