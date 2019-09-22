function setup() {
  createCanvas(400, 400);

}

var ballX = 30; // set up a variable called "ballX" 
var ballSpeed = 5;

var ballX2 = 400; // if 30 then 2balls start at the same point / 400=canvas size
var ballSpeed2 = 5;

var ballX3 = 30; // dark pink color ball
var ballSpeed3 = 5;

var ballX4 = 370; // bluegreenish color ball
var ballSpeed4 = 5;

function draw() {
  background(255, 250, 205);
  // table cloth red horizontal lines
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, 200, 400, 200);
  strokeWeight(10);
  line(0, 250, 400, 250);
  strokeWeight(10);
  line(0, 150, 400, 150);
  strokeWeight(3);
  line(0, 100, 400, 100);
  strokeWeight(10);
  line(0, 50, 400, 50);
  strokeWeight(3);
  line(0, 300, 400, 300);
  strokeWeight(10);
  line(0, 350, 400, 350);
  
  // white vertical lines
  stroke(255);
  strokeWeight(10);
  line(200, 0, 200, 400);
  strokeWeight(5);
  line(210, 0, 210, 400);
  strokeWeight(10);
  line(250, 0, 250, 400);
  strokeWeight(5);
  line(260, 0, 260, 400);
  strokeWeight(10);
  line(300, 0, 300, 400);
  strokeWeight(5);
  line(310, 0, 310, 400);
  strokeWeight(10);
  line(150, 0, 150, 400);
  strokeWeight(5);
  line(160, 0, 160, 400);
  strokeWeight(10);
  line(100, 0, 100, 400);
  strokeWeight(5);
  line(110, 0, 110, 400);
  strokeWeight(10);
  line(50, 0, 50, 400);
  strokeWeight(5);
  line(60, 0, 60, 400);
  strokeWeight(10);
  line(350, 0, 350, 400);
  strokeWeight(5);
  line(360, 0, 360, 400);

  noStroke();
  fill(255, 99, 71, 255);
  ellipse(ballX, 100, 50); //(var, starting point,var-size)
  fill(255, 99, 71, 255);
  ellipse(ballX2, 200, 40);
  fill(255, 99, 71, 255);
  ellipse(100, ballX3, 60);
  fill(255, 99, 71, 255);
  ellipse(200, ballX4, 40); // 200,30
  ballX = ballX + ballSpeed;
  ballX2 = ballX2 + ballSpeed2;
  ballX3 = ballX3 + ballSpeed3;
  ballX4 = ballX4 + ballSpeed4;

  // ballX = ballX + 2; // # = speed that balX move (n pixel at a time)

  //bounce
  if (ballX >= 400) {
    ballSpeed = -3 //moving speed
  }
  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }
  if (ballX3 >= 400) {
    ballSpeed3 = -3;
  }
  if (ballX4 >= 400) {
    ballSpeed4 = -5;
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
  if (ballX4 <= 0) {
    ballSpeed4 = 5;
  }
}
