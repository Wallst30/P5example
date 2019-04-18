let r, g, b, size, h, w;

function setup() {
  createCanvas(720, 400);
    xPos = 0; 
    yPos = height/2; 
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
   
   
}

function draw() {
  background("#efe3ce");
  
  textSize(24); 
  text('Click on the Screen as many times as you would like!', 75, 30); 
  fill(0,102,153); 
  
  textSize(24); 
  text('Watch the circle change shapes and colors!', 50, 380); 

  fill(0,102,153); 
  // Draw a circles
  strokeWeight(3);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(xPos, yPos, h, w);
    xPos = xPos + 1; 
    ellipse(); 
   
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  yPos =mouseY; 
  size = random(width); 
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    h = random(150, 350);
    w = random(100, 300);     
      
      

}
