class Villans{
  constructor(x,y,r,img,targetX,targetY){
    this.x = x;
    this.y = y;
    this.r = r;
    this.img = img;
    this.targetX = targetX;
    this.targetY = targetY;

    this.position = createVector(this.x, this.y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topSpeed = 5;
    this.target = createVector(0,0);
  }

  make1(){
    this.target = createVector(this.targetX,this.targetY);
    this.acceleration = p5.Vector.sub(this.target, this.position);
    this.acceleration.setMag(0.5);

    this.velocity = p5.Vector.add(this.velocity, this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.target = p5.Vector.add(this.target, this.velocity);

  }

  make(){
    image(this.position.x,this.position.y,this.r,this.r);
    // noStroke();
    // fill(225, 0, 225);
    // ellipse(this.x, this.y, this.r, this.r);

  }

  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);

  }

  moveForward(moveX, moveY){
    this.x = this.x + moveX;

  }

  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    if(d < (this.r)/2 + (other.r)/2)
      return true;
  }

}
