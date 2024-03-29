function setup() {
  createCanvas(400, 400);
  noStroke();
}

var ballX = 30;
var ballSpeed = 5;

var ballX2 = 30;
var ballSpeed2 = 3;

var ballX3 = 30;
var ballSpeed3 = 10;

function draw() {
  background(30, 144, 255);

  stroke(255, 200);
  strokeWeight(5);
  line(250, 0, 250, 400);

  strokeWeight(5);
  line(150, 0, 150, 400);

  strokeWeight(5);
  line(50, 0, 50, 400);

  strokeWeight(5);
  line(350, 0, 350, 400);

  noStroke();
  fill(255, 99, 71);
  ellipse(200, ballX, 50);
  fill(60, 179, 113);
  ellipse(300, ballX2, 50);
  fill(240, 128, 128);
  ellipse(100, ballX3, 50);
  fill(72, 209, 204);

  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballX3 = ballX3 + ballSpeed3;

  //bounce
  if (ballX >= 400) {
    ballSpeed = -3 
  }
  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }
  if (ballX3 >= 400) {
    ballSpeed3 = -3;
  }

  if (ballX <= 0) {
    ballSpeed = 3
  }
  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }
  if (ballX3 <= 0) {
    ballSpeed3 = 3;
  }
}
