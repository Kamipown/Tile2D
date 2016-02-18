var Project_View =
{
	zoom_value: 10,
	tiles_count: 3,
	grid: false,
	shape: false,
	rules: false,

	init: function()
	{
		this.grid = document.getElementById("grid_checkbox").checked;
		this.shape = document.getElementById("shape_checkbox").checked;
		this.rules = document.getElementById("rules_checkbox").checked;
	},

	set_zoom_value: function(val)
	{
		var span_zoom_value = document.getElementById("span_zoom_value");
		if (val == -1 && this.zoom_value > 1)
			span_zoom_value.innerHTML = --this.zoom_value;
		else if (val == 1 && this.zoom_value < 20)
			span_zoom_value.innerHTML = ++this.zoom_value;

		Canvas.update_drawing_size();
		Canvas.update_drawing_position();
	},

	set_tiles_count: function(val)
	{
		var span_tiles_count = document.getElementById("span_tiles_count");
		if (val == -2 && this.tiles_count > 1)
			this.tiles_count -= 2;
		else if (val == 2 && this.tiles_count < 15)
			this.tiles_count += 2;
		span_tiles_count.innerHTML = this.tiles_count + "x" + this.tiles_count;

		Canvas.update_drawing_size();
		Canvas.update_drawing_position();
	},

	set_background_project: function(color)
	{
		document.body.style.background = color;
		document.getElementById("preview_canvas").style.background = color;
	},

	update_grid_checkbox: function(check)
	{
		this.grid = check;
	},

	update_shape_checkbox: function(check)
	{
		this.shape = check;
	},

	update_rules_checkbox: function(check)
	{
		this.rules = check;
	},
}
