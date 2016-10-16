/* resizes all .trimmed-pic images to fill window based upon aspect ratios */

$( onload = function() {
	var windows = [];
	var images = [];
	var tooTall = [];
	var tooWide = [];
	var sameSize = [];

	/* select windows and images */
	windows = document.getElementsByClassName("trimmed-pic-container");
	images = document.getElementsByClassName("trimmed-pic");

	console.log("Windows: " + windows.length + ", images: " + images.length);

	/* determine type for each window-image combo */
	for (var i = 0; i < windows.length; i++) 
	{
		var aWindow = windows[i].offsetWidth / windows[i].offsetHeight;
		var aImg = images[i].offsetWidth / images[i].offsetHeight;

		console.log("Img width: " + images[i].clientWidth + ", Img height: " + images[i].clientHeight + ", AR: " + aImg);

		if (aWindow > aImg)
		{
			tooTall.push(images[i]);
		}
		else if (aWindow < aImg)
		{
			tooWide.push(images[i]);
		}
		else
		{
			sameSize.push(images[i]);
		}
	}

	console.log("tooTall: " + tooTall.length + ", tooWide: " + tooWide.length + ", sameSize: " + sameSize.length);

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