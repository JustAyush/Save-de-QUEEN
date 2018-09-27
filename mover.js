class Mover{
  constructor(x,y,img,targetX,targetY,speed,r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.img = img;
    this.targetX = targetX;
    this.targetY = targetY;
    this.position = createVector(x, y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topSpeed = speed;
    this.mouse = createVector(0,0);
  }
  update(){
    this.mouse = createVector(this.targetX,this.targetY);
    this.acceleration = p5.Vector.sub(this.mouse,this.position);
    this.acceleration.setMag(1.5);

    this.velocity = p5.Vector.add(this.velocity, this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position = p5.Vector.add(this.position, this.velocity);
  }

  show(){
    image(this.img, this.position.x, this.position.y, this.r, this.r);
    // noStroke();
    // fill(127);
    // ellipse(this.position.x,this.position.y,50,50);

  }

  clicked(a, b){
    let d = dist(this.position.x, this.position.y, a, b);
    return (d < this.r);
  }

  intersects(targetX, targetY){
    let d = dist(this.position.x, this.position.y, targetX, targetY);
    return (d < this.r);
  }


}







  // let c = floor(random(0,12));
  //     if(c == 2 || c == 5 || c ==10){
  //       let bossAdd = new Mover(x,y,twitter,windowWidth/2,windowHeight/2,speed,70);
  //     	boss.push(bossAdd);
  //     }
  //     if(c == 3 || c == 9){
  //     	let mainBossAdd = new Mover(x,y,twitter,windowWidth/2,windowHeight/2,speed,);
  //       mainBoss.push(mainBossAdd);
  //     }
