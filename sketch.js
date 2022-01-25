var path ,pathImg;
function preload(){
  //pre-load images//
pathImg=loadImage("path.png");
}

function setup(){
  createCanvas(600,200);
  //create sprites here//
 var path = createSprite(100,200,20,20);
 path.addImage(pathImg);
}

function draw() {
  background("white");
  drawSprites();
}
 