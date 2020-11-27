var tower,towerImag;
var ghost,ghostAnimation;
var door,doorImage;
var climber,climberImage;
var doorGroup;
var climberGroup;
var gameState="play";   
   
   
   
function preload(){
towerImage=loadImage("tower.png");
ghostAnimation=loadAnimation("ghost-standing.png","ghost-jumping.png");
doorImage=loadImage("door.png");
climberImage=loadImage("climber.png");
}

function setup(){
createCanvas(400,400);
tower=createSprite(200,300,20,20);
tower.addImage(towerImage);
tower.scale=0.7;
tower.velocityY=1;
ghost=createSprite(200,300,20,20);
ghost.addAnimation("running",ghostAnimation);
ghost.scale=0.3;
doorGroup=createGroup();
climberGroup=createGroup();
}
function draw(){
if(gameState==="play"){









if(tower.y>400){


tower.y=tower.width/2;
}
if(keyDown("space")){
ghost.velocityY=-10;
}
ghost.velocityY=ghost.velocityY+0.8;
if(keyDown("RIGHT_ARROW")){
ghost.x=ghost.x+3;
}
if(keyDown("LEFT_ARROW")){
ghost.x=ghost.x-3;
}

spawndoor();
if(doorGroup.isTouching(ghost)||climberGroup.isTouching(ghost)){
gameState="end";


}
}
drawSprites();
if(gameState==="end"){
textSize(40);
fill("red");
stroke("black");
text("GAME OVER",100,200);
tower.velocityY=0;
doorGroup.destroyEach();
climberGroup.destroyEach();
ghost.destroy();
}
}

function spawndoor(){
if(frameCount%250===0){
door=createSprite(200,-50,20,20);
door.addImage(doorImage);
door.velocityY=1;
doorGroup.add(door);
climber=createSprite(200,10,20,20);
climber.addImage(climberImage);
climber.velocityY=1;
climberGroup.add(climber);
door.x=Math.round(random(50,350));
climber.x=door.x;
}

}

