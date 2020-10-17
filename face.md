## Pumpkin Face

<script src="p5/p5.js"></script>
<script src="face.js"></script>

Make a pumpkin face!

<div id="sketch">
</div>

```javascript
function setup() {
  var canvas = createCanvas(400, 400);
}

function draw() {
    background(0);

    fill("#50ad2b");
    rect(180, 70, 40, 100);

    fill("#ed864e");
    ellipse(200, 200, 250, 200);

    fill(0);
    ellipse(160, 180, 50, 50);
    ellipse(240, 180, 50, 50);
    ellipse(200, 240, 100, 40);
}
```

Copy the code into the editor below to run in your browser!

<iframe id="editor"
    title="p5.js web editor embed"
    width="1000"
    height="600"
    src="https://editor.p5js.org/">
</iframe>

<script src="godark.js"></script>



