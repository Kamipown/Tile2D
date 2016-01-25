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

var canvas_handler = document.getElementById("canvas_handler");

function init_canvas()
{
	var w = window.innerWidth;
	var h = window.innerHeight;
	var canvas_handler_w = canvas_handler.clientWidth;
	var canvas_handler_h = canvas_handler.clientHeight;

	canvas_handler.style.left = (w / 2) - (canvas_handler_w / 2) + "px";
	canvas_handler.style.top = (h / 2) - (canvas_handler_h / 2) + "px";
//	var left_pos = 
//	canvas_handler.
}