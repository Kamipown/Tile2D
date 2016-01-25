var tile_width = 40;
var tile_height = 40;
var main_canvas = document.getElementById("main_canvas");

function update_main_canvas_position()
{
	var w = window.innerWidth;
	var h = window.innerHeight;
	var main_canvas_w = main_canvas.clientWidth;
	var main_canvas_h = main_canvas.clientHeight;

	main_canvas.style.left = (w / 2) - (main_canvas_w / 2) + "px";
	main_canvas.style.top = (h / 2) - (main_canvas_h / 2) + "px";
}

function set_canvas_size()
{
	var w = tile_width * tiles_count * zoom_value;
	var h = tile_height * tiles_count * zoom_value;
	main_canvas.style.width = w + "px";
	main_canvas.width = w;
	main_canvas.style.height = h + "px";
	main_canvas.height = h;
}

function init_canvas()
{
	var tw = parseInt(localStorage.getItem("tile_width"));
	var th = parseInt(localStorage.getItem("tile_height"));
	if (tw)
		tile_width = tw;
	if (th)
		tile_height = th;
	set_canvas_size();
	update_main_canvas_position();
}

window.onresize = update_main_canvas_position;

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

