function Palette()
{
	this.selected_colors = ["#000000", "#ffffff"];

	this.left_color_preview = document.getElementById("left_color_preview");
	this.right_color_preview = document.getElementById("right_color_preview");
	this.left_color_span = document.getElementById("left_color_span");
	this.right_color_span = document.getElementById("right_color_span");
}

Palette.prototype.init = function()
{
	this.left_color_preview.style.background = this.selected_colors[0];
	this.left_color_span.innerHTML = this.selected_colors[0];

	this.right_color_preview.style.background = this.selected_colors[1];
	this.right_color_span.innerHTML = this.selected_colors[1];

	this.add_color("#000000");
	this.add_color("#222222");
	this.add_color("#444444");
	this.add_color("#666666");
	this.add_color("#888888");
	this.add_color("#aaaaaa");
	this.add_color("#cccccc");
	this.add_color("#ffffff");

	this.add_color("#cc5555");
	this.add_color("#5555cc");
	this.add_color("#55cc55");
	this.add_color("#55cccc");
	this.add_color("#cccc55");
	this.add_color("#cc55cc");
	this.add_color("#5c5c5c");
	this.add_color("#c5c5c5");
}

Palette.prototype.set_left_color = function(color)
{
	this.selected_colors[0] = color;
	this.left_color_preview.style.background = this.selected_colors[0];
	this.left_color_span.innerHTML = this.selected_colors[0];

	this.add_color(color);
}

Palette.prototype.set_right_color = function(color)
{
	this.selected_colors[1] = color;
	this.right_color_preview.style.background = this.selected_colors[1];
	this.right_color_span.innerHTML = this.selected_colors[1];

	this.add_color(color);
}

Palette.prototype.add_color = function(color)
{
	var new_color = document.createElement("span");
	new_color.className = "color";
	new_color.style.background = color;
	new_color.onclick = function()
	{
		palette.selected_colors[0] = color;
		palette.left_color_preview.style.background = palette.selected_colors[0];
		palette.left_color_span.innerHTML = palette.selected_colors[0];
	}
	new_color.oncontextmenu = function()
	{
		palette.selected_colors[1] = color;
		palette.right_color_preview.style.background = palette.selected_colors[1];
		palette.right_color_span.innerHTML = palette.selected_colors[1];
		return (false);
	}
	//new_color.ondblclick = remove_color;
	document.getElementById("palette").appendChild(new_color);
}
palette = new Palette;
