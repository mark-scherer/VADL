/* resizes all .trimmed-pic images to fill window based upon aspect ratios */

$(function() {
	var trimmedPicsParents = [];
	var tooTall = [];
	var tooWide = [];

	/* select all .trimmed-pic images */
	/* first select all divs */
	var divs = document.getElementsByTagName('div');
	/* select all divs with child images of class .trimmed-pic */
	for (var i = 0; i < divs.length; i++)
	{
		if (divs[i].childNodes[0].className === "trimmed-pic")
		{
			trimmedPicsParents.push(divs[i]);
		}
	}

	window.alert(trimmedParentPics.length);

	/* sort into too-tall and too-wide */
	for (var i = 0; i < trimmedPicsParents.length; i++)
	{
		/* find window and image aspect ratio */
		var windowAspect = i.clientWidth / i.clientHeight;
		var imgAspect = i.childNodes[0].clientWidth / i.childNodes[0].clientHeight;
		/* add to correct list */
		if (imgAspect > windowAspect)
		{
			tooTall.push(i.childNodes[0]);
		}
		if (imgAspect < windowAspect)
		{
			tooWide.push(i.childNodes[0]);
		}
	}

	/* resize appropriately */
	for (var i = 0; i < tooTall.length; i++)
	{
		tooTall[i].style.maxWidth = '100%';
		tooTall[i].style.minHeight = '100%';
	}
	for (var i = 0; i < tooWide.length; i++)
	{
		tooWide[i].style.maxHeight = '100%';
		tooWide[i].style.minWidth = '100%';
	}
}
)