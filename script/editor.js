function Editor()
{

}

Editor.protorype.init = function()
{
	
}

var editor = new Editor;
function load_size()
{
	var ts = localStorage.getItem("tile_size");
	if (ts)
		return (ts);
	else
		return (40);
}