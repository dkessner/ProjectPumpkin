//
// drawWithPumpkin.js
//

function setup() {
    var canvas =  createCanvas(400, 400);
    canvas.parent("sketch");

  background(255);
  textSize(18);
  textAlign(CENTER);
  fill(0);
  text("drag to draw, 'c' to clear", width/2, height-20);
}

function draw() {
}

function keyPressed(){
  if(key == 'c')
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
