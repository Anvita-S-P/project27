
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob;
var roof;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(300,490,600,10);
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0);
	rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0);
	rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0);
	rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0);
	bob=new Bob(150,50,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  drawSprites();

  roof.display();
  bob.display();


  
  
 
}

function keyPressed(){
	if( keyCode===UP_ARROW){
      

		Matter.Body.applyForce(bob.body,bob.body.position,{x:10,y:-10});



	}
}


