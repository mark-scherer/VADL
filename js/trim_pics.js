/* resizes all .trimmed-pic images to fill window based upon aspect ratios */

$(function() {
	var windows = [];
	var images = [];
	var tooTall = [];
	var tooWide = [];
	var sameSize = [];

	/* select windows and images */
	windows = document.getElementsByClassName("trimmed-pic-container");
	images = document.getElementsByClassName("trimmed-pic");

	/* determine type for each window-image combo */
	for (var i = 0; i < windows.length; i++) 
	{
		var aWindow = windows[i].offsetWidth / windows[i].offsetHeight;
		var aImg = images[i].offsetWidth / images[i].offsetHeight;

		if (aWindow > aImg)
		{
			tooTall.push(images[i]);
		}
		if (aWindow < aImg)
		{
			tooWide.push(images[i]);
		}
		if (aWindow === aImg)
		{
			sameSize.push(images[i]);
		}
	}

	/* alter image properties */
	for (var i = 0; i < tooTall.length; i++)
	{
		tooTall[i].style.minHeight = "100%";
		tooTall[i].style.maxWidth = "100%";
	}
	
	for (var i = 0; i < tooWide.length; i++)
	{
		tooWide[i].style.minWidth = "100%";
		tooWide[i].style.maxHeight = "100%";
	}
	for (var i = 0; i < sameSize.length; i++)
	{
		sameSize[i].style.maxWidth = "100%";
		sameSize[i].style.maxHeight = "100%";
	}

}
)