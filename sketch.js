var facebook, twitter;
var mover = [];
var randomNumX, randomNumY;
// let villans = [];
// var targetX, targetY;
// var villan;
//var oneMover;

function preload(){
  facebook = loadImage("images/facebook.png");
  twitter = loadImage("images/twitter.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<15; i++){
    let x = generateRandomX();
    let y = generateRandomY();
    mover[i] = new Mover(x,y,twitter,windowWidth/2,windowHeight/2);
  }
  // oneMover = new Mover(0,0,twitter,targetX,targetY);

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
  image(facebook, windowWidth/2, windowHeight/2, 50, 50);
  for(let i=0; i<( mover.length); i++){
    mover[i].targetX = windowWidth/2;
    mover[i].targetY = windowHeight/2;
    mover[i].update();
    mover[i].show();
    if(mover[i].intersects(windowWidth/2, windowHeight/2))
      print("Intersected");
  }
  // oneMover.update();
  // oneMover.show();
  // if(oneMover.intersects(targetX,targetY))
  //   print("Intersected");

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function generateRandomX(){
  randomNumX = random(-2*windowWidth, 2*windowWidth);
  return (randomNumX>0 && randomNumX<windowWidth) ? generateRandomX() : randomNumX;
}

function generateRandomY(){
  randomNumY = random(-2*windowHeight, 2*windowHeight);
  return (randomNumY>0 && randomNumY<windowHeight) ? generateRandomY() : randomNumY;
}
