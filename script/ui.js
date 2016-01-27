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

var zoom_value = 3;
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
var pen_opacity = 100;

var pipette_size = 1;

var eraser_size = 1;
var eraser_opacity = 100;

var bucket_tolerance = 0;

var swaper_tolerance = 0;

var lighten_size = 1;
var lighten_power = 10;

var darken_size = 1;
var darken_power = 10;

var stroke_width = 1;
var stroke_opacity = 100;

var square_width = 1;
var square_opacity = 100;

var circle_width = 1;
var circle_opacity = 100;

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
show_tool_option();

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
	pen_opacity = parseInt(opacity);
}

function update_pipette_size(size)
{
	document.getElementById("pipette_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("pipette_size_span").innerHTML += "s";
	pipette_size = parseInt(size);
}

function update_eraser_size(size)
{
	document.getElementById("eraser_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("eraser_size_span").innerHTML += "s";
	eraser_size = parseInt(size);
}

function update_eraser_opacity(opacity)
{
	document.getElementById("eraser_opacity_span").innerHTML = opacity + "%";
	eraser_opacity = parseInt(opacity);
}

function update_bucket_tolerance(tolerance)
{
	document.getElementById("bucket_tolerance_span").innerHTML = tolerance + "%";
	bucket_tolerance = parseInt(tolerance);
}

function update_swaper_tolerance(tolerance)
{
	document.getElementById("swaper_tolerance_span").innerHTML = tolerance + "%";
	swaper_tolerance = parseInt(tolerance);
}

function update_lighten_size(size)
{
	document.getElementById("lighten_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("lighten_size_span").innerHTML += "s";
	lighten_size = parseInt(size);
}

function update_lighten_power(power)
{
	document.getElementById("lighten_power_span").innerHTML = power + "%";
	lighten_power = parseInt(power);
}

function update_darken_size(size)
{
	document.getElementById("darken_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("darken_size_span").innerHTML += "s";
	darken_size = parseInt(size);
}

function update_darken_power(power)
{
	document.getElementById("darken_power_span").innerHTML = power + "%";
	darken_power = parseInt(power);
}

function update_stroke_width(width)
{
	document.getElementById("stroke_width_span").innerHTML = width + " pixel";
	if (width > 1)
		document.getElementById("stroke_width_span").innerHTML += "s";
	stroke_width = parseInt(width);
}

function update_stroke_opacity(opacity)
{
	document.getElementById("stroke_opacity_span").innerHTML = opacity + "%";
	stroke_opacity = parseInt(opacity);
}

function update_square_width(width)
{
	document.getElementById("square_width_span").innerHTML = width + " pixel";
	if (width > 1)
		document.getElementById("square_width_span").innerHTML += "s";
	square_width = parseInt(width);
}

function update_square_opacity(opacity)
{
	document.getElementById("square_opacity_span").innerHTML = opacity + "%";
	square_opacity = parseInt(opacity);
}

function update_circle_width(width)
{
	document.getElementById("circle_width_span").innerHTML = width + " pixel";
	if (width > 1)
		document.getElementById("circle_width_span").innerHTML += "s";
	circle_width = parseInt(width);
}

function update_circle_opacity(opacity)
{
	document.getElementById("circle_opacity_span").innerHTML = opacity + "%";
	circle_opacity = parseInt(opacity);
}
