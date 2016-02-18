var Ui =
{
	x_info: document.getElementById("bottom_div_x"),
	y_info: document.getElementById("bottom_div_y"),
	w_info: document.getElementById("bottom_div_w"),
	h_info: document.getElementById("bottom_div_h"),

	init: function()
	{
		var tw = parseInt(localStorage.getItem("tile_width"));
		var th = parseInt(localStorage.getItem("tile_height"));
		if (tw)
			this.w_info.innerHTML = tw;
		if (th)
			this.h_info.innerHTML = th;

		Project_View.init();
		Tools.init();
		Palette.init();
	},

	show_hide: function(elem)
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
	},

	update_x_info: function(val)
	{
		this.x_info.innerHTML = val;
	},

	update_y_info: function(val)
	{
		this.y_info.innerHTML = val;
	},

	update_w_info: function(val)
	{
		this.w_info.innerHTML = val;
	},

	update_h_info: function(val)
	{
		this.h_info.innerHTML = val;
	}
}
