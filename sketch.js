var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var angle = 0.1;
var seconds = 3;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  frameRate(15);
}

function draw() {
  background(220);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }

  text("Score: " + score, width / 2, 40);
}

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 5) {
    gameState = "L2";
  }

  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  ballx += random(-30, 30);
}

function levelTwo() {
  background(200, 1200, 0);
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);

  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L3";
  }
  ellipse(ballx, bally, ballSize, ballSize);
  bally += random(-30, 30);
}

function levelThree() {
  background(200, 100, 2000);
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize - 1;
    score = score + 1;
  }
  if (score > 15) {
    gameState = "L4";
  }

  ellipse(ballx, bally, ballSize, ballSize);
  ballx += random(-20, 20);
  bally += random(-20, 20);
}
function levelFour() {
  background(200, 410, 1000);
  text("Level 4", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize - 1;
    score = score + 1;
  }
  if (score > 20) {
    // level 4
    gameState = "L5";
  }
  setTimeout(function() {
    for (let i = 0; i < 1; i += 1) { 
      ballx = random(width);
      bally = random(height);
    }
  }, seconds*1000);
  ellipse(ballx, bally, ballSize, ballSize);
}
