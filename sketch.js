var facebook, twitter;
var mover = [];
var randomNumX, randomNumY;
var speed = 0.4;
var boss = [];
var mainBoss = [];
var countboss = 0;
var countmainBoss = 0;
var targetX, targetY;;
var Xsteps = 2;
var Ysteps = 1;



// let villans = [];
// var villan;
//var oneMover;

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
    let x = generateRandomX();
    let y = generateRandomY();
    mover[i] = new Mover(x,y,twitter,targetX,targetY,speed,50);
  }
  // oneMover = new Mover(0,0,twitter,targetX,targetY);
  setInterval(incSpeed,4000);  
}

function mousePressed(){
  for(let i=(mover.length-1); i>=0; i--){
    if(mover[i].clicked(mouseX, mouseY)){
      mover.splice(i,1);
      let x = generateRandomX();
    	let y = generateRandomY();
      let moverAdd = new Mover(x,y,twitter,targetX,targetY,speed,50);
      mover.push(moverAdd);
  
  		let c = floor(random(0,12));
      if(c == 2 || c == 5 || c ==10){
        let bossAdd = new Mover(x,y,twitter,targetX,targetY,speed,65);
      	boss.push(bossAdd);
      }
      if(c == 3 || c == 9){
      	let mainBossAdd = new Mover(x,y,twitter,targetX,targetY,speed,80);
        mainBoss.push(mainBossAdd);
      }
    }
  }
  for(let i=(boss.length-1); i>=0; i--){
  	if(boss[i].clicked(mouseX, mouseY)){
      countboss++;
      if(countboss>=2){
    		boss.splice(i,1);
        countboss = 0;
      }
    }
  }
  for(let i=(mainBoss.length-1); i>=0; i--){
  	if(mainBoss[i].clicked(mouseX, mouseY)){
      countmainBoss++;
      if(countmainBoss>=4){
    	mainBoss.splice(i,1);
    	countmainBoss = 0;
      }
    }
  }
}

function draw() {
  // put drawing code here
  background(0, 0, 0);
  
  if(targetX > 3*width/5 || targetX < width/3)
  	Xsteps *= -1;
  targetX = targetX + Xsteps;
  if(targetY > 3*height/5 || targetY < height/2)
  	Ysteps *= -1;
  targetY = targetY + Ysteps;
  image(facebook, targetX, targetY, 50, 50);
   
  for(let i=0; i<(mover.length); i++){
    mover[i].targetX = targetX;
    mover[i].targetY = targetY;
    mover[i].update();
    mover[i].show();
  //   if(mover[i].intersects(windowWidth/2, windowHeight/2))
  //     print("Intersected");
   }
  
  for(let i=0; i<(boss.length); i++){
  	boss[i].targetX = targetX;
    boss[i].targetY = targetY;
    boss[i].update();
    boss[i].show();
  }
  
  for(let i=0; i<(mainBoss.length); i++){
  	mainBoss[i].targetX = targetX;
    mainBoss[i].targetY = targetY;
    mainBoss[i].update();
    mainBoss[i].show();
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

function incSpeed(){
  for(let i=0; i<mover.length; i++){
  	if(speed<0.8)
      speed += 0.1;
    else if(speed>=0.8 && speed<1.5)
    	speed += 0.05;
    else
      speed += 0.0001;
    	
  }
}
