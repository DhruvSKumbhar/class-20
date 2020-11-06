var movingRect;
var fixedRect;

function setup() 
{
  createCanvas(400,400);
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";
}

function draw() 
{
  background("black"); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&

    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 )
    {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
    }
    else 
    {
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
    }

  drawSprites();
}