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

let pumpkins;

function setup() {
  createCanvas(400, 400);

  //initialize the arraylist with arraylist constructor function
  pumpkins = [];

  for(let i = 0; i < 20; i++){
    pumpkins[i] = new Pumpkin(int(random(width)),int(random(height)),int(random(2,7)),int(random(2,7)));

  }

}

function draw() {
  background(0);

    for(let i = 0; i < pumpkins.length; i++) {
    pumpkins[i].drawPumpkin();
  }

}
