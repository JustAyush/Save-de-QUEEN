class Mover{
  constructor(x,y,img,targetX,targetY){
    this.x = x;
    this.y = y;
    this.img = img;
    this.targetX = targetX;
    this.targetY = targetY;
    this.position = createVector(x, y);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.topSpeed =6;
    this.mouse = createVector(0,0);
  }
  update(){
    this.mouse = createVector(this.targetX,this.targetY);
    // this.targetX = this.targetX + random(0,100);
    // this.targetY = this.targetY + random(0,100);
    this.acceleration = p5.Vector.sub(this.mouse,this.position);
    this.acceleration.setMag(1.5);

    this.velocity = p5.Vector.add(this.velocity, this.acceleration);
    this.velocity.limit(this.topSpeed);
    this.position = p5.Vector.add(this.position, this.velocity);
  }

  show(){
    image(this.img, this.position.x, this.position.y, 50, 50);
    // noStroke();
    // fill(127);
    // ellipse(this.position.x,this.position.y,50,50);

  }

  clicked(a, b){
    let d = dist(this.position.x, this.position.y, a, b);
    return (d < 50);
  }

  intersects(targetX, targetY){
    let d = dist(this.position.x, this.position.y, targetX, targetY);
    return (d < 50);
  }


}
