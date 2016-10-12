$(function() {
	var tester = document.getElementsByTagName('h2');
	for (var i = 0; i < tester.length; i++)
	{
		tester[i].style.fontSize = '200px';
	}	
	window.alert(tester[0].classList);
})