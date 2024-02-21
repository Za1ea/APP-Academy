extends Node2D

@onready var tilemap_rect = get_parent().get_used_rect()
@onready var tilemap_cell_size = 16
@onready var color = Color(0.0, 0.0, 0.0)
@onready var offset = to_global(get_parent().map_to_local(Vector2i(4, 1)))-Vector2(8, 8)

func _ready():
	
	set_process(true)
	print(offset)
	print(Vector2(offset.x, offset.y))
	
	
func _process(delta):
	queue_redraw()
	
func _draw():
	for y in range(0, tilemap_rect.size.y + 1):
		# print(Vector2(offset.x, y * tilemap_cell_size + offset.y))
		draw_line(Vector2(offset.x, y * tilemap_cell_size + offset.y), Vector2(offset.x + tilemap_rect.size.x * tilemap_cell_size, y * tilemap_cell_size + offset.y), color, 2)
		
	for x in range(0, tilemap_rect.size.x + 1):
		# print(Vector2(offset.x + x * tilemap_cell_size, offset.y))
		draw_line(Vector2(offset.x + x * tilemap_cell_size, offset.y), Vector2(offset.x + x * tilemap_cell_size, tilemap_rect.size.y * tilemap_cell_size + offset.y), color, 2)
