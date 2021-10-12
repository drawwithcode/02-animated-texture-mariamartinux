//variables
let r = 1;
let g = 1;
let b = 1;

let horizontalp = 1;
let verticalp = 1;

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  background("black");
  frameRate(60);

  rectMode(CENTER); //i don't need circlemode cause it's already drawn in the center
}

//draw the squares and the circles, the text
function draw() {
  textSize(50);
  textFont("cooper");
  text("art generates itself", windowWidth / 2, windowHeight / 2);
  textAlign(CENTER, CENTER);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);
  rect(25 * horizontalp, 25 * verticalp, 100, 100);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  fill(r, g, b);
  circle(25 * horizontalp, 25 * verticalp, 100, 100);

  //increasing the horizontal and vertical position so i can cover the whole screen with the shapes
  horizontalp = horizontalp + 2;
  if (horizontalp > 100) {
    verticalp = verticalp + 2;
    horizontalp = 1;
  }

  if (verticalp > 35) {
    horizontalp = horizontalp + 4;
    verticalp = 1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
