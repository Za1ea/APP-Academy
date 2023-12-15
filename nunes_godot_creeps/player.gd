extends Area2D

signal hit

@export var speed = 200 # How fast the player will move (pixels/sec)
var screen_size # Size of the game window

# Called when the node enters the scene tree for the first time.
func _ready():
	screen_size = get_viewport_rect().size
	hide() #hide player when game starts


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta): #delta = frame length - the amount of time that the previous frame took to complete
	var velocity = Vector2.ZERO # The player's movement vector.
	if Input.is_action_pressed("move_right"):
		velocity.x += 1
	if Input.is_action_pressed("move_left"):
		velocity.x -= 1
	if Input.is_action_pressed("move_down"):
		velocity.y += 1
	if Input.is_action_pressed("move_up"):
		velocity.y -= 1

	if velocity.length() > 0:
		velocity = velocity.normalized() * speed
		$AnimatedSprite2D.play() #$ is shorthand for get_node()
	else:
		$AnimatedSprite2D.stop()
	
	position += velocity * delta
	position = position.clamp(Vector2.ZERO, screen_size)
	
	if velocity.x != 0:
		$AnimatedSprite2D.animation = "walk"
		$AnimatedSprite2D.flip_v = false
		# See the note below about boolean assignment.
		$AnimatedSprite2D.flip_h = velocity.x < 0 #shorthand for if velocity.x<0 it's true else false
	elif velocity.y != 0:
		$AnimatedSprite2D.animation = "up"
		$AnimatedSprite2D.flip_v = velocity.y > 0


func _on_body_entered(body):
	hide() # Player disappears after being hit.
	hit.emit()
	#must disable collision so the hit signal isn't continually triggered
	$CollisionShape2D.set_deferred("disabled", true) #set_deferred waits to disable it until it's safe (so it doesn't disable in the middle of the collision)

func start(pos):
	position = pos
	show()
	$CollisionShape2D.disabled = false
