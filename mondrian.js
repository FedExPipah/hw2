function setup() {
  createCanvas(750, 700);
  strokeCap(SQUARE);
}

function draw() {
  background(255);
  noStroke();

  fill(255, 255, 204); // big yellow
  rect(0, 0, 400, 400); // (x,y,w,h)

  fill(255, 99, 71); // tomato
  rect(400, 200, 100, 200);

  fill(95, 158, 160); // small blue-green
  rect(550, 490, 300, 300);

  fill(255, 255, 204) // long yellow
  rect(650, 0, 100, 490);

  fill(255, 99, 71); // horizontal tomato
  rect(300, 600, 250, 100);
  
  fill(255, 255, 204); // small yellow
  rect(400, 500, 160, 100);
  
  fill(95, 158, 160); // big blue-green
  rect(0, 400, 300, 300);

  // vertical lines
  stroke(0); 
  strokeWeight(15); // small "s" big "W"
  line(400, 600, 400, 1); //(x1,y1,x2,y2)
  
   strokeWeight(10); 
  line(500, 400, 500, 1); 
  
   strokeWeight(20); 
  line(650, 490, 650, 1); 
  
strokeWeight(10)
line(555, 490, 555, 700);
  
   strokeWeight(10); // right black line
  line(300, 400, 300, 700);
  
  // horizontal lines
  strokeWeight(20); 
  line(400, 210, 500, 210);
  
  strokeWeight(10)
  line(0, 400, 650, 400);
  
   strokeWeight(10)
  line(295, 600, 555, 600);
 
  strokeWeight(18)
 line(400, 490, 750, 490);
  
   strokeWeight(18)
 line(500, 120, 650, 120);
}
