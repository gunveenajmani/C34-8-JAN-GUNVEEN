//NAMESPACE: NICK NAMES TO MODULES

//physics- mechanics
const Engine = Matter.Engine;
//environment
const World = Matter.World;
//creatiing obj
const Bodies = Matter.Bodies;
//manipulating objects
const Body = Matter.Body;
//link/constraint
//const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bob;
//var bob2, bob3, bob4, bob5;
var rope;
//,rope2,rope3,rope4,rope5;
var boxes=[];
function setup() {
	createCanvas(800, 700);
	//your engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height-10, 800,20);
	for(j=50; j<=height-50;j=j+50){
		boxes.push(new Box(100,j))
	}
	for(j=50; j<=height-50;j=j+50){
		boxes.push(new Box(150,j))
	}
	for(j=50; j<=height-50;j=j+50){
		boxes.push(new Box(200,j))
	}

	stand1 = new Ground(700, 500, 40, 400);
	stand2 = new Ground(570,280,400,40);
	
	
	bob= new Bob(500, 400);
	rope = new Rope(bob.Body, stand2.Body);

	Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background("orange");
  fill("blue")
  ground.display();
  noFill();
  for(j=0; j<boxes.length;j=j+1){
	boxes[j].display();
}
fill("green")
stand1.display();
stand2.display();
fill("white")
bob.display();
fill("black");
rope.display();



  drawSprites();
 
}

//function keyPressed(){
//	if(keyCode===LEFT_ARROW){
//	Matter.Body.applyForce(bob1.Body, bob1.Body.position, {x:-100, y:-150});
//}
//}

function mouseDragged(){
	Matter.Body.setPosition(bob.Body, {x:mouseX, y:mouseY});
}