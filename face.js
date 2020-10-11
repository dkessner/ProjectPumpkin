//
// face.js
//


function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch");
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
