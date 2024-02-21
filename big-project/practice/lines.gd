extends Control

var show_circle = false

# Called when the node enters the scene tree for the first time.
func _ready():
	set_mouse_filter(Control.MOUSE_FILTER_PASS)


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	'''if MOUSE_BUTTON_LEFT:
		show_circle = not show_circle
		print("circle")
		queue_redraw()'''

func _gui_input(event):
	print("event")
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
			print("I've been clicked D:")

func _draw():
	if (show_circle):
		print("circle")
		draw_circle(Vector2(75 / 2, 75 / 2), 15, Color.WHITE)
