extends TileMap


# Called when the node enters the scene tree for the first time.
func _ready():
	var length = 6*tile_set.tile_size.y
	var width = 6*tile_set.tile_size.x
	var tilemap_dimensions = Vector2(width, length)
	
	var t = Transform2D()
	# Translation
	t.origin = (Vector2(get_viewport().size / 2)) - (tilemap_dimensions / 2)
	
	transform = t


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
