## Bouncing Pumpkins Array

<script src="p5/p5.js"></script>
<script src="bouncing_pumpkins_array.js"></script>

Make your pumpkin face bounce and multiply!

<div id="sketch">
</div>

```javascript
class Pumpkin {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  drawPumpkin() {
    //increment x and y
    this.x = this.x + this.vx;
    this.y += this.vy;

    //check boundaries and reverse direction
    if (this.x > width || this.x < 0) {
      this.vx = this.vx*-1;
    }

    if (this.y > height || this.y < 0) {
      this.vy *= -1;
    }

    //draw the pumpkin at x and y

    fill("#50ad2b");
    rect(this.x-20, this.y-130, 40, 100);

    fill("#ed864e");
    ellipse(this.x, this.y, 250, 200);

    fill(0);
    ellipse(this.x-40, this.y-20, 50, 50);
    ellipse(this.x+40, this.y-20, 50, 50);
    ellipse(this.x, this.y+40, 100, 40);
  }
}
//declare pumpkin array
let pumpkins;

function setup() {
  createCanvas(400, 400);
  //initialize empty pumpkin array
  pumpkins = [];

  for(let i = 0; i < 20; i++){
    //fill pumpkin array with 20 new pumpkins
    //with random widths and heights, and velocities between 2 and 7
    pumpkins[i] = new Pumpkin(int(random(width)),int(random(height)),int(random(2,7)),int(random(2,7)));

  }

}

function draw() {
  background(0);
    //go through every pumpkin in the array and draw it
    for(let i = 0; i < pumpkins.length; i++) {
    pumpkins[i].drawPumpkin();
  }

}

```

Copy the code into the editor below to run in your browser!

<iframe id="p5.js web editor embed"
    title="p5.js web editor embed"
    width="1000"
    height="600"
    src="https://editor.p5js.org/">
</iframe>
