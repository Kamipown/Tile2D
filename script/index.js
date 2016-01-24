var background_canvas = document.getElementById("background_canvas");
var context = background_canvas.getContext('2d');

var size_span = document.getElementById("size_span");

function set_canvas_size()
{
	var w = window.innerWidth;
	var h = window.innerHeight;
	background_canvas.width = w;
	background_canvas.height = h;
	draw_canvas_grid(w, h, parseInt(size_span.innerHTML));
}

function draw_canvas_grid(w, h, val)
{
	context.clearRect(0, 0, background_canvas.width, background_canvas.height)
	var x = val;
	var y = val;
	context.strokeStyle = '#dddddd';
	context.lineWidth = 1;
	while (x < w)
	{
		context.beginPath();
		context.moveTo(x, 0);
		context.lineTo(x, h);
		context.stroke();
		x += val;
	}
	while (y < h)
	{
		context.beginPath();
		context.moveTo(0, y);
		context.lineTo(w, y);
		context.stroke();
		y += val;
	}
}

function update_slide(slider)
{
	var val = slider.value
	size_span.innerHTML = val;
	draw_canvas_grid(background_canvas.width, background_canvas.height, parseInt(val));
}

function save_size()
{
	localStorage.setItem("tile_size", size_span.innerHTML);
}