class MovingStar{
	constructor(){
  	this.x = random(-width, 2*width);
    this.y = random(-height, 2*height);
    this.size = random(2,6);
  }

  show(){
  	noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
    stroke(216, 198, 197);
    line(this.x,this.y,this.x,(this.y-5));
  }

  move(){
  	this.y += 4;
    if(this.y > height){
    	this.y = 0;
    }
  }

}
