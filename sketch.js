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
    let x = random(50,800);
    let y = random(50,800);
    mover[i] = new Mover(x,y,twitter);
  }
  //villan = new Villans(40, 40, 50, twitter, targetX, targetY);
//   for (let i=0; i<15; i++){
//     let x = random(20, 600);
//     let y = random(20, 800);
//       villans[i] = new Villans(x, y, 50, twitter, targetX, targetY);
//   }
}

function draw() {
  // put drawing code here
  background(0, 0, 0);
  image(facebook, targetX, targetY, 50, 50);
  for(let i=0; i<(mover.length); i++){
    mover[i].update();
    mover[i].show();
  }

//  villans[0].show();
  for (let i=0; i<villans.length; i++){
  //  villans[i].update();
  //  villans[i].show();
  }



}
