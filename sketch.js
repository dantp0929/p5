let button, img;

function preload() {
  img = loadImage('assets/RedditWireframe.png');
}

function setup() {
  // put setup code here
  createCanvas(400, 800);
  background(50);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loadCamera);
}

function loadCamera() {
  // put drawing code here
  image(img, 0, 0);
}