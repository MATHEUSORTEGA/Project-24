const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rock, iron, Ellipse;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rock = new stone(100,200,200,200)
iron = new Iron(400,300,200,200)
Ellipse = new Rubber(500,100,100)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rock.display();
    iron.display();
    Ellipse.display();

    
 
}