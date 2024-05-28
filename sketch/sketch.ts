function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER).noFill().frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  const s = frameCount % 100 === 0 ? true : false
  background(255);
  fill(0)
  circle(windowWidth/2-50, windowHeight/2-50, 100);
}
