## Moving Pumpkin Face

<script src="p5/p5.js"></script>
<script src="moving_face.js"></script>

Animate your pumpkin face!

<div id="sketch">
</div>

```javascript
function setup() {
  var canvas = createCanvas(400, 400);
}

let x = 50;

function drawPumpkin(x, y) {

    fill("#50ad2b");
    rect(x-20, y-130, 40, 100);

    fill("#ed864e");
    ellipse(x, y, 250, 200);

    fill(0);
    ellipse(x-40, y-20, 50, 50);
    ellipse(x+40, y-20, 50, 50);
    ellipse(x, y+40, 100, 40);
}

function draw() {
    background(0);
    drawPumpkin(x, 200);

    x++;
    if (x > width+125) x = -125;
}
```

Copy the code into the editor below to run in your browser!

<iframe id="p5.js web editor embed"
    title="p5.js web editor embed"
    width="1000"
    height="600"
    src="https://editor.p5js.org/">
</iframe>


