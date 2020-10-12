## Decorate a Pumpkin

<script src="p5/p5.js"></script>
<script src="face.js"></script>

Draw on the Pumpkin!

<div id="sketch">
</div>

```javascript

var pump;
function setup() {
  createCanvas(400, 400);
  pump = loadImage("https://lh3.googleusercontent.com/proxy/kUKW9urw3Et-uXHXWp_lsL9XWxU4Ca0d72ZJyaf-61IE93FsFe-pEd1fg8IvVbufJgEuk-noaXM4Y4jqKPFCv8eARwk");
    background(255);
    textAlign(CENTER);
  textSize(18);
  text("Drag Your Mouse", width/2, height/3)
  text("Then Press Space for New Pumpkin", width/2, height/2)
}
function draw() {
  imageMode(CENTER);

}
function keyPressed(){
  if(key == ' ')
    background(image(pump,width/2,height/2, 400,400));

}
function mouseDragged(){
  fill(0);
  ellipse(mouseX,mouseY,10,10);
}

```

Copy the code into the editor below to run in your browser!

<iframe id="p5.js web editor embed"
    title="p5.js web editor embed"
    width="1000"
    height="600"
    src="https://editor.p5js.org/">
</iframe>
