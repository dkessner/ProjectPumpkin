## Draw With Pumpkin

<script src="p5/p5.js"></script>
<script src="drawWithPumpkin.js"></script>

Draw with the Pumpkin!

<div id="sketch">
</div>

```javascript
function setup() {
  var canvas =  createCanvas(400, 400);
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
```

Copy the code into the editor below to run it yourself!

<iframe id="p5.js web editor embed"
    title="p5.js web editor embed"
    width="1000"
    height="600"
    src="https://editor.p5js.org/">
</iframe>
