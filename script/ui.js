bottom_div_x = document.getElementById("bottom_div_x");
bottom_div_y = document.getElementById("bottom_div_y");
bottom_div_w = document.getElementById("bottom_div_w");
bottom_div_h = document.getElementById("bottom_div_h");

function init_ui()
{
	var tw = parseInt(localStorage.getItem("tile_width"));
	var th = parseInt(localStorage.getItem("tile_height"));
	if (tw)
		bottom_div_w.innerHTML = tw;
	if (th)
		bottom_div_h.innerHTML = th;

	project_view.init();
	tools.init();
	palette.init();
}

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
