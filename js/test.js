$(function() {
	var tester = document.getElementsByTagName('div');
	for (var i = 0; i < tester.length; i++)
	{
		console.log(tester[i].childNodes.length);
	}	
})