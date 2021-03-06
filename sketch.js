const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object;
function setup() {
  createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: true
	}
	object = Bodies.circle(200, 100, 25);
	World.add(world, object);
console.log(object.position.x);
console.log(object.position.y);

ground = Bodies.rectangle(200,390,400,20 , options);
World.add(world,ground)
}

function draw() {
  background(0);
Engine.update(engine);
ellipseMode(CENTER); 
  ellipse(object.position.x, object.position.y, 50, 50);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
}
