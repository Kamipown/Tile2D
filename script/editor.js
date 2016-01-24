function load_size()
{
	var ts = localStorage.getItem("tile_size");
	if (ts)
		return (ts);
	else
		return (40);
}