//declaring variables
var box;
var edges;
var tintin;

//to load animations, images and sounds
function preload(){
  tintin=loadImage("tintin.png")
}

//runs at the start of the code, is use to create stuff
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200, 50, 50)
  box.shapeColor="red"
  box.addImage("tintin",tintin)
  box.scale=0.5
  
  edges=createEdgeSprites();
}


function draw() 
{
  background("white");

  if(keyDown("left")){
    box.x -= 4;
    background("magenta")
  }

  if(keyDown("right")){
    box.x += 4;
    background("orchid")
  }

  if(keyDown("down")){
    box.y += 4;
    background("purple")
  }

  if(keyDown("up")){
    box.y -= 4;
    background("pink")
  }
      

  box.collide(edges)
  
  
  
  drawSprites();
}




