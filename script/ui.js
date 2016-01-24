function show_hide(elem)
{
	if (elem.innerHTML == "-")
	{
		elem.innerHTML = "+";
		elem.parentNode.parentNode.style.height = "32px";
	}
	else if (elem.innerHTML == "+")
	{
		elem.innerHTML = "-";
		elem.parentNode.parentNode.style.height = "auto";
	}
}