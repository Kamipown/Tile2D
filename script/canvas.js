var Canvas =
{
	drawing: undefined,
	drawing_ctx: undefined,
	drawing_width: undefined,
	drawing_height: undefined,
	drawing_data: undefined,
	drawing_handler: undefined,

	tile_width: 40,
	tile_height: 40,
	pixels: undefined,

	cursor_x: 0,
	cursor_y: 0,

	mouse_l: false,
	mouse_r: false,

	init: function()
	{
		var tw = parseInt(localStorage.getItem("tile_width"));
		var th = parseInt(localStorage.getItem("tile_height"));
		
		if (tw)
			this.tile_width = tw;
		if (th)
			this.tile_height = th;

		this.drawing = document.getElementById("main_canvas");
		this.drawing_ctx = this.drawing.getContext("2d");
		this.drawing_width = this.tile_width * Project_View.zoom_value * Project_View.tiles_count;
		this.drawing_height = this.tile_height * Project_View.zoom_value * Project_View.tiles_count;
		this.drawing_data = this.drawing_ctx.getImageData(0, 0, this.drawing_width, this.drawing_height);
		this.drawing_handler = document.getElementById("canvas_handler");

		this.update_handler()
		this.update_drawing_size();
		this.update_drawing_position();

		this.init_pixels();

		this.handle_events();
	},

	update_handler: function()
	{
		this.drawing_handler.style.width = window.innerWidth - 512 + "px";
		this.drawing_handler.style.height = window.innerHeight + "px";
	},

	update_drawing_size: function()
	{
		var w = this.tile_width * Project_View.zoom_value * Project_View.tiles_count;
		var h = this.tile_height * Project_View.zoom_value * Project_View.tiles_count;
		this.drawing.style.width = w + "px";
		this.drawing.width = this.drawing_width = w;
		this.drawing.style.height = h + "px";
		this.drawing.height = this.drawing_height = h;
		this.drawing_data = this.drawing_ctx.getImageData(0, 0, this.drawing_width, this.drawing_height);
	},

	update_drawing_position: function()
	{
		main_canvas.style.left = (this.drawing_handler.clientWidth / 2) - (this.drawing.clientWidth / 2) + "px";
		main_canvas.style.top = (this.drawing_handler.clientHeight / 2) - (this.drawing.clientHeight / 2) + "px";
	},

	handle_events: function()
	{
		this.drawing.addEventListener('mousemove', this.event_mousemove);
		this.drawing.addEventListener('mousedown', this.event_mousedown);
		this.drawing.addEventListener('mouseup', this.event_mouseup);
	},

	event_mousemove: function(e)
	{
		Canvas.cursor_x = Math.floor((e.clientX - Canvas.drawing.offsetLeft - 256) / Project_View.zoom_value) % Canvas.tile_width;
		Canvas.cursor_y = Math.floor((e.clientY - Canvas.drawing.offsetTop) / Project_View.zoom_value) % Canvas.tile_height;

		Ui.x_info.innerHTML = Canvas.cursor_x;
		Ui.y_info.innerHTML = Canvas.cursor_y;

		if (Canvas.mouse_l == true)
			Canvas.event_click();
		if (Canvas.mouse_r == true)
			Canvas.event_click();
	},

	event_mousedown: function(e)
	{
		if (e.which == 1)
		{
			Canvas.mouse_l = true;
			Canvas.event_click();
		}
		if (e.which == 3)
		{
			Canvas.mouse_l = true;
			Canvas.event_click();
		}
	},

	event_mouseup: function(e)
	{
		if (e.which == 1)
			Canvas.mouse_l = false;
		if (e.which == 3)
			Canvas.mouse_l = false;
	},

	event_click: function()
	{
		Canvas.draw_pixel();
	},

	init_pixels: function()
	{
		var x = 0;
		var y = 0;
		Canvas.pixels = [];
		while (x < Canvas.tile_width)
		{
			Canvas.pixels[x] = [];
			while (y < Canvas.tile_height)
			{
				Canvas.pixels[x][y] =
				{
					r:0,
					g:0,
					b:0,
					a:0
				}
				++y;
			}
			y = 0;
			++x;
		}
	},

	draw_pixel: function()
	{
		var x = Canvas.cursor_x;
		var y = Canvas.cursor_y;

		Canvas.pixels[x][y].r = Palette.selected_colors_rgb[0];
		Canvas.pixels[x][y].g = Palette.selected_colors_rgb[1];
		Canvas.pixels[x][y].b = Palette.selected_colors_rgb[2];

		var i = 0;
		var j = 0;
		while (j < Project_View.tiles_count)
		{
			while (i < Project_View.tiles_count)
			{
				this.draw_zoomed_pixel(x, y, i, j);
				++i;
			}
			i = 0;
			++j;
		}
		console.log(Canvas.tile_width);
		console.log(Canvas.tile_height);
		Canvas.drawing_ctx.putImageData(Canvas.drawing_data, 0, 0);
	},

	draw_zoomed_pixel: function(x, y, i, j)
	{
		x *= Project_View.zoom_value;
		y *= Project_View.zoom_value;
		var max_x = x + Project_View.zoom_value;
		var max_y = y + Project_View.zoom_value;

		while (y < max_y)
		{
			while (x < max_x)
			{
				this.draw_pixel_to_data(x + (i * Canvas.tile_width * Project_View.zoom_value), y + (j * Canvas.tile_width * Project_View.zoom_value));
				++x;
			}
			x -= Project_View.zoom_value;
			++y;
		}
	},

	draw_pixel_to_data: function(x, y)
	{
		var i = ((x + (y * Canvas.drawing_width)) * 4);

		Canvas.drawing_data.data[i + 0] = Palette.selected_colors_rgb[0];
		Canvas.drawing_data.data[i + 1] = Palette.selected_colors_rgb[1];
		Canvas.drawing_data.data[i + 2] = Palette.selected_colors_rgb[2];
		Canvas.drawing_data.data[i + 3] = 255;
	}
}

window.onresize = function()
{
	Canvas.update_handler();
	Canvas.update_drawing_position();
}
