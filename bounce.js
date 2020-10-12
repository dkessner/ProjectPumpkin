var x, y, vx, vy;
function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  x = width/2;
  y = height/2;
  vx = 3;
  vy = 5;
}

function draw() {
  background(220);

  x = x + vx;
  y = y + vy;

  if(x + 100> width || x - 100 < 0)
    vx = vx * -1;
  if(y + 150/2 > height || y - 150/2 < 0)
    vy = vy * -1;

  //center column
  rectMode(CENTER);
  noStroke();
  rect(x,y,20,150);
  //sides
  fill(245, 161, 66);
  stroke(1);
  arc(x-10, y, 200, 150, PI/2, 3*PI/2);
  arc(x+10, y, 200, 150, 3*PI/2, PI/2);
   //1st inside lines
  arc(x, y, 125,150,PI/2, 3*PI/2);
  arc(x, y, 125,150,3*PI/2, PI/2);
   //2nd inside lines
  arc(x, y, 50,150,PI/2, 3*PI/2);
  arc(x, y, 50,150,3*PI/2, PI/2);
  //dips
  stroke(1);
  fill(220);
  arc(x, y-75,20,10,2*PI, PI);
  arc(x, y+75,20,10,PI,2*PI);
  //stem
  fill(26, 145, 80);
  rect(x,y-80,20,35,10);
  //face
  fill(0);
  triangle(x-65,y-50,x-10,y-45, x-40,y);
    triangle(x+65,y-50,x+10,y-45, x+40,y);
  arc(x, y+25,100,50,2*PI,PI);

}
