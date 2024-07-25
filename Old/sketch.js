let currentDate;
let finalDate;
let startDate;
let difCurrent;
let difStart;
let prog;
let progPercent;
let fontUsed; 
let rnboLine;

function preload() {
  fontUsed = loadFont('Generica.otf');
  fontCounter = loadFont('SourceCodePro-ExtraLight.ttf');
}

function setup() {
  colorMode(HSB,360);
  setupProg();
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  rnboLine = new rnbo(width * 0.1 ,height * 0.4  , width * 0.8 , height * 0.12);
  background(0);
}

function draw() {
  background(0);
  updateProg();

  if (windowWidth <= 500) {
    textSize(32);
  }
  else {
    textSize(64);
  }
  textAlign(CENTER,CENTER);
  textFont(fontUsed);
  noStroke();
  fill(360,0,360);
  text("Leni will nie wieder arbeiten.", width * 0.5, height * 0.2);

  fill(360);
  textFont(fontCounter);
  textAlign(RIGHT);
  if (windowWidth <= 500) {
    textSize(16);
  }
  else {
    textSize(20);
  }
  text(progPercent + " %" ,width * 0.9, height * 0.52 + 16);
  rnboLine.show();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  rnboLine.resize(width * 0.1 ,height * 0.4  , width * 0.8 , height * 0.12);
}