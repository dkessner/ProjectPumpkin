function setup() {
var canvas =  createCanvas(400, 400);
canvas.parent("sketch");
}

function draw() {
  textSize(18);
  textAlign(CENTER);
  fill(0);
  text("Drag to Draw - Press Space to Clear", width/2, height/7);
}

function keyPressed(){
  if(key == ' ')
    background(255);
}

function mouseDragged(){
  noStroke();
  fill(245, 158, 66);
  ellipse(mouseX,mouseY, 100, 100);
  fill(26, 145, 80);
  rectMode(CENTER);
  rect(mouseX,mouseY-50,20,35,10);
  fill(0);
  triangle(mouseX-30,mouseY-20,mouseX-10,mouseY-20, mouseX-20,mouseY);
  triangle(mouseX+30,mouseY-20,mouseX+10,mouseY-20, mouseX+20,mouseY);
  arc(mouseX, mouseY+10,50,25,2*PI,PI);
}
