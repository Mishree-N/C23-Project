//variables and constants
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1, box2, box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	//load images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}


function setup() {
	createCanvas(800, 700);

	//position rectangle's control to the center/middle
	rectMode(CENTER);
	
	//create sprite for the package body
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//create helicopter sprite and add it's image
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//create ground sprite for ground body
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//create engine and world
	engine = Engine.create();
	world = engine.world;

	//create package body
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution : 0, isStatic:true});
	World.add(world, packageBody);
	

	//create ground body
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//create drop box 1, 2 and 3
	box1 =new Box(400,650,200,20);
	box2=new Box(290,610,20,100);
	box3=new Box(510,610,20,100);

	//run engine
	Engine.run(engine);
  
}


function draw() {

	background(0);

	//position rectangle's control to the center/middle
	rectMode(CENTER);

	//assign x and y position of body to sprite to be able to display the body
	packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y; 

	//show sprites
	drawSprites();

	//show box1, box2 and box3
	box1.display();
	box2.display();
	box3.display();

}



function keyPressed() {
	//when down arrow key is pressed,
	if (keyCode === DOWN_ARROW) {
		//set packageBody's static to false, giving it gravity
		Matter.Body.setStatic(packageBody, false);
		//set packageBody's restitution to 0.5, to make it bounce accordingly
		packageBody.restitution=0.5;
	}
}



