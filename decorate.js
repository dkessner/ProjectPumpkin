//
// decorate.js
//


var currentColor = '#000000';


function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch");

  background(255);
  drawFace();

  textAlign(CENTER);
  textSize(18);
  text("drag to draw", width/2, height-40)
  text("'r/g/b/0/c': red/green/blue/black/clear", width/2, height-20)
}

function draw() {
}

function drawFace() {
    fill("#50ad2b");
    rect(180, 70, 40, 100);

    fill("#ed864e");
    ellipse(200, 200, 250, 200);

    fill(0);
    ellipse(160, 180, 50, 50);
    ellipse(240, 180, 50, 50);
    ellipse(200, 240, 100, 40);
}

function keyPressed(){
  if (key == 'c')
  {
    background(255);
    drawFace();
  }
  else if (key == 'r')
  {
    currentColor = '#ff0000';
  }
  else if (key == 'g')
  {
    currentColor = '#00ff00';
  }
  else if (key == 'b')
  {
    currentColor = '#0000bb';
  }
  else if (key == '0')
  {
    currentColor = '#000000';
  }
}


function mouseDragged(){
  fill(currentColor);
  ellipse(mouseX,mouseY,10,10);
}


