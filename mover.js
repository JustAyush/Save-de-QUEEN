class Mover{
  constructor(x,y,img,targetX,targetY){
    this.img = img;
    this.targetX = targetX;
    this.targetY = targetY;
    this.position = createVector(x, y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topSpeed = 0.5;
    this.mouse = createVector(0,0);
  }
  update(){
    this.mouse = createVector(this.targetX,this.targetY);
    this.acceleration = p5.Vector.sub(this.mouse,this.position);
    this.acceleration.setMag(0.5);

    this.velocity = p5.Vector.add(this.velocity, this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position = p5.Vector.add(this.position, this.velocity);
  }

  show(){
    image(this.img, this.position.x, this.position.y, 50, 50);
    // stroke(0);
    // strokeWeight(2);
    // fill(127);
    // ellipse(this.position.x,this.position.y,50,50);

  }

}
