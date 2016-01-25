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

/* Project View */
function set_zoom_value(val)
{
	var span_zoom_value = document.getElementById("span_zoom_value");
	var span_zoom_value_int = parseInt(span_zoom_value.innerHTML)
	if (val == -1 && span_zoom_value_int > 1)
		span_zoom_value.innerHTML = span_zoom_value_int - 1;
	else if (val == 1 && span_zoom_value_int < 10)
		span_zoom_value.innerHTML = span_zoom_value_int + 1;
}

function set_background_project(color)
{
	document.body.style.background = color;
	document.getElementById("preview_canvas").style.background = color;
}