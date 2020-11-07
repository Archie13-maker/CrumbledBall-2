
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	var canvas=createCanvas(1600,700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new ball(200,450,70);
	ground=new Ground(width/2,670,width,20);
	dustbin1=new Dustbin(1100,490);
	bin1=new bin(990,490,20,300);
	bin2=new bin(1200,490,20,300);

    Engine.run(engine);  
}
function draw() {
  background("grey");
  Engine.update(engine);
  ball1.display();
  ground.display();
  bin1.display();
  bin2.display();
  dustbin1.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.pos,{x:800, y:-1400});
	}
}



