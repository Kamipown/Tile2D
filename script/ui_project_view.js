var zoom_value = 3;
var tiles_count = 3;

function set_zoom_value(val)
{
	var span_zoom_value = document.getElementById("span_zoom_value");
	if (val == -1 && zoom_value > 1)
		span_zoom_value.innerHTML = --zoom_value;
	else if (val == 1 && zoom_value < 20)
		span_zoom_value.innerHTML = ++zoom_value;
	update_canvas_size();
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
	update_canvas_size();
	update_main_canvas_position();
}

function set_background_project(color)
{
	document.body.style.background = color;
	document.getElementById("preview_canvas").style.background = color;
}
