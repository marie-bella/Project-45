var ground;
var bella;
var animal, animalGroup;
var energy=20;
var victoria,victoriaGroup;
var edges;

function setup() {
  createCanvas(800,400);

  edges = createEdgeSprites();
  console.log(edges);
  ground = createSprite(400,380,800,20);
  ground.shapeColor = "brown";


  bella = createSprite(50,300,30,30);
  bella.shapeColor = "purple";

  animalGroup = new Group();
  
}

function draw() {
  background(0); 
  //console.log(bella.y);
  text("Energy:"+energy,20,20);
  
  
  if(keyDown("up") && bella.y >=354){
    bella.velocityY = -16;
  }


  if(keyDown("down") && bella.y <=354){
    bella.velocityY = 2;
  }


  if(bella.isTouching(animalGroup)){
    animalGroup.destroyEach();

    if(energy<50){
      energy= energy +5;
    }

  }

  bella.velocityY = bella.velocityY +0.5;
  
  bella.collide(ground);
  spawnAnimals();
  spawnVictoria();
  drawSprites();
}

function spawnAnimals(){
  if(frameCount% 300 == 0){
    animal = createSprite(800,200,20,20);
    animal.shapeColor ="yellow";
    animal.velocityX = -3;
    animal.y = Math.round(random(100,300));

    animal.lifetime =300;

    animalGroup.add(animal);
  }
}


function spawnVictoria(){
  if(frameCount% 200==0){
    victoria= createSprite(800,200,20,20);
    victoria.y = Math.round(random(100,350));
    victoria.velocityX =-2;
    victoria.velocityY = -5;
    
    victoria.bounceOff(ground);
    victoria.bounceOff(edges[1]);
    victoria.bounceOff(edges[2]);
    victoria.bounceOff(edges[3]);
    victoria.shapeColor = "green";



  }
}