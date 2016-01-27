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

var zoom_value = 1;
var tiles_count = 3;

function set_zoom_value(val)
{
	var span_zoom_value = document.getElementById("span_zoom_value");
	if (val == -1 && zoom_value > 1)
		span_zoom_value.innerHTML = --zoom_value;
	else if (val == 1 && zoom_value < 10)
		span_zoom_value.innerHTML = ++zoom_value;
	set_canvas_size();
	update_main_canvas_position();
}

function set_tiles_count(val)
{
	var span_tiles_count = document.getElementById("span_tiles_count");
	if (val == -2 && tiles_count > 1)
		tiles_count -= 2;
	else if (val == 2 && tiles_count < 15)
		tiles_count += 2;
	span_tiles_count.innerHTML = tiles_count + "x" + tiles_count;
	set_canvas_size();
	update_main_canvas_position();
}

function set_background_project(color)
{
	document.body.style.background = color;
	document.getElementById("preview_canvas").style.background = color;
}

/* Tools */

var active_tool = "pen";

var pen_size = 1;
var pen_opacity = 1;

var pipette_size = 1;

var eraser_size = 1;

var bucket_mode = 1;
var bucket_tolerance = 1;

var lighten_size = 1;
var lighten_mode = 1;
var lighten_opacity = 100;

var darken_size = 1;
var darken_mode = 1;
var darken_opacity = 100;

function show_tool_option()
{
	var tools_option = document.getElementsByClassName("tool");
	var i = 0;
	while (i < tools_option.length)
	{
		tools_option[i].style.display = "none";
		++i;
	}
	document.getElementById("tool_option_" + active_tool).style.display = "block";
}

function select_tool(elem, tool)
{
	document.getElementById("selected_tool").id = "";
	elem.id = "selected_tool";
	active_tool = tool;
	show_tool_option();
}

function update_pen_size(size)
{
	document.getElementById("pen_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("pen_size_span").innerHTML += "s";
	pen_size = parseInt(size);
}

function update_pen_opacity(opacity)
{
	document.getElementById("pen_opacity_span").innerHTML = opacity + "%";
	pen_opacity = parseInt(size);
}