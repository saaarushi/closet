var myFont;
var myImg;
var arrayOfTops;
var arrayOfBots;
var phase = "welcome";
var button;
var button2;
var topIndex;
var botIndex;
function preload() {
   myFont = loadFont('Chonburi-Regular.ttf');
  titleFont = loadFont('TitanOne-Regular.ttf');
   top1 = loadImage("cropped.jpg");
   top2 = loadImage("tank.jpg");
   top3 = loadImage("turtle.jpg");
   bot1 = loadImage("pants.jpg")
   bot2 = loadImage("kilt.jpg");
   bot3 = loadImage("skirt.jpg");
   arrayOfTops = [top1,top2,top3];
   arrayOfBots = [bot1,bot2,bot3];
}
function setup() {
  createCanvas(600, 600);
  if(phase=="closet"){
  button = createButton('NEXT');
  button.position(520, 550);
  button.mousePressed(switch2Display);
  }
  else if (phase =="display"){
    button2 = createButton('BACK');
    button2.position(520, 550);
    button2.mousePressed(switch2Closet);
  }
}

function draw() {
  background(255, 237, 36);
  if(phase=="welcome"){
    welcome();
  }
  else if(phase == "closet"){
    createClosetphase();
    button = createButton('NEXT');
    button.position(520, 550);
    button.mousePressed(switch2Display);
  } 
  else if(phase == "display"){
 createClothingDisplay(arrayOfTops[topIndex],arrayOfBots[botIndex]);
    button2 = createButton('BACK');
    button2.position(520, 550);
    button2.mousePressed(switch2Closet);
  }
 
}

// create function for phase 1
function createClosetphase(){
 background(40, 195, 252);
  fill(250, 2, 114);
  textFont(myFont);
  textAlign(LEFT);
  textSize(20);
  text('tops', 10, 75);
  text('bottoms',10,375)
  
  fill(255, 230, 0);
  rect(150,10,300,50);
  fill(250, 2, 114);
  textFont(myFont);
  textAlign(CENTER);
  textSize(30);
  text("RANDOMIZE",300,18);
  for (var topCount = 0; topCount<arrayOfTops.length;topCount ++){ 
    image(arrayOfTops[topCount],topCount*110+10,100,100,100);                                                                   }
  for (var botCount = 0;botCount<arrayOfBots.length;botCount ++){ 
    image(arrayOfBots[botCount],botCount*110+10,400,100,160);
} 
}

// create function for phase 2
function createClothingDisplay(topImage,botImage){
  background(40, 195, 252);
  image(botImage,165,210,250,400);
  image(topImage,185,-25,250,250);
  fill(40, 195, 252);
  rect(185,0,5,250);
  rect(385,0,50,250);
  
}
function switch2Display(){
  phase = "display";

}

function switch2Closet(){
  phase = "closet";
}
// welcome phase

function welcome(){
  phase = "welcome";
  background(255, 230, 0);
  noStroke();
  textFont(titleFont);
  textSize(100);
  fill(250, 2, 114);
  textAlign(CENTER,TOP);
  text("Welcome",300,100);
  fill(0, 189, 252);
  rect(90,290,420,120);
  fill(250, 2, 114);
  rect(100,300,400,100);
  textSize(50);
  fill(255, 230, 0);
  text("Click To Enter",300,320);
}
// make it interactive and stuff

function checkClick(x,y){
  if(x<=110&&y<300&&y>75){
    topIndex = 0;
  }
  else if(x>110&&x<=220&&y<300&&y>75){
    topIndex = 1;
  }
  else if(x>220&&y<300&&y>75){
    topIndex = 2;
  }
  else if(x<=110&&y>300){
    botIndex = 0;
  }
  else if(x>110&&x<=220&&y>300){
    botIndex = 1;
  }
  else if (x>220&&y>300){
    botIndex = 2;
  }
  else if(y<75){
    botIndex = Math.floor(Math.random()*2);
    topIndex = Math.floor(Math.random()*2);
  }
}

function mousePressed(){
  if(phase=="closet"){
    checkClick(mouseX,mouseY);
  }
  if(phase=="welcome"){
    phase = "closet";
  }
}

