## Draw With Pumpkin

<script src="p5/p5.js"></script>
<script src="drawWithPumpkin.js"></script>

Draw with the Pumpkin!

<div id="sketch">
</div>

```javascript
function setup() {
  createCanvas(400, 400);
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

```

Copy the code into the editor below to run in your browser!

<iframe id="p5.js web editor embed"
    title="p5.js web editor embed"
    width="1000"
    height="600"
    src="https://editor.p5js.org/">
</iframe>
