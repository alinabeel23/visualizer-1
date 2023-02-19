/*
 * @name Interactivity 1
 * @frame 720,425
 * @description The circle changes color when you click on it.
 */

// for red, green, and blue color values
let r, g, b;

function setup() {
  createCanvas(720, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {

  // Draw a circle
  strokeWeight(20);
  stroke(r, g, b);
  fill(r, g, b, 179);

}

// // When the user clicks the mouse
function mousePressed() {
    // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);


  if (d < 100) {
      background(18);

    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
     ellipse(360, 200, 200, 200);
  }
  else if (d > 100) {
      background(18);

    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    rectMode(CENTER);
     rect(360, 200, 200, 200);
  }
  if(d > 100 && d < 200){
    background(18);
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    rectMode(CENTER);
   square(360, 200, 200,20);
     
     }
   if(d > 200){
    background(18);
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    rectMode(CENTER);
    square(360, 200, 200);
     
     }
}

function mouseDragged() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  let corner=mouseX/6;
  if(corner<0){
    corner=0;
  }
    background(18);
    // Pick new random color values
    rectMode(CENTER);
    square(360, 200, 200, corner);
}