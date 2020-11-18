const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var world, engine;
var drops = []
var maxDrops = 100;

function preload() {
}

function setup() {
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;
    umbrella = new Umbrella(200,580);
    ground = new Ground(200,780,400,10);
}

function draw() {
    background("black");
    Engine.update(engine);
    if (frameCount % 10 === 0) {
        drops.push(new Drop(random(0, 400), random(0, 400), 10));
    }
    for (i = 0; i < drops.length; i++) {
        drops[i].display();
    }
    umbrella.display();
    ground.display();
}

