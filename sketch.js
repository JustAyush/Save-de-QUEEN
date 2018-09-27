var facebook, twitter;
let villans = [];
var targetX, targetY;
var villan;
var mover = [];

function preload(){
  facebook = loadImage("images/facebook.png");
  twitter = loadImage("images/twitter.png");
}


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  targetX = windowWidth/2;
  targetY = windowHeight/2;
  for(let i=0; i<15; i++){
    let x = random(0,windowWidth);
    let y = random(0,windowHeight);
    mover[i] = new Mover(x,y,twitter,targetX,targetY);
  }

}

function mousePressed(){
  for(let i=(mover.length-1); i>=0; i--){
    if(mover[i].clicked(mouseX, mouseY)){
      mover.splice(i,1);
    }
  }
}

function draw() {
  // put drawing code here
  background(0, 0, 0);
  image(facebook, targetX, targetY, 50, 50);
  for(let i=0; i<(mover.length); i++){
    mover[i].update();
    mover[i].show();
  }

}
