var fixedRect, movingRect, a, b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a = createSprite(400, 300,30,30);
  a.shapeColor = "green";
  a.debug = true;

  b = createSprite(200, 200,30,30);
  b.shapeColor = "green";
  b.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  b.x=mouseX; 
  b.y=mouseY;
bounceOff(movingRect, fixedRect);

bounce(b, a)
if (isTouching(fixedRect, a)) {
  fixedRect.shapeColor="Blue";
  a.shapeColor="Blue";
}
else{
  fixedRect.shapeColor="Red";
  a.shapeColor="Red"; 
}
  drawSprites();
}
