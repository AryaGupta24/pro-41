const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rand;

var Drops=[]
var maxDrops=100;
function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400, 600);
    Umbrella = new umbrella(200,500);

    for(var i= 0;i<maxDrops;i++){
        Drops.push(new drop(random(0,500),random(0,500)));
    }
}

function draw(){
    Engine.update(engine);
    background("black");
    Umbrella.display();

    for(var i= 0;i<maxDrops;i++){
        Drops[i].display();
        Drops[i].update();
    }
}   

