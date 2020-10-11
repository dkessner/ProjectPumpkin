
let img;

function preload() {
  img = loadImage("pumpkin.png");
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  img.resize(200, 200);
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(img, width/2, height/2);
}
