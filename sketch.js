var iss, spacecraft;
var bg_img, iss_img, spacecraft_img1;
var hasDocked = false;

function preload(){
  bg_img= loadImage("space.jpg");
  iss_img = loadImage("iss.png");
  spacecraft_img1 = loadImage("spacecraft1.png");
  spacecraft_img2 = loadImage("spacecraft2.png");
  spacecraft_img3= loadImage("spacecraft3.png");
  spacecraft_img4= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(spacecraft_img1);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(iss_img);
  iss.scale = 0.25;
}
function draw() {
  background(bg_img);
  
  spacecraft.addImage(spacecraft_img1);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft_img3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft_img4);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft_img2);
  }
}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}