
var pump;
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("sketch");
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
