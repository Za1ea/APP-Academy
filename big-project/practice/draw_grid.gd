extends Node2D

var tilemap_rect = get_parent().get_used_rect()
var tilemap_cell_size = get_parent().cell_size
var color = Color(0.0, 0.0, 0.0)
# Called when the node enters the scene tree for the first time.
func _ready():
	position = tilemap_rect.position * tilemap_cell_size
	set_process(true)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	update()
	
func _draw():
	for y in range(0, tilemap_rect.size.y):
		draw_line(Vector2(0, y * tilemap_cell_size.y), Vector2(tilemap_rect.size.x * tilemap_cell_size.x, y * tilemap_cell_size.y), color)
	for x in range(0, tilemap_rect.size.x):
		draw_line(Vector2(x * tilemap_cell_size.x, 0), Vector2(x * tilemap_rect.size.x, tilemap_cell_size.y * tilemap_cell_size.y), color)
