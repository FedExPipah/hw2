function setup() {
  createCanvas(400, 400);
  noStroke();
}

var ballX = 30; // dark pink color ball
var ballSpeed = 3;

var ballX2 = 370; // blue-green-ish color ball
var ballSpeed2 = 5;

function draw() {
  background(230,230,250);
  
// if (ball,point, size) then ball moves horizontally.
// if (point,ball,size) then ball moves vertically.

  fill(240,128,128);
  ellipse(100,ballX, 30);
  
  fill(72,209,204);
  ellipse(200,ballX2, 30); // 200,30

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2; // if ballX2-ballspeed2 then ballX2 go once won't CB

  if (ballX >= 400) {
    ballSpeed = -3;
  }

  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballX <= 0) {
    ballSpeed = 3;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }
}
