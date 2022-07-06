
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cannon1, cannon_Base;
var cannon_ball;
var Mountain;
var balls = [];
var box1;

let engine, world;

function preload(){
  Mountain = loadImage("Mountain.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;
  cannon1 = new Cannon(width/8+25,height-85,150,100,angle)
  ground = new Ground(width/2,height-10,width,20)  
  box1 = new Box(width/2 + 20,100,100,70);
  rectMode(CENTER);
}

function draw() 
{
  background("#65cbe8");
  image(Mountain,400,200);
  ground.show();
  box1.display();
  for(var i = 0; i < balls.length; i++){
    showcannonballs(balls[i],i);
  }
  cannon1.display();
  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var cannonball = new CannonBall(cannon1.x, cannon1.y);
    cannonball.trajectory = [];
    Matter.Body.setAngle(cannonball.body, cannon1.angle);
    balls.push(cannonball);
  }
}

function showcannonballs(ball,index){
  if(ball){
    ball.display();
    ball.animate();
    if(ball.body.position.x >= width || ball.body.position.y >= height - 50){
      if(!ball.isSink){
        ball.remove(index);
      }
    }
  }
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

