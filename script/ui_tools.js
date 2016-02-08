function Tools()
{
	this.active_tool = "pen";

	this.pen_size = 1;
	this.pen_opacity = 100;

	this.pipette_size = 1;

	this.eraser_size = 1;
	this.eraser_opacity = 100;

	this.bucket_tolerance = 0;

	this.swaper_tolerance = 0;

	this.lighten_size = 1;
	this.lighten_power = 10;

	this.darken_size = 1;
	this.darken_power = 10;

	this.stroke_width = 1;
	this.stroke_opacity = 100;

	this.square_width = 1;
	this.square_opacity = 100;

	this.circle_width = 1;
	this.circle_opacity = 100;
}

Tools.prototype.init = function()
{
	this.show_tool_option();
}

Tools.prototype.select_tool = function(elem, tool)
{
	document.getElementById("selected_tool").id = "";
	elem.id = "selected_tool";
	this.active_tool = tool;
	this.show_tool_option();
}

Tools.prototype.show_tool_option = function()
{
	var tools_option = document.getElementsByClassName("tool");
	var i = 0;
	while (i < tools_option.length)
	{
		tools_option[i].style.display = "none";
		++i;
	}
	document.getElementById("tool_option_" + this.active_tool).style.display = "block";
}

Tools.prototype.update_pen_size = function(size)
{
	document.getElementById("pen_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("pen_size_span").innerHTML += "s";
	this.pen_size = parseInt(size);
}

Tools.prototype.update_pen_opacity = function(opacity)
{
	document.getElementById("pen_opacity_span").innerHTML = opacity + "%";
	this.pen_opacity = parseInt(opacity);
}

Tools.prototype.update_pipette_size = function(size)
{
	document.getElementById("pipette_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("pipette_size_span").innerHTML += "s";
	this.pipette_size = parseInt(size);
}

Tools.prototype.update_eraser_size = function(size)
{
	document.getElementById("eraser_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("eraser_size_span").innerHTML += "s";
	this.eraser_size = parseInt(size);
}

Tools.prototype.update_eraser_opacity = function(opacity)
{
	document.getElementById("eraser_opacity_span").innerHTML = opacity + "%";
	this.eraser_opacity = parseInt(opacity);
}

Tools.prototype.update_bucket_tolerance = function(tolerance)
{
	document.getElementById("bucket_tolerance_span").innerHTML = tolerance + "%";
	this.bucket_tolerance = parseInt(tolerance);
}

Tools.prototype.update_swaper_tolerance = function(tolerance)
{
	document.getElementById("swaper_tolerance_span").innerHTML = tolerance + "%";
	this.swaper_tolerance = parseInt(tolerance);
}

Tools.prototype.update_lighten_size = function(size)
{
	document.getElementById("lighten_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("lighten_size_span").innerHTML += "s";
	this.lighten_size = parseInt(size);
}

Tools.prototype.update_lighten_power = function(power)
{
	document.getElementById("lighten_power_span").innerHTML = power + "%";
	this.lighten_power = parseInt(power);
}

Tools.prototype.update_darken_size = function(size)
{
	document.getElementById("darken_size_span").innerHTML = size + " pixel";
	if (size > 1)
		document.getElementById("darken_size_span").innerHTML += "s";
	this.darken_size = parseInt(size);
}

Tools.prototype.update_darken_power = function(power)
{
	document.getElementById("darken_power_span").innerHTML = power + "%";
	this.darken_power = parseInt(power);
}

Tools.prototype.update_stroke_width = function(width)
{
	document.getElementById("stroke_width_span").innerHTML = width + " pixel";
	if (width > 1)
		document.getElementById("stroke_width_span").innerHTML += "s";
	this.stroke_width = parseInt(width);
}

Tools.prototype.update_stroke_opacity = function(opacity)
{
	document.getElementById("stroke_opacity_span").innerHTML = opacity + "%";
	this.stroke_opacity = parseInt(opacity);
}

Tools.prototype.update_square_width = function(width)
{
	document.getElementById("square_width_span").innerHTML = width + " pixel";
	if (width > 1)
		document.getElementById("square_width_span").innerHTML += "s";
	this.square_width = parseInt(width);
}

Tools.prototype.update_square_opacity = function(opacity)
{
	document.getElementById("square_opacity_span").innerHTML = opacity + "%";
	this.square_opacity = parseInt(opacity);
}

Tools.prototype.update_circle_width = function(width)
{
	document.getElementById("circle_width_span").innerHTML = width + " pixel";
	if (width > 1)
		document.getElementById("circle_width_span").innerHTML += "s";
	this.circle_width = parseInt(width);
}

Tools.prototype.update_circle_opacity = function(opacity)
{
	document.getElementById("circle_opacity_span").innerHTML = opacity + "%";
	this.circle_opacity = parseInt(opacity);
}
tools = new Tools;
