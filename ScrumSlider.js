$(document).ready(function () {
	alert("Im ready");
	var locations = ["http://ca1tfsapp01:8080/tfs/ServerEPS%20Project%20Collection/Connected%20Payments/Scotts%20Scrum%20Team", 
	"http://ca1tfsapp01:8080/tfs/ServerEPS%20Project%20Collection/Connected%20Payments/Scotts%20Scrum%20Team", "https://www.bing.com"];
	var length = locations.length;
	var i = 0;


	setInterval(function(){
		$("#frame").attr('src', locations[ ++i % length]);
	}, 8000);
});