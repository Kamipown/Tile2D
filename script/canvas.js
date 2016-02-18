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
		this.cursor_x = Math.floor((e.clientX - Canvas.drawing.offsetLeft - 256) / Project_View.zoom_value) % Canvas.tile_width;
		this.cursor_y = Math.floor((e.clientY - Canvas.drawing.offsetTop) / Project_View.zoom_value) % Canvas.tile_height;

		Ui.x_info.innerHTML = this.cursor_x;
		Ui.y_info.innerHTML = this.cursor_y;

		if (this.mouse_l == true)
			Canvas.event_click();
		if (this.mouse_r == true)
			Canvas.event_click();
	},

	event_mousedown: function(e)
	{
		if (e.which == 1)
		{
			this.mouse_l = true;
			Canvas.event_click();
		}
		if (e.which == 3)
		{
			this.mouse_l = true;
			Canvas.event_click();
		}
	},

	event_mouseup: function(e)
	{
		if (e.which == 1)
			this.mouse_l = false;
		if (e.which == 3)
			this.mouse_l = false;
	},

	event_click: function()
	{

	},

	init_pixels: function()
	{
		var x = 0;
		var y = 0;
		this.pixels = [];
		while (x < this.tile_width)
		{
			this.pixels[x] = [];
			while (y < this.tile_height)
			{
				this.pixels[x][y] =
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
		this.pixels[3][0].r = 28;
	}
}

window.onresize = function()
{
	Canvas.update_handler();
	Canvas.update_drawing_position();
}

// function canvas_click()
// {
// 	put_pixel(canvas_cursor_x, canvas_cursor_y, 255, 0, 0, 255);
// 	canvas_context.putImageData(canvas_data, 0, 0);
// }

// var l_click = false;
// document.onmousedown = function()
// {
// 	l_click = true;
// }
// document.onmouseup = function()
// {
// 	l_click = false;
// }

// function put_pixel(x, y, r, g, b, a)
// {
// 	var index = ((x + (y * canvas_width)) * 4);

// 	canvas_data.data[index + 0] = r;
// 	canvas_data.data[index + 1] = g;
// 	canvas_data.data[index + 2] = b;
// 	canvas_data.data[index + 3] = a;
// }

/*
var canvas = document.getElementById("main_canvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var context = canvas.getContext("2d");
var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);

function put_pixel(x, y, r, g, b, a)
{
	var index = ((x + (y * canvasWidth)) * 4);

	canvasData.data[index + 0] = r;
	canvasData.data[index + 1] = g;
	canvasData.data[index + 2] = b;
	canvasData.data[index + 3] = a;
}

function update_canvas()
{
	context.putImageData(canvasData, 0, 0);
}

put_pixel(5, 5, 255, 0, 0, 255);
put_pixel(5, 6, 255, 0, 0, 255);
put_pixel(5, 7, 255, 0, 0, 255);
update_canvas();

var img    = canvas.toDataURL("image/png");
document.write('<img src="'+img+'"/>');
window.open("file:///C:/Users/Kamipown/Desktop/Tile2d/index.html", "Window Title", "width=500, height=450");
*/

