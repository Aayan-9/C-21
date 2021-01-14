var fixedRect, movingRect;
var obj1,obje2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(400,100,50,50);
  obj1.shapeColor = "green";
  obj1.velocityY = 3;
  obje2 = createSprite(400,600,50,50);
  obje2.shapeColor = "red";
  obje2.velocityY = -3;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
    bounceOff(obj1,obje2);
    if(isTouching(movingRect,fixedRect))
   {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}

