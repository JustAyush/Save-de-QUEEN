class TwinklingStar{
	constructor(){
  	this.x = random(-width, 2*width);
    this.y = random(-height, 2*height);
  }

  show(){
  	noStroke();
    fill(245);
    ellipse(this.x, this.y, random(0,6));
  }

}
  
