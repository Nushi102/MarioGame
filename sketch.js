function preload(){
wasdImg=loadImage("WASD-Image.png");
arrowsImg=loadImage("ARROW-Keys.png");
bgImg=loadImage("Bg.png");
}

function setup() {
  createCanvas(windowWidth,windowWidth);
  bg=createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(bgImg)
  bg.scale=0.38
  wasd=createSprite(width/2-500,height/2-300)
  wasd.addImage(wasdImg)
  arrows=createSprite(width/2+500,height/2-300)
  arrows.addImage(arrowsImg)
  arrows.scale=0.3
}

function draw() {
  background(255,255,255);  
  drawSprites();
}