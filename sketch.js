var girl, kanye, trump, twitter;
var dudes = [];
var mover = [];
var randomNumX, randomNumY;
var speed = 0.8;
var boss = [];
var mainBoss = [];
var countboss = 0;
var countmainBoss = 0;
var targetX, targetY;
var Xsteps = 2;
var Ysteps = 1;

var score = 0;
var pling, trumpEverybody, music;

var tstars = [];
var mstars = [];

var vol = true;


function preload(){
  girl = loadImage("images/girl2.png");
  for(let i=0; i<15; i++){
    if(i<=5)
   		dudes[i] = loadImage("images/"+i+".png");
    else if(i>5 && i<=10)
      dudes[i] = loadImage("images/0.png");
    else
      dudes[i] = loadImage("images/2.png");
	 }
  kanye = loadImage("images/kanye.png");
  trump = loadImage("images/trump.png");
  pling = loadSound("music/blop.mp3");
  trumpEverybody = loadSound("music/trump.mp3");
  music = loadSound("music/SkyHigh.mp3");
}

function setup() {
  //put setup code here
  createCanvas(windowWidth, windowHeight);
  targetX = windowWidth/2;
  targetY = windowHeight/2;
  for(let i=0; i<15; i++){
    let x = generateRandomX();
    let y = generateRandomY();
    mover[i] = new Mover(x,y,dudes[i],targetX,targetY,speed,50);
  }
  // oneMover = new Mover(0,0,twitter,targetX,targetY);

  for(let i=0; i<80; i++){
  	mstars[i] = new MovingStar();
    tstars[i] = new TwinklingStar();
  }
}

function mousePressed(){
  for(let i=(mover.length-1); i>=0; i--){
    if(mover[i].clicked(mouseX, mouseY)){
      score++;
      mover.splice(i,1);
      pling.play();
      let x = generateRandomX();
    	let y = generateRandomY();
      let moverAdd = new Mover(x,y,dudes[i],targetX,targetY,speed,50);
      mover.push(moverAdd);

  		let c = floor(random(0,14));
      if(c == 2 || c == 5 || c ==10){
        let bossAdd = new Mover(x,y,kanye,targetX,targetY,speed,65);
      	boss.push(bossAdd);
      }
      if(c == 6){
      	let mainBossAdd = new Mover(x,y,trump,targetX,targetY,speed,80);
        mainBoss.push(mainBossAdd);
        trumpEverybody.play();
      }
    }
  }
  for(let i=(boss.length-1); i>=0; i--){
  	if(boss[i].clicked(mouseX, mouseY)){
      countboss++;
      if(countboss>=2){
        score++;
    		boss.splice(i,1);
        pling.play();
        countboss = 0;
      }
    }
  }
  for(let i=(mainBoss.length-1); i>=0; i--){
  	if(mainBoss[i].clicked(mouseX, mouseY)){
      countmainBoss++;
      if(countmainBoss>=4){
      	score++;
    		mainBoss.splice(i,1);
        pling.play();
    		countmainBoss = 0;
      }
    }
  }
}

function draw() {
  // put drawing code here
  background(0, 0, 0);

   for(let i=0; i<80; i++){
    mstars[i].move();
  	mstars[i].show();
    tstars[i].show();
  }

  textSize(20);
  textFont("Bubblegum Sans");
  fill(218, 35, 255);
  text("Score: " + score,windowWidth/2,40);

  if(!ready){
  	if(music.isPlaying()){
  	if(!vol) {
      music.pause();
    }
  	} else {
  	if(vol)
      music.play();
  	}
  } else{

  if(targetX > 3*width/5 || targetX < width/3)
  	Xsteps *= -1;
  targetX = targetX + Xsteps;
  if(targetY > 3*height/5 || targetY < height/2)
  	Ysteps *= -1;
  targetY = targetY + Ysteps;

  image(girl, targetX, targetY, 50, 50);

  for(let i=0; i<(mover.length); i++){
    mover[i].targetX = targetX;
    mover[i].targetY = targetY;
    mover[i].update();
    mover[i].show();
    if(mover[i].intersects(targetX, targetY)){
    	ready = false;
      removeExisting();
      clearInterval(interval);
      reinitialize();
      gameOver();
    }
   }

  for(let i=0; i<(boss.length); i++){
  	boss[i].targetX = targetX;
    boss[i].targetY = targetY;
    boss[i].update();
    boss[i].show();
    if(boss[i].intersects(targetX, targetY)){
      ready = false;
      removeExisting();
      clearInterval(interval);
      reinitialize();
      gameOver();
    }
  }

  for(let i=0; i<(mainBoss.length); i++){
  	mainBoss[i].targetX = targetX;
    mainBoss[i].targetY = targetY;
    mainBoss[i].update();
    mainBoss[i].show();
    if(mainBoss[i].intersects(targetX, targetY)){
      ready = false;
      removeExisting();
      clearInterval(interval);
      reinitialize();
      gameOver();

    }
  }
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


function reinitialize(){
  speed = 0.8;
  targetX = windowWidth/2;
  targetY = windowHeight/2;
  for(let i=0; i<15; i++){
    let x = generateRandomX();
    let y = generateRandomY();
    mover[i] = new Mover(x,y,dudes[i],targetX,targetY,speed,50);
  }
  // oneMover = new Mover(0,0,twitter,targetX,targetY);
}

function removeExisting(){
  for(let i=(mover.length-1); i>=0; i--)
    mover.splice(i,mover.length);
  for(let i=(boss.length-1); i>=0; i--)
    boss.splice(i,boss.length);
  for(let i=(mainBoss.length-1); i>=0; i--)
    mainBoss.splice(i,mainBoss.length);
}
